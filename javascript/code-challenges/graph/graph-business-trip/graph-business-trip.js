'use strict'

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

module.exports = businessTrip;
