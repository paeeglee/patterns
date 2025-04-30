import { Arquivo } from "./Arquivo";
import { GerenciadorArquivo } from "./GerenciadorArquivo";
import { Mp3 } from "./Mp3";
import { Pasta } from "./Pasta";

const raiz = new Pasta("Raiz", "/");
const pasta1 = new Pasta("Pasta 1", "pasta1/");
const pasta2 = new Pasta("Pasta 2", "pasta2/");
const pasta2_1 = new Pasta("Pasta 2.1", "pasta2_1/");
const pasta3 = new Pasta("Pasta 3", "pasta3");

raiz.adicionar(pasta1);
raiz.adicionar(pasta2);
raiz.adicionar(pasta3);
pasta2.adicionar(pasta2_1);

const arquivo1 = new Arquivo("Arquivo 1", "arquivo1/");
const arquivo2 = new Arquivo("Arquivo 2", "arquivo2/");
const arquivo3 = new Arquivo("Arquivo 3", "arquivo3/");
const arquivo4 = new Arquivo("Arquivo 4", "arquivo4/");
const arquivo5 = new Arquivo("Arquivo 5", "arquivo5/");
const arquivo6 = new Arquivo("Arquivo 6", "arquivo6/");
const mp3 = new Mp3("MP3", "a.mp3");

pasta1.adicionar(arquivo1);
pasta1.adicionar(arquivo2);
pasta2.adicionar(arquivo3);
pasta2.adicionar(arquivo4);
pasta2_1.adicionar(arquivo5);
pasta2_1.adicionar(mp3);
pasta3.adicionar(arquivo6);

const gerenciador = new GerenciadorArquivo(raiz);
gerenciador.exibir();
