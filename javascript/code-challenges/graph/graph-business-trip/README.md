# Business Trip Problem

## Problem Description

You are given a graph representing direct flight connections between cities. Each edge of the graph has a weight, which represents the cost of the flight between two cities. You are also given an array of city names representing a trip itinerary. The task is to determine whether the trip is possible with direct flights and calculate the total cost of the trip if it's possible.

Write a function `businessTrip(graph, cityNames)` that takes a graph and an array of city names and returns the cost of the trip (if it's possible to make the trip with direct flights) or `null` (if not).

## Algorithm

The algorithm checks whether the trip is possible with direct flights and calculates the total cost by iterating through the array of city names. Here's a step-by-step description of the algorithm:

1. Initialize a variable `totalCost` to 0 to keep track of the total cost of the trip.

2. Iterate through the array of city names from the first city to the second-to-last city (since we need to check for direct flights to the next city).

3. For each pair of consecutive cities (currentCity and nextCity), use a helper function `getDirectFlight(graph, currentCity, nextCity)` to find the cost of a direct flight between them.

4. If a direct flight is found (i.e., `getDirectFlight` returns a non-null value), add the cost of the flight to `totalCost`.

5. If no direct flight is found, return `null` immediately, indicating that the trip is not possible with direct flights.

6. After iterating through all city pairs, return the `totalCost` if the trip is possible with direct flights.

## Approach

The approach involves using a graph data structure to represent the cities and direct flight connections. We also use a helper function `getDirectFlight` to find the cost of direct flights between two cities. The main function `businessTrip` iterates through the city names, checks for direct flights, and calculates the total cost.

## Efficiency

The time complexity of this algorithm depends on the number of cities in the trip itinerary, denoted as `N`. For each city pair, we perform a lookup in the graph, which takes O(1) time on average. Therefore, the overall time complexity is O(N), making this algorithm efficient for moderate-sized trip itineraries.

The space complexity is O(1) because the algorithm uses a constant amount of additional memory regardless of the input size.


## Solution 

```javascript
function businessTrip(graph, cityNames) {
    let totalCost = 0;

    for (let i = 0; i < cityNames.length - 1; i++) {
        const currentCity = cityNames[i];
        const nextCity = cityNames[i + 1];

        const directFlight = getDirectFlight(graph, currentCity, nextCity);

        if (directFlight === null) {
            return null;
        }

        totalCost += directFlight;
    }

    return totalCost;
}

// helper function

function getDirectFlight(graph, fromCity, toCity) {
    const neighbors = graph.getNeighbors(fromCity);

    for (const neighbor of neighbors) {
        if (neighbor.vertex === toCity) {
            return neighbor.weight;
        }
    }

    return null; 
}


```