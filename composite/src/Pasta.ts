import { Component } from "./Component";

export class Pasta extends Component {
    protected componentes: Component[];

    constructor(name: string, caminho: string) {
        super(name, caminho);
        this.componentes = [];
    }

    public adicionar(componente: Component) {
        this.componentes.push(componente);
    }

    public remover(componente: Component) {
        this.componentes = this.componentes.filter(c => c !== componente);
    }

    public recuperarFilhos(i: number) {
        return this.componentes[i];
    }

    public exibir(spacer: string = ""): void {
        console.log(`${spacer}${this.nome} - [${this.caminho}]`);

        this.componentes.forEach(componente => {
            componente.exibir(spacer + "  ");
        });
    }
}