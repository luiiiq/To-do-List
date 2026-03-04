import ScrollSuave from "./modules/scroll-suave.js";
import HrefMarcador from "./modules/href-marcador.js";
import CriarDepoimentos from "./modules/depoimentos.js";
import Config from "./modules/config.js";
import Modal from "./modules/modal.js";
import FormTarefas from "./modules/tarefas-form.js";
import Carrossel from "./modules/carrossel.js";
import MenuHamburguer from "./modules/menu-hamburguer.js";
import Temas from "./modules/temas.js";
import CriarTarefas from "./modules/criar-tarefas.js";
import CriarCategoria from "./modules/criar-categoria.js";
import ResumoTarefasPerfil from "./modules/perfil-resumo.js";
import DataTarefa from "./modules/data.js";

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

const temasPreferencia = new Temas('[data-tema="button"]');
temasPreferencia.init();

const criarElementoTarefa = new CriarTarefas(".tarefa-flex");
criarElementoTarefa.init();

const criarElementoCategoria = new CriarCategoria(".categoria-resumo", ".categoria-container",".js-accordion");
criarElementoCategoria.init();

const itensTarefasResumo = new ResumoTarefasPerfil('.perfil','[data-perfil="concluida"] h2', '[data-perfil="progresso"] h2', '[data-perfil="pendente"] h2');
itensTarefasResumo.init();

const data = new DataTarefa('.tarefa-container');
data.init();
