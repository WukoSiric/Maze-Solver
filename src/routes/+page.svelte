<script lang="ts">
    import type Stack from './data_structures/stack';
    
    // Creating maze via Recursive Backtrackign Algorithm
    function create_maze(grid_size: number, path: Stack<[number, number]>, visited: Set<[number, number]>): Set<[number, number]> {
        let graph = new Set<[number, number]>()
        
        // If the visited set contains half the dimension size of the array, return
        if (visited.size === grid_size) {
            return new Set<[number,number]>();
        }
        
        // Get the current position from top of the stack
        let current_position = path.pop();
        
        // Find the available neighbors
        let neighbors = new Set<[number, number]>(); 
        
        // Check neighbor to the left
        if (current_position![0] > 0) {
            neighbors.add([current_position![0] -1, current_position![1]]);
        }
        // Check neighbor to the right
        if (current_position![0] < grid_size - 1) {
            neighbors.add([current_position![0] + 1, current_position![1]]);
        }
        // Check neighbor above
        if (current_position![1] > 0) {
            neighbors.add([current_position![0], current_position![1] - 1]);
        }
        // Check neighbor below
        if (current_position![1] < grid_size - 1) {
            neighbors.add([current_position![0], current_position![1] + 1]);
        }
        
        // Finding unexplored neighbors
        let unexplored_neighbors = new Array<[number, number]>();
        for (let neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                unexplored_neighbors.push(neighbor);
            }
        }
        
        // Return if no unexplored neighbors
        if (unexplored_neighbors.length === 0) {
            return graph;
        }
        
        // Choosing random explored neighbor 
        let random_neighbor = unexplored_neighbors[Math.floor(Math.random() * unexplored_neighbors.length)]; 
        
        // Adding to path
        path.push(random_neighbor); 
        
        // Adding it to visited
        visited.add(random_neighbor); 
        
        // Recursive call
        let subgraph = create_maze(grid_size, path, visited); 
        
        // Add subgraph edges to graph 
        subgraph.forEach(edge => graph.add(edge)); 
        
        return graph;
    }
</script>

<h1> Welcome to my maze generator! </h1>