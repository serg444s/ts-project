import "./style.css";

import "./style.css";

// Example
function add(num1: number, num2: number) {
  return num1 + num2;
}

console.log(add(1, 2));

// Task 1
type Order = {
  orderId: number;
  customerName: string;
  isDelivered: boolean;
};

function formatOrder(order: Order): string {
  return `Order ${order.orderId}: ${order.customerName} - ${
    order.isDelivered ? "Delivered" : "Pending"
  }`;
}

const order1 = {
  orderId: 101,
  customerName: "John Doe",
  isDelivered: false,
};

console.log(formatOrder(order1));

// Task 2

type UserProfile = {
  username: string;
  age: number;
  isActive: boolean;
};

function displayUserProfile(profile: UserProfile): string {
  return `${profile.username} is ${profile.age} years old and is currently ${
    profile.isActive ? "active" : "inactive"
  }.`;
}

const userProfile = {
  username: "alice123",
  age: 28,
  isActive: true,
};

console.log(displayUserProfile(userProfile));

// Task 3

function calculateTotal(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

const numbersArray = [10, 20, 30, 40];
console.log(calculateTotal(numbersArray));

// Task 4
function logDetails(value: any): void {
  console.log(`Value: ${value}, Type of value: ${typeof value}`);
}

logDetails("Hello, TypeScript!");
logDetails(42);
logDetails(true);

// Task 5

function safelyParseJson(jsonString: string): unknown {
  try {
    const result: unknown = JSON.parse(jsonString);
    if (typeof result === "object" && result !== null) {
      return result; // Type is verified as an object (non-null)
    }
  } catch (error) {
    console.error("Failed to parse JSON:", error);
  }
  return null; // Return null if parsing fails or type is incorrect
}

// Example usage:
const correctJson = '{"name":"John", "age":30}';
console.log(safelyParseJson(correctJson)); // Output: { name: 'John', age: 30 }

const incorrectJson = "this is not a json";
console.log(safelyParseJson(incorrectJson)); // Output: null

// Task 6
enum VehicleType {
  Car = "Car",
  Truck = "Truck",
  Motorcycle = "Motorcycle",
}

function getVehicleType(vehicle: VehicleType): string {
  return `The vehicle type is: ${vehicle}.`;
}

// Example usage:
console.log(getVehicleType(VehicleType.Car)); // Output: "The vehicle type is: Car."
console.log(getVehicleType(VehicleType.Motorcycle)); // Output: "The vehicle type is: Motorcycle."

//Task 7

function formatInput(input: string | number): string {
  if (typeof input === "number") {
    return input.toFixed(2); // Formats the number to two decimal places
  } else {
    return input.toUpperCase(); // Converts the string to uppercase
  }
}

// Example usage:
console.log(formatInput("hello")); // Output: "HELLO"
console.log(formatInput(123.456)); // Output: "123.46"

//Task 8

function configureServer(
  environment: "development" | "staging" | "production"
): void {
  console.log(`Configuring server for the ${environment} environment.`);
}

// Example usage:
configureServer("production"); // Output: "Configuring server for the production environment."

//Task 9

function getUserId(username: string): number {
  // Dummy implementation: return the length of the username as the ID
  return username.length;
}

// Example usage:
console.log(getUserId("alice")); // Output: 5

//Task 10
function logMessage(message: string): void {
  console.log(message);
}

// Example usage:
logMessage("Hello, TypeScript!"); // Output: "Hello, TypeScript!"

//Task 11
function errorHandler(message: string): never {
  throw new Error(message);
}

// Example usage:
errorHandler("Critical error occurred!"); // Throws an Error with the provided message

//Task 12
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string; // Optional property
}

function displayProduct(product: Product): void {
  console.log(`Product ID: ${product.id}`);
  console.log(`Name: ${product.name}`);
  console.log(`Price: $${product.price.toFixed(2)}`);
  if (product.description) {
    console.log(`Description: ${product.description}`);
  } else {
    console.log("No description available.");
  }
}

// Example usage:
const apple = { id: 1, name: "Apple", price: 0.75 };
displayProduct(apple);

//Task 13
interface Calculator {
  add(x: number, y: number): number;
}

class SimpleCalculator implements Calculator {
  add(x: number, y: number): number {
    return x + y;
  }
}

// Example usage:
const myCalculator = new SimpleCalculator();
console.log(myCalculator.add(5, 3)); // Output: 8
