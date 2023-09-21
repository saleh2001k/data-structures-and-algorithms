class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    depthFirst(startNode) {
        const visited = {};
        const result = [];

        const dfs = (node) => {
            if (!node) return;
            visited[node] = true;
            result.push(node);

            this.adjacencyList[node].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    dfs(neighbor);
                }
            });
        };

        dfs(startNode);
        return result;
    }
}

module.exports = Graph;

