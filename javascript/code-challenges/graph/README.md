# Graph Implementation in JavaScript

This is a simple implementation of a graph data structure in JavaScript using an adjacency list representation. The graph includes methods to add vertices, add edges, retrieve vertices, retrieve neighbors with weights, and return the size of the graph.

## Approach

The graph is implemented using an adjacency list, which is a collection of lists or arrays to represent vertices and their connections. Here's an overview of the key methods:

- `addVertex(vertex)`: Adds a vertex to the graph by creating an entry in the adjacency list with an empty array to store its edges.
- `addEdge(start, end, weight)`: Adds an edge between two vertices by finding the start vertex in the adjacency list and adding an edge object to its array of edges. The `weight` parameter is optional and allows you to assign a weight to the edge.

- `getVertices()`: Returns an array of all vertices in the graph by iterating through the keys of the adjacency list.

- `getNeighbors(vertex)`: Returns an array of neighbors of a given vertex along with their weights. It finds the vertex in the adjacency list and retrieves the edges associated with it.

- `size()`: Returns the number of vertices in the graph by calculating the size of the adjacency list.

## Efficiency

The efficiency of this graph implementation depends on the chosen data structure:

- **Space Complexity**: The space complexity of this implementation is O(V + E), where V is the number of vertices, and E is the number of edges. This is because the adjacency list stores each vertex and its associated edges.

- **Add Vertex (addVertex)**: Adding a vertex is an O(1) operation since it involves adding an entry to the adjacency list.

- **Add Edge (addEdge)**: Adding an edge is also an O(1) operation in most cases. It involves finding the start vertex in the adjacency list and adding an edge to its array. However, if you need to search for the start vertex, it may become O(V), where V is the number of vertices.

- **Get Vertices (getVertices)**: Retrieving all vertices is an O(V) operation, as it requires iterating through the keys of the adjacency list.

- **Get Neighbors (getNeighbors)**: Retrieving neighbors of a vertex is an O(E) operation, where E is the number of edges connected to the given vertex. In the worst case, when the graph is dense, this can be O(V), where V is the number of vertices.

- **Size (size)**: Calculating the size of the graph is an O(1) operation since it directly returns the number of entries in the adjacency list.

## Solution :

```javascript
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  addEdge(start, end, weight) {
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      throw new Error("Both start and end vertices must exist in the graph.");
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
```
