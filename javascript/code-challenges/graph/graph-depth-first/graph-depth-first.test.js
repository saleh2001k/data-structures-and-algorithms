const Graph = require('./graph-depth-first'); 

describe('Graph', () => {
    it('should perform depth-first traversal on a simple graph', () => {
        const graph = new Graph();
        graph.adjacencyList = {
            A: ['B', 'C'],
            B: ['A', 'D', 'E'],
            C: ['A', 'F'],
            D: ['B'],
            E: ['B', 'F'],
            F: ['C', 'E'],
        };
        const result = graph.depthFirst('A');
        expect(result).toEqual(['A', 'B', 'D', 'E', 'F', 'C']);
    });

});
