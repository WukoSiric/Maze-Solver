<script lang="ts">
    import Stack from './data_structures/stack';

    function test_stack() {
        let temp_stack = new Stack<[number, number]>();
        temp_stack.push([1, 2]);
        temp_stack.push([3, 4]);
        temp_stack.push([5, 6]);
        console.log(temp_stack.pop());
        console.log(temp_stack.pop());
        console.log(temp_stack.pop());
        console.log(temp_stack.pop());
        return;
    }

    function create_maze(grid: Array<[number, number]>, current_size: number, connections: Stack<[number, number]>) {

    }

    function check_adjacent(grid: Array<[number, number]>, position: [number, number]): Array<[number, number]> {
        let adjacent_cords = new Array<[number, number]>(); 


        return adjacent_cords; 
    } 

</script>

<h1>Welcome to my Maze Solver! </h1>
<button on:click={test_stack}> Test the stack type! </button>