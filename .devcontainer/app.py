# Create a simple calculator that can add, subtract, multiply, divide, or calculate percentages depending upon the input from the user.

def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y == 0:
        return "Error! Division by zero."
    return x / y

def percentage(x, y):
    return (x / y) * 100

def calculator():
    """
    A simple calculator function that allows the user to perform basic arithmetic operations.

    The user can select one of the following operations:
    1. Addition
    2. Subtraction
    3. Multiplication
    4. Division
    5. Percentage

    The function prompts the user to input their choice of operation and two numeric values.
    It then performs the selected operation and displays the result.

    Exceptions:
    - Handles invalid numeric input by displaying an error message.
    - Handles division by zero in the percentage operation by displaying an error message.

    Returns:
    - None
    """
    print("Select operation:")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    print("5. Percentage")

    choice = input("Enter choice (1/2/3/4/5): ")

    if choice in ('1', '2', '3', '4', '5'):
        try:
            num1 = float(input("Enter first number: "))
            num2 = float(input("Enter second number: "))
        except ValueError:
            print("Invalid input! Please enter numeric values.")
            return

        if choice == '1':
            print(f"The result is: {add(num1, num2)}")
        elif choice == '2':
            print(f"The result is: {subtract(num1, num2)}")
        elif choice == '3':
            print(f"The result is: {multiply(num1, num2)}")
        elif choice == '4':
            print(f"The result is: {divide(num1, num2)}")
        elif choice == '5':
            if num2 == 0:
                print("Error! Division by zero.")
            else:
                print(f"The result is: {percentage(num1, num2)}%")
    else:
        print("Invalid choice! Please select a valid operation.")

# Run the calculator
calculator()