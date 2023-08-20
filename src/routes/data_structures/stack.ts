interface IStack<T> {
    push(item: T): void; 
    pop(): T | undefined; 
    peek(): T | undefined;
    is_empty(): boolean; 
    size(): number;  
}