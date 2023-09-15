# Graph Breadth-First 

This challenge focuses on implementing the breadth-first traversal algorithm for a graph data structure. The goal is to visit all nodes in the graph in the order they were visited, starting from a specified node.

## Challenge Description

In this challenge, you are provided with a `Graph` class that allows you to create a graph, add vertices and edges, and perform various operations on the graph. The main task is to implement the `breadthFirst` method within the `Graph` class, which performs a breadth-first traversal starting from a specified node and returns the nodes in the order they were visited.

## Approach

The breadth-first traversal is an algorithm for visiting all the nodes in a graph level by level. It uses a queue to keep track of the nodes to be visited. Here's a high-level approach to implement the `breadthFirst` method:

1. Initialize an empty queue, a `visited` set, and a `result` array.
2. Enqueue the start node into the queue and mark it as visited by adding it to the `visited` set.
3. While the queue is not empty:
   - Dequeue a node from the queue and add it to the `result` array.
   - Get the neighbors of the current node.
   - For each neighbor that is not in the `visited` set, enqueue it into the queue and mark it as visited.
4. Continue this process until the queue is empty.

The `result` array will contain the nodes visited in the order they were encountered during the breadth-first traversal.

## Efficiency

The time complexity of the breadth-first traversal algorithm is O(V + E), where V is the number of vertices (nodes) and E is the number of edges in the graph. This is because, in the worst case, we visit every vertex and edge in the graph once.

The space complexity is O(V), where V is the number of vertices. This is because we use additional data structures (queues and sets) to keep track of the visited nodes.

## Solution

```javascript

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


```
