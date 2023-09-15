'use strict';

const Edge = require('../Edge');
const Vertex = require('../Vertex');

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }

    addEdge(start, end, weight) {
        if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
            throw new Error('Both start and end vertices must exist in the graph.');
        }

        const startVertexEdges = this.adjacencyList.get(start);
        const edge = new Edge(end, weight);
        startVertexEdges.push(edge);
    }

    getVertices() {
        return Array.from(this.adjacencyList.keys());
    }

    getNeighbors(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            return [];
        }

        const vertexEdges = this.adjacencyList.get(vertex);
        return vertexEdges.map((edge) => ({
            vertex: edge.vertex,
            weight: edge.weight,
        }));
    }

    size() {
        return this.adjacencyList.size;
    }

    breadthFirst(startNode) {
        if (!this.adjacencyList.has(startNode)) {
          throw new Error('Start node does not exist in the graph.');
        }
      
        const visited = new Set();
        const result = [];
        const queue = [];
      
        queue.push(startNode);
        visited.add(startNode);
      
        while (queue.length > 0) {
          const currentVertex = queue.shift();
          result.push(currentVertex);
      
          const neighbors = this.getNeighbors(currentVertex);
          for (let i = 0; i < neighbors.length; i++) {
            const neighbor = neighbors[i];
            if (!visited.has(neighbor.vertex)) {
              visited.add(neighbor.vertex);
              queue.push(neighbor.vertex);
            }
          }
        }
      
        return result;
      }      

}

module.exports = Graph;