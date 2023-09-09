'use strict';

const Edge = require('./Edge');
const Vertex = require('./Vertex');

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
}

module.exports = Graph;