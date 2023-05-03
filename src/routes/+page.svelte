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

</script>

<h1>Welcome to my Maze Solver! </h1>
<button on:click={test_stack}> Test the stack type! </button>