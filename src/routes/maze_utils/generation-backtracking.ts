import type { Stack } from "../data_structures/IStack";
enum Directions {
    UP,
    DOWN,
    LEFT,
    RIGHT
}

export function start_maze(start_position: [number, number]) {
    
}
export function generate_maze(maze: boolean[][], current_position: [number, number], previously_visited: Stack<[number, number]>): boolean[][] | null {
    // If no other possible directions, return and pop position off the stack

    // Get current position off the current stack

    // Get possible paths 

    // Choose random path

    return null; 
}

function return_paths(): Directions[] {
    let possible_paths: Directions[] = []; 
    return possible_paths; 
}