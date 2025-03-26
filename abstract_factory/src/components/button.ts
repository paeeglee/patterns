export interface Button {
  render(): void;
}

export class AndroidButton implements Button {
  render(): void {
    console.log("Renderizando um botão estilo Android");
  }
}

export class iOSButton implements Button {
  render(): void {
    console.log("Renderizando um botão estilo iOS");
  }
}
