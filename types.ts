// Define a new type alias 'Point' to represent a 2D point with x and y coordinates
type Point = {
  x: number; // The x-coordinate of the point
  y: number; // The y-coordinate of the point
};

// Use the new type 'Point' to declare a variable 'point'
let point: Point = {
  x: 10, // Assign a value to the x-coordinate
  y: 20, // Assign a value to the y-coordinate
};

// Log the 'point' object to the console
console.log(point); // Output: { x: 10, y: 20 }

// Define another type alias 'Pin' to represent a geographical location with latitude and longitude
type Pin = {
  latitude: number;  // The latitude of the location
  longitude: number; // The longitude of the location
};

// Use the 'Pin' type to declare a variable 'pin1'
let pin1: Pin = {
  latitude: 10.09871,  // Assign a value to the latitude
  longitude: 20.66554, // Assign a value to the longitude
};