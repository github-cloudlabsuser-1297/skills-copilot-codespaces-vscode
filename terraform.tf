provider "azurerm" {
  features {}
}

variable "storage_account_name" {
  description = "Name of the storage account to create."
  type        = string
}

variable "location" {
  description = "Location for the storage account."
  type        = string
  default     = "East US"
}

variable "sku" {
  description = "The SKU of the storage account."
  type        = string
  default     = "Standard_LRS"
  validation {
    condition     = contains(["Standard_LRS", "Standard_GRS", "Standard_ZRS", "Premium_LRS"], var.sku)
    error_message = "The SKU must be one of Standard_LRS, Standard_GRS, Standard_ZRS, or Premium_LRS."
  }
}

resource "azurerm_storage_account" "example" {
  name                     = var.storage_account_name
  resource_group_name      = azurerm_resource_group.example.name
  location                 = var.location
  account_tier             = var.sku == "Premium_LRS" ? "Premium" : "Standard"
  account_replication_type = var.sku == "Standard_LRS" ? "LRS" :
                             var.sku == "Standard_GRS" ? "GRS" :
                             var.sku == "Standard_ZRS" ? "ZRS" : "LRS"
  kind                     = "StorageV2"
}

resource "azurerm_resource_group" "example" {
  name     = "example-resource-group"
  location = var.location
}

output "storage_account_name" {
  description = "The name of the created storage account."
  value       = azurerm_storage_account.example.name
}