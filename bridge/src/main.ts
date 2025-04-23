import { CanalEnvio } from "./CanalEnvio";
import { Email } from "./Email";
import { Mensagem } from "./Mensagem";
import { MensagemAdmin } from "./MensagemAdmin";
import { MensagemUsuario } from "./MensagemUsuario";
import { SMS } from "./SMS";

let canal: CanalEnvio = new Email();
let mensagem: Mensagem = new MensagemAdmin(canal);
mensagem.setAssunto("Primeira mensagem");
mensagem.setMensagem("Hello Admin!");
mensagem.enviar();

mensagem = new MensagemUsuario(canal);
mensagem.setAssunto("Segunda mensagem");
mensagem.setMensagem("Hello Admin!");
mensagem.enviar();

canal = new SMS();
mensagem = new MensagemAdmin(canal);
mensagem.setAssunto("Primeira mensagem");
mensagem.setMensagem("Hello Admin!");
mensagem.enviar();

mensagem = new MensagemUsuario(canal);
mensagem.setAssunto("Segunda mensagem");
mensagem.setMensagem("Hello Admin!");
mensagem.enviar();
