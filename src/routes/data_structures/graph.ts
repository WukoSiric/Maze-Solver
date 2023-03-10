export {}
class Node {
    public next: Node | null = null;
    public data: boolean = false;  
    public weight: Number = 0; 
    constructor(data: boolean) {
        this.data = data; 
    } 
}

class Graph {
    private edges: Array<Node> = [];
    public degree: Array<Number> = [];
    public n_vertices: Number = 0; 
    public directed: boolean; 

    constructor(directed: boolean) {
        this.directed = directed; 
    }
}

function init_graph(directed: boolean): Graph {
    let graph = new Graph(directed); 
    return graph; 
}

function read_graph(graph: Graph, directed: boolean): void {
    
}