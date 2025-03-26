export interface TextBox {
  render(): void;
}

export class AndroidTextBox implements TextBox {
  render(): void {
    console.log("Renderizando uma caixa de texto estilo Android");
  }
}

export class iOSTextBox implements TextBox {
  render(): void {
    console.log("Renderizando uma caixa de texto estilo iOS");
  }
}
