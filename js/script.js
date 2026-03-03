import hrefMarcador from "./modules/href-marcador.js";
import criarDepoimentos from "./modules/depoimentos.js";
import config from "./modules/config.js";
import modal from "./modules/modal.js";
import formTarefas from "./modules/tarefas-form.js";
import scrollSuave from "./modules/scroll-suave.js";
import carrossel from "./modules/carrossel.js";
import menuHamburguer from "./modules/menu-hamburguer.js";
import temas from "./modules/temas.js";
import criarTarefas from "./modules/criar-tarefas.js";
import criarCategoria from "./modules/criar-categoria.js";
import resumoTarefasPerfil from "./modules/perfil-resumo.js";
import dataTarefa from "./modules/data.js";

hrefMarcador(".menu nav a", '[data-menu="icones"] a');
criarDepoimentos(".lista-depoimentos");
config(".tema div");
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
scrollSuave('[data-scrol="suave"]');
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
