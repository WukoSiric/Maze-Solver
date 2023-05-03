export default class Stack<Type> {
    private items: Array<Type> = []; 
    private count: number = 0; 

    public push(item: Type): void {
        this.count = this.items.push(item);
        return;
    }

    public pop(): Type | undefined {
        return this.items.pop();
    }

    public peek(item: Type) {
        return this.items[this.items.length - 1];
    }

    public isEmpty(): boolean { 
        return this.items.length === 0;
    }

    public size(): number {
        return this.count;
    }
}