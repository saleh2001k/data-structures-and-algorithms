# Depth-First Traversal of a Graph

This repository contains a JavaScript implementation of depth-first traversal for a graph data structure. Depth-first traversal is a fundamental graph traversal algorithm used to explore all the nodes in a graph by visiting as far as possible along each branch before backtracking.

## Algorithm

The depth-first traversal algorithm is implemented using a recursive approach. Here's a high-level overview of the algorithm:

1. Initialize an empty `visited` object to keep track of visited nodes and an empty `result` array to store the traversal order.

2. Start from a given `startNode` in the graph.

3. Define a recursive function, `dfs(node)`, to perform the traversal:

   - Mark the current `node` as visited by setting `visited[node]` to `true`.
   - Push the current `node` to the `result` array.
   - For each unvisited neighbor of the current `node`, recursively call `dfs(neighbor)`.

4. Call `dfs(startNode)` to start the traversal from the specified starting node.

5. Return the `result` array containing the nodes in the order they were visited.

## Approach

The depth-first traversal is implemented using a depth-first search (DFS) approach, which explores as deeply as possible along each branch before backtracking. It uses recursion to traverse the graph.

## Efficiency

The efficiency of the depth-first traversal algorithm can be analyzed as follows:

- Time Complexity: O(V + E)

  - V is the number of vertices (nodes) in the graph.
  - E is the number of edges in the graph.
  - In the worst case, the algorithm may visit all vertices and edges once.

- Space Complexity: O(V)
  - The space complexity is determined by the `visited` object and the `result` array.
  - In the worst case, all vertices may be marked as visited and stored in the `result` array.

## Soulution

```javascript

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





```
