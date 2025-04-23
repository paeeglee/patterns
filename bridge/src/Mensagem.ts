import { CanalEnvio } from "./CanalEnvio";

export abstract class Mensagem {
  protected assunto: string = "";
  protected mensagem: string = "";
  protected canal: CanalEnvio;

  constructor(canal: CanalEnvio) {
    this.canal = canal;
  }

  setAssunto(assunto: string): void {
    this.assunto = assunto;
  }

  setMensagem(msg: string): void {
    this.mensagem = msg;
  }

  abstract enviar(): void;
}
