import { Component } from "./Component";

export class GerenciadorArquivo {
    private raiz: Component;

    constructor(r: Component) {
        this.raiz = r;
    }

    exibir() {
        this.raiz.exibir();
    }
}