import ScrollSuave from "./modules/scroll-suave.js";
import HrefMarcador from "./modules/href-marcador.js";
import CriarDepoimentos from "./modules/depoimentos.js";
import Config from "./modules/config.js";
import modal from "./modules/modal.js";
import formTarefas from "./modules/tarefas-form.js";
import carrossel from "./modules/carrossel.js";
import menuHamburguer from "./modules/menu-hamburguer.js";
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

modal(
  '[data-modal="ativar"]',
  ".modal",
  ".fechar",
  ".btns-form button:nth-of-type(2)",
  '[data-modal="container"]',
);
formTarefas(
  "#titulo",
  "#prazo",
  ".opcoes div",
  ".selecione",
  ".btns-form button:nth-of-type(1)",
  '[data-button="categoria"]',
);
carrossel(
  ".carrossel-wrapper",
  ".carrossel-track",
  ".prev",
  ".prox",
  ".enviar",
  ".botoes-controle button",
);
menuHamburguer('[data-menu="mobile"]', '[data-menu="lista"]');
temas('[data-tema="button"]');
criarTarefas();
criarCategoria();
resumoTarefasPerfil();
dataTarefa();
