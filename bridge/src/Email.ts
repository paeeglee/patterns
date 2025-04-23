import { CanalEnvio } from "./CanalEnvio";

export class Email implements CanalEnvio {
    enviarMensagem(assunto: string, msg: string): void {
        console.log("=== Mensagem enviada por E-MAIL ===");
        console.log(`ASSUNTO: ${assunto}`);
        console.log(`MENSAGEM: ${msg}`);
        console.log("");
    }
}