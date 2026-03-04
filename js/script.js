import ScrollSuave from "./modules/scroll-suave.js";
import HrefMarcador from "./modules/href-marcador.js";
import CriarDepoimentos from "./modules/depoimentos.js";
import Config from "./modules/config.js";
import Modal from "./modules/modal.js";
import FormTarefas from "./modules/tarefas-form.js";
import Carrossel from "./modules/carrossel.js";
import MenuHamburguer from "./modules/menu-hamburguer.js";
import temas from "./modules/temas.js";
import criarTarefas from "./modules/criar-tarefas.js";
import criarCategoria from "./modules/criar-categoria.js";
import resumoTarefasPerfil from "./modules/perfil-resumo.js";
import dataTarefa from "./modules/data.js";

const scrolSuave = new ScrollSuave('[data-scrol="suave"]');
scrolSuave.init();

const hrefMarcador = new HrefMarcador(".menu nav a", '[data-menu="icones"] a');
hrefMarcador.init();

const depoimentos = new CriarDepoimentos(".lista-depoimentos");
depoimentos.init();

const configPerfil = new Config('[data-tema="config"]');
configPerfil.init();

const modal = new Modal(
  '[data-modal="ativar"]',
  ".modal",
  ".fechar",
  ".btns-form button:nth-of-type(2)",
  '[data-modal="container"]',
);
modal.init();


const form = new FormTarefas({
  input: "#titulo",
  prazo: "#prazo",
  radios: ".opcoes div",
  opcoes: ".selecione",
  enviar: ".btns-form button:nth-of-type(1)",
  criarCategoria: '[data-button="categoria"]',
});
form.init();

const carrossel = new Carrossel(
  ".carrossel-wrapper",
  ".carrossel-track",
  ".prev",
  ".prox",
  ".enviar",
  ".botoes-controle button",
  ".carrossel"
);
carrossel.init();

const menuMobile = new MenuHamburguer('[data-menu="mobile"]', '[data-menu="lista"]', ["click", "touchstart"]);
menuMobile.init();

temas('[data-tema="button"]');
criarTarefas();
criarCategoria();
resumoTarefasPerfil();
dataTarefa();
