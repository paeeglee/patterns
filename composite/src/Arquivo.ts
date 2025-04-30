import { Component } from "./Component";

export class Arquivo extends Component {
    public exibir(spacer: string = ""): void {
        console.log(`${spacer}${this.nome} - [${this.caminho}]`);
    }
}   