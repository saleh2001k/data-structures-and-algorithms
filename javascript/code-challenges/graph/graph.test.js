const Graph = require('./Graph');
const Vertex = require('./Vertex');

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  it('should add a vertex to the graph', () => {
    const vertex = new Vertex(1);
    graph.addVertex(vertex);
    expect(graph.getVertices()).toContain(vertex);
  });

  it('should add an edge between vertices', () => {
    const vertex1 = new Vertex(1);
    const vertex2 = new Vertex(2);
    graph.addVertex(vertex1);
    graph.addVertex(vertex2);
    graph.addEdge(vertex1, vertex2, 3);
    const neighbors = graph.getNeighbors(vertex1);
    expect(neighbors).toContainEqual({ vertex: vertex2, weight: 3 });
  });

  it('should return all vertices in the graph', () => {
    const vertex1 = new Vertex(1);
    const vertex2 = new Vertex(2);
    graph.addVertex(vertex1);
    graph.addVertex(vertex2);
    const vertices = graph.getVertices();
    expect(vertices).toHaveLength(2);
    expect(vertices).toContain(vertex1);
    expect(vertices).toContain(vertex2);
  });

  it('should return neighbors with weights', () => {
    const vertex1 = new Vertex(1);
    const vertex2 = new Vertex(2);
    graph.addVertex(vertex1);
    graph.addVertex(vertex2);
    graph.addEdge(vertex1, vertex2, 3);
    const neighbors = graph.getNeighbors(vertex1);
    expect(neighbors).toContainEqual({ vertex: vertex2, weight: 3 });
  });

  it('should return the size of the graph', () => {
    const vertex1 = new Vertex(1);
    const vertex2 = new Vertex(2);
    graph.addVertex(vertex1);
    graph.addVertex(vertex2);
    expect(graph.size()).toBe(2);
  });
});
