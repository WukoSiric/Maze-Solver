export class Stack<T> implements IStack<T> {
    private storage: T[] = []; 
    constructor (private capacity: number = Infinity) {} 

    push(item: T): void {
        if (this.size() === this.capacity) {
            throw Error("Stack has reached max capacity");
        }
        this.storage[this.storage.length] = item; 
    }

    pop(): T | undefined { 
        return this.storage.pop(); 
    }

    peek(): T | undefined {
        return this.storage[this.size() - 1]; 
    }

    is_empty() {
        let size: number = this.size(); 
        if (size > 0) {
            return false; 
        }
        return true; 
    }

    size(): number { 
        return this.storage.length; 
    }
}