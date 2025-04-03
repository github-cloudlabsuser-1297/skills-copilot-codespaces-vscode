# Login to Azure
Connect-AzAccount

# Variables
$resourceGroupName = "MyResourceGroup"
$location = "EastUS"
$vmName = "MyVM"
$vmSize = "Standard_DS1_v2"
$adminUsername = "azureuser"
$adminPassword = "P@ssw0rd123!" # Ensure this meets Azure's password complexity requirements
$networkName = "MyVNet"
$subnetName = "MySubnet"
$ipName = "MyPublicIP"
$nicName = "MyNIC"
$image = "Win2022Datacenter" # Use a valid image reference (e.g., Windows Server 2022 Datacenter)

# Create a Resource Group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a Virtual Network and Subnet
$vnet = New-AzVirtualNetwork -ResourceGroupName $resourceGroupName -Location $location `
    -Name $networkName -AddressPrefix "10.0.0.0/16"
Add-AzVirtualNetworkSubnetConfig -Name $subnetName -AddressPrefix "10.0.0.0/24" -VirtualNetwork $vnet
$vnet | Set-AzVirtualNetwork

# Create a Public IP Address
$publicIp = New-AzPublicIpAddress -ResourceGroupName $resourceGroupName -Location $location `
    -Name $ipName -AllocationMethod Dynamic

# Create a Network Interface
$subnet = Get-AzVirtualNetworkSubnetConfig -Name $subnetName -VirtualNetwork $vnet
$nic = New-AzNetworkInterface -ResourceGroupName $resourceGroupName -Location $location `
    -Name $nicName -SubnetId $subnet.Id -PublicIpAddressId $publicIp.Id

# Create a Virtual Machine Configuration
$vmConfig = New-AzVMConfig -VMName $vmName -VMSize $vmSize
$vmConfig = Set-AzVMOperatingSystem -VM $vmConfig -Windows -ComputerName $vmName `
    -Credential (New-Object PSCredential ($adminUsername, (ConvertTo-SecureString $adminPassword -AsPlainText -Force)))
$vmConfig = Set-AzVMSourceImage -VM $vmConfig -PublisherName "MicrosoftWindowsServer" `
    -Offer "WindowsServer" -Skus $image -Version "latest"
$vmConfig = Add-AzVMNetworkInterface -VM $vmConfig -Id $nic.Id

# Create the Virtual Machine
New-AzVM -ResourceGroupName $resourceGroupName -Location $location -VM $vmConfig