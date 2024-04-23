// Code your solution here
// Function to find matching drivers by name
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
  }
  
  // Function to find drivers whose names begin with the provided letters
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
  }
  
  // Function to find drivers whose name matches the provided string
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }
  
  // Sample data for testing
  const drivers = [
    { name: "John", hometown: "New York" },
    { name: "Jane", hometown: "Los Angeles" },
    { name: "Bob", hometown: "Chicago" }
  ];
  
  // Test cases
  console.log(findMatching(["john", "Jane", "Bob"], "jane")); // Output: ["Jane"]
  console.log(fuzzyMatch(["John", "Jane", "Bob"], "j")); // Output: ["John", "Jane"]
  console.log(matchName(drivers, "John")); // Output: [{ name: "John", hometown: "New York" }]
  