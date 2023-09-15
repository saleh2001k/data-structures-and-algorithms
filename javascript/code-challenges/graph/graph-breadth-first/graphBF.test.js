const Graph = require('./graphBF');
const Vertex = require('../Vertex');


describe('Graph', () => {
    let graph;

    beforeEach(() => {
        graph = new Graph();
        const vertexA = new Vertex('A');
        const vertexB = new Vertex('B');
        const vertexC = new Vertex('C');
        const vertexD = new Vertex('D');
        const vertexE = new Vertex('E');

        graph.addVertex(vertexA);
        graph.addVertex(vertexB);
        graph.addVertex(vertexC);
        graph.addVertex(vertexD);
        graph.addVertex(vertexE);

        graph.addEdge(vertexA, vertexB);
        graph.addEdge(vertexA, vertexC);
        graph.addEdge(vertexB, vertexD);
        graph.addEdge(vertexC, vertexE);
    });

    it('should perform breadth-first traversal correctly', () => {
        const startNode = graph.getVertices()[0];
        const result = graph.breadthFirst(startNode);

        const resultValues = result.map(vertex => vertex.value);
        const expectedOrder = ['A', 'B', 'C', 'D', 'E'];
        expect(resultValues).toEqual(expectedOrder);
    });
    it('should throw an error for a non-existent start node', () => {
        const nonExistentNode = new Vertex('F');
        expect(() => {
            graph.breadthFirst(nonExistentNode);
        }).toThrowError('Start node does not exist in the graph.');
    });
});
