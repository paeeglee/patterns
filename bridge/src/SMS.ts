import { CanalEnvio } from "./CanalEnvio";

export class SMS implements CanalEnvio {
    enviarMensagem(assunto: string, msg: string): void {
        console.log("=== Mensagem enviada por SMS ===");
        console.log(`ASSUNTO: ${assunto}`);
        console.log(`MENSAGEM: ${msg}`);
        console.log("");
    }
}