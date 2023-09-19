const businessTrip = require('./graph-business-trip');
const Graph = require('../Graph');
const Vertex = require('../Vertex');


const graph = new Graph();
const metroville = new Vertex('Metroville');
const pandora = new Vertex('Pandora');
const arendelle = new Vertex('Arendelle');
const newMonstropolis = new Vertex('New Monstropolis');
const naboo = new Vertex('Naboo');
graph.addVertex(metroville);
graph.addVertex(pandora);
graph.addVertex(arendelle);
graph.addVertex(newMonstropolis);
graph.addVertex(naboo);
graph.addEdge(metroville, pandora, 82);
graph.addEdge(arendelle, newMonstropolis, 42);
graph.addEdge(newMonstropolis, naboo, 73);

describe('businessTrip function', () => {
    it('should return null if the trip is not possible with direct flights', () => {
        const trip3 = ['Naboo', 'Pandora'];
        const trip4 = ['Narnia', 'Arendelle', 'Naboo'];

        expect(businessTrip(graph, trip3)).toBeNull();
        expect(businessTrip(graph, trip4)).toBeNull();
    });

});
