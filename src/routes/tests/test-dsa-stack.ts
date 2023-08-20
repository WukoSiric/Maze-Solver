import { Stack } from '../data_structures/IStack';
let stack: Stack<number> = new Stack<number>();

// push() - Test 1
stack.push(1);
if (stack.size() === 1) {
    console.log("push() test 1 passed");
} else {
    console.error("push() test 1 failed");
}

// push() - Test 2
stack.push(2);
if (stack.size() === 2) {
    console.log("push() test 2 passed");
} else {
    console.error("push() test 2 failed");
}

// push() - Test 3
stack.push(3);
if (stack.size() === 3) {
    console.log("push() test 3 passed");
} else {
    console.error("push() test 3 failed");
}

// push() - Test 4
stack.push(4);
if (stack.size() === 4) {
    console.log("push() test 4 passed");
} else {
    console.error("push() test 4 failed");
}

// push() - Test 5
stack.push(5);
if (stack.size() === 5) {
    console.log("push() test 5 passed");
} else {
    console.error("push() test 5 failed");
}

// pop()
stack.pop();
if (stack.size() === 4) {
    console.log("pop() test passed");
} else {
    console.error("pop() test failed");
}

// peek()
if (stack.peek() === 4) {
    console.log("peek() test passed");
} else {
    console.error("peek() test failed");
}

// is_empty()
if (!stack.is_empty()) {
    console.log("is_empty() test passed");
} else {
    console.error("is_empty() test failed");
}

stack.pop();
stack.pop();
stack.pop();
stack.pop();
if (stack.is_empty()) {
    console.log("is_empty() test passed");
} else {
    console.error("is_empty() test failed");
}

// size()
stack.push(6);
stack.push(7);
stack.push(8);
stack.push(9);
if (stack.size() === 4) {
    console.log("size() test passed");
} else {
    console.error("size() test failed");
}

stack.pop();
if (stack.size() === 3) {
    console.log("size() test passed");
} else {
    console.error("size() test failed");
}
