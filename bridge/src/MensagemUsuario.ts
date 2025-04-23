import { Mensagem } from "./Mensagem";

export class MensagemUsuario extends Mensagem {
  enviar(): void {
    console.log("Mensagem enviada pelo USUARIO");
    this.canal.enviarMensagem(this.assunto, this.mensagem);
  }
}