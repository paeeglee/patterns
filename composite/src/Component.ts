export abstract class Component {
    protected nome: string;
    protected caminho: string;

    constructor(n: string, c: string) {
        this.nome = n;
        this.caminho = c;
    }

    getNome(): string {
        return this.nome;
    }

    getCaminho(): string {
        return this.caminho;
    }

    exibir(space: string = ""): void {
        throw new Error("Esse componente não suporter está ação.");
    }

    adicionar(c: Component): void {
        throw new Error("Esse componente não suporter está ação.");
    }

    remover(c: Component): void {
        throw new Error("Esse componente não suporter está ação.");
    }

    recuperarFilho(i: number): void {
        throw new Error("Esse componente não suporter está ação.");
    }
}
