import { Component } from "./Component";

export class Mp3 extends Component {
    exibir(space?: string): void {
        console.log(`${space} Exibindo arquivo mp3`);
    }
}