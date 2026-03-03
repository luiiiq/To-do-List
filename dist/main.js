/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/carrossel.js"
/*!*********************************!*\
  !*** ./js/modules/carrossel.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ carrossel)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n\nfunction carrossel(slideWrapper, slideLista, prev, prox, enviar, buttonLista) {\n  var wrapper = document.querySelector(slideWrapper);\n  var slideContainer = document.querySelector(slideLista);\n  var prevButton = document.querySelector(prev);\n  var proxButton = document.querySelector(prox);\n  var enviarButton = document.querySelector(enviar);\n  var controleButtons = document.querySelectorAll(buttonLista);\n  var distancia = {\n    posInicial: 0,\n    posFinal: 0,\n    movimento: 0\n  };\n  var slideArray;\n  var index;\n  var carrossel = document.querySelector(\".carrossel\");\n  if (wrapper && slideContainer && prevButton && proxButton && controleButtons.length) {\n    var moverSlide = function moverSlide(distX) {\n      var limiteEsquerdo = 0;\n      var limiteDireito = wrapper.offsetWidth - slideContainer.scrollWidth;\n      var distanciaLimitada = Math.max(limiteDireito, Math.min(limiteEsquerdo, distX));\n      distancia.posicaoMovida = distanciaLimitada;\n      slideContainer.style.transform = \"translate3d(\".concat(distanciaLimitada, \"px, 0, 0)\");\n    }; // ! Slide Config\n    var posicaoSlide = function posicaoSlide(slide) {\n      var margin = slideContainer.offsetWidth - slide.offsetWidth;\n      return -(slide.offsetLeft - margin);\n    };\n    var configSlide = function configSlide() {\n      slideArray = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(slideContainer.children).map(function (elemento) {\n        var posicao = posicaoSlide(elemento);\n        return {\n          posicao: posicao,\n          elemento: elemento\n        };\n      });\n    };\n    var slideNav = function slideNav(indexItem) {\n      var ultimoItem = slideArray.length - 1;\n      index = {\n        prev: indexItem - 1 < 0 ? undefined : indexItem - 1,\n        atual: indexItem,\n        prox: indexItem === ultimoItem ? undefined : indexItem + 1\n      };\n      if (dots.length) {\n        var _dots$index$atual;\n        if (index.atual === 3) {\n          var _enviarButton = document.querySelector(\".enviar\");\n          _enviarButton.style.display = \"block\";\n          proxButton.style.display = \"none\";\n        } else {\n          var _enviarButton2 = document.querySelector(\".enviar\");\n          _enviarButton2.style.display = \"none\";\n          proxButton.style.display = \"block\";\n        }\n        dots.forEach(function (dot) {\n          dot.classList.remove(\"item-atual\");\n        });\n        (_dots$index$atual = dots[index.atual]) === null || _dots$index$atual === void 0 || _dots$index$atual.classList.add(\"item-atual\");\n        var nomeInput = slideContainer.querySelector(\"#nome\");\n        if (nomeInput.value.trim() !== \"\") {\n          dots[0].classList.add(\"item-feito\");\n        } else {\n          dots[0].classList.remove(\"item-feito\");\n        }\n        var carrosselItems = document.querySelectorAll(\".carrossel-item\");\n        carrosselItems.forEach(function (elemento, index) {\n          var inputs = elemento.querySelectorAll(\"input\");\n          inputs.forEach(function (input) {\n            if (input.checked) {\n              dots[index].classList.add(\"item-feito\");\n            }\n          });\n        });\n      }\n    };\n    var mudarSlide = function mudarSlide(index) {\n      moverSlide(slideArray[index].posicao);\n      slideNav(index);\n      distancia.posFinal = slideArray[index].posicao;\n    };\n    var ativarPrev = function ativarPrev() {\n      if (index.prev !== undefined) {\n        mudarSlide(index.prev);\n      } else {\n        mudarSlide(0);\n      }\n    };\n    var ativarProx = function ativarProx() {\n      if (index.prox !== undefined) {\n        mudarSlide(index.prox);\n      } else {\n        mudarSlide(slideArray.length - 1);\n      }\n    };\n    var verificarValorInputs = function verificarValorInputs() {\n      valido.length = 0;\n      var inputs = slideContainer.querySelectorAll(\".opcoes-item input\");\n      var nomeInput = slideContainer.querySelector(\"#nome\");\n      inputs.forEach(function (input) {\n        if (input.checked) {\n          valido.push(input);\n        }\n      });\n      if (nomeInput.value.trim() !== \"\") {\n        valido.push(nomeInput.value.trim());\n      }\n    };\n    var validarEnviar = function validarEnviar() {\n      verificarValorInputs();\n      var pai = document.querySelector(\".carrossel\");\n      if (valido.length === 4) {\n        div.classList.remove(\"erro-slide\");\n        div.innerText = \"\";\n        localStorage.setItem(\"carrosselRespondido\", \"true\");\n        carrossel.remove();\n        window.location.href = \"./index.html\";\n      } else {\n        div.classList.add(\"erro-slide\");\n        div.innerText = \"Certifique-se de preencher todos os formulários!\";\n        pai.appendChild(div);\n      }\n    };\n    var transicao = function transicao(statusTransicao) {\n      slideContainer.style.transition = statusTransicao ? \"transform 0.3s\" : \"none\";\n    };\n    if (localStorage.getItem(\"carrosselRespondido\")) {\n      carrossel.remove();\n    }\n    configSlide();\n    var dots = document.querySelectorAll(\".dot\");\n    var div = document.createElement(\"div\");\n    var valido = [];\n    prevButton.addEventListener(\"click\", ativarPrev);\n    proxButton.addEventListener(\"click\", ativarProx);\n    enviarButton.addEventListener(\"click\", validarEnviar);\n    mudarSlide(0);\n    transicao(true);\n  }\n}\n\n//# sourceURL=webpack://to-do-list/./js/modules/carrossel.js?\n}");

/***/ },

/***/ "./js/modules/config.js"
/*!******************************!*\
  !*** ./js/modules/config.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ config)\n/* harmony export */ });\nfunction config(tema) {\n  var temaLista = document.querySelectorAll(tema);\n  var html = document.documentElement;\n  var modo = localStorage.getItem(\"tema\");\n  if (temaLista.length) {\n    var ativarTema = function ativarTema(event) {\n      if (event.currentTarget.innerText === \"Claro\") {\n        localStorage.setItem(\"tema\", \"claro\");\n        html.classList.remove(\"tema-escuro\");\n      } else {\n        localStorage.setItem(\"tema\", \"escuro\");\n        html.classList.add(\"tema-escuro\");\n      }\n      if (temaLista[0] !== event.currentTarget) {\n        temaLista[0].classList.remove(\"ativo\");\n        event.currentTarget.classList.toggle(\"ativo\");\n      } else {\n        temaLista[1].classList.remove(\"ativo\");\n        event.currentTarget.classList.toggle(\"ativo\");\n      }\n    };\n    if (modo === \"claro\") {\n      temaLista[0].classList.add(\"ativo\");\n      temaLista[1].classList.remove(\"ativo\");\n    } else {\n      temaLista[1].classList.add(\"ativo\");\n      temaLista[0].classList.remove(\"ativo\");\n    }\n    temaLista.forEach(function (tema) {\n      tema.addEventListener(\"click\", function (event) {\n        return ativarTema(event);\n      });\n    });\n  }\n}\n\n//# sourceURL=webpack://to-do-list/./js/modules/config.js?\n}");

/***/ },

/***/ "./js/modules/criar-categoria.js"
/*!***************************************!*\
  !*** ./js/modules/criar-categoria.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ criarCategoria)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n\nfunction criarCategoria() {\n  var categoriaGrid = document.querySelector(\".categoria-resumo\");\n  var accordionContainer = document.querySelector(\".categoria-container\");\n  var cesta = JSON.parse(localStorage.getItem(\"cesta\")) || [];\n  var categoriasLista = JSON.parse(localStorage.getItem(\"categoriasLista\")) || [];\n  if (cesta.length > 0 && categoriaGrid) {\n    var criarCategorias = function criarCategorias() {\n      var btnCriar = document.querySelector(\".criar-tarefa\");\n      btnCriar.style.display = \"none\";\n      var h1SemCategoria = document.querySelector(\".categoria-h1\");\n      h1SemCategoria.style.display = \"none\";\n      listaItens = [];\n      accordionContainer.innerHTML = \"\";\n      var resultado = {};\n      cesta.forEach(function (elemento) {\n        var categoria = elemento.categoria;\n        if (!resultado[categoria]) {\n          resultado[categoria] = [];\n        }\n        resultado[categoria].push({\n          titulo: elemento.titulo,\n          status: elemento.status\n        });\n      });\n      categoriasLista = Object.entries(resultado).map(function (_ref) {\n        var _ref2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, 2),\n          categoria = _ref2[0],\n          titulos = _ref2[1];\n        return {\n          categoria: categoria,\n          titulos: titulos\n        };\n      });\n      localStorage.setItem(\"categoriasLista\", JSON.stringify(categoriasLista));\n      categoriasLista.forEach(function (elemento) {\n        var feitas = elemento.titulos.filter(function (item) {\n          return item.status === \"Feita\";\n        }).length;\n        var div = document.createElement(\"div\");\n        var dt = document.createElement(\"dt\");\n        var dd = document.createElement(\"dd\");\n        div.classList.add(\"categoria-item\");\n        dt.classList.add(\"js-accordion\");\n        dd.classList.add(\"descricao\");\n        dt.innerHTML = \"<h2>\".concat(elemento.categoria, \"</h2>\");\n        if (elemento.titulos.length === 1) {\n          dd.innerHTML = \"\\n                        <p>\\n                            <span>Voc\\xEA fez \".concat(feitas, \"</span> de\\n                            <span>\").concat(elemento.titulos.length, \"</span>\\n                            tarefa\\n                        </p>\\n                    \");\n        } else {\n          dd.innerHTML = \"\\n                        <p>\\n                            <span>Voc\\xEA fez \".concat(feitas, \"</span> de\\n                            <span>\").concat(elemento.titulos.length, \"</span>\\n                            tarefas\\n                        </p>\\n                    \");\n        }\n        div.appendChild(dt);\n        div.appendChild(dd);\n        var divDescricao = document.createElement(\"div\");\n        divDescricao.classList.add(\"categoria-tarefas\");\n        dd.appendChild(divDescricao);\n        elemento.titulos.forEach(function (tarefa) {\n          divDescricao.innerHTML += \"\\n                    <p class=\\\"\".concat(tarefa.status === \"Feita\" ? \"feita\" : \"\", \"\\\">\\n                    \").concat(tarefa.titulo, \"\\n                    </p>\\n                \");\n        });\n        accordionContainer.appendChild(div);\n      });\n    };\n    var ativarCategoria = function ativarCategoria(event) {\n      var tituloContainer = event.currentTarget.parentElement;\n      var descricaoDoTitulo = tituloContainer.querySelector(\".descricao\");\n      descricaoDoTitulo.classList.toggle(\"aberto\");\n      tituloContainer.classList.toggle(\"ativo\");\n    };\n    var listaItens = [];\n    criarCategorias();\n    var accordionItem = document.querySelectorAll(\".js-accordion\");\n    accordionItem.forEach(function (titulo) {\n      titulo.addEventListener(\"click\", function (event) {\n        return ativarCategoria(event);\n      });\n    });\n  }\n}\n\n//# sourceURL=webpack://to-do-list/./js/modules/criar-categoria.js?\n}");

/***/ },

/***/ "./js/modules/criar-tarefas.js"
/*!*************************************!*\
  !*** ./js/modules/criar-tarefas.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ criarTarefas)\n/* harmony export */ });\nfunction criarTarefas() {\n  var tarefasItens = document.querySelectorAll(\".tarefa-flex\");\n  var cesta = JSON.parse(localStorage.getItem(\"cesta\")) || [];\n  var categoriasLista = JSON.parse(localStorage.getItem(\"categoriasLista\")) || [];\n  if (tarefasItens.length) {\n    var criarItens = function criarItens() {\n      tarefasItens.forEach(function (tarefa) {\n        var tarefaStatus = tarefa.querySelector(\".h1-tarefa\").innerText.trim();\n        cesta.map(function (item) {\n          if (item.status === tarefaStatus) {\n            tarefa.innerHTML += \"\\n                        <div class=\\\"tarefa-item\\\" id=\\\"\".concat(item.id, \"\\\">\\n                            <div class=\\\"item-info\\\">\\n                                <div class=\\\"marcador\\\" title=\\\"Marcar Tarefa\\\"></div>\\n                                <h2 class=\\\"h2-item\\\">\").concat(item.titulo, \"</h2>\\n                                <p class=\\\"p-item\\\">\").concat(item.prazo, \"<span class=\\\"span-item\\\"> - </span></p>\\n                            </div>\\n                            <div class=\\\"item-acoes\\\">\\n                                <img class=\\\"btn-deletar\\\" src=\\\"../img/deletar-icone.svg\\\" alt=\\\"Deletar\\\">\\n                                <img src=\\\"../img/bandeira-\").concat(item.prioridade, \".svg\\\" alt=\\\"Bandeira-alta\\\">\\n                            </div>\\n                        </div>\\n                        \");\n          }\n        });\n      });\n    };\n    var ativarDelete = function ativarDelete() {\n      var deletarItens = document.querySelectorAll(\".btn-deletar\");\n      deletarItens.forEach(function (item) {\n        item.addEventListener(\"click\", function (event) {\n          var tarefaItem = event.currentTarget.parentElement.parentElement;\n          var id = Number(tarefaItem.id);\n          var buscaCategoria = cesta.find(function (item) {\n            return item.id === id;\n          });\n          var categoria = buscaCategoria.categoria;\n          cesta = cesta.filter(function (item) {\n            return item.id !== id;\n          });\n          var existeCategoria = false;\n          cesta.forEach(function (item) {\n            if (item.categoria === categoria) {\n              existeCategoria = true;\n            }\n          });\n          if (!existeCategoria) {\n            categoriasLista = categoriasLista.filter(function (catItem) {\n              return catItem.categoria !== categoria;\n            });\n          }\n          localStorage.setItem(\"cesta\", JSON.stringify(cesta));\n          localStorage.setItem(\"categoriasLista\", JSON.stringify(categoriasLista));\n          tarefaItem.remove();\n          window.location.href = \"../pag-extras/tarefas.html\";\n        });\n      });\n    };\n    var marcarTarefa = function marcarTarefa() {\n      var itemLista = document.querySelectorAll(\".tarefa-item .marcador\");\n      itemLista.forEach(function (item) {\n        var h1 = item.parentElement.parentElement.parentElement.querySelector(\"h1\");\n        if (h1.innerText === \"Feita\") {\n          item.classList.add(\"atv-feita\");\n          item.parentElement.parentElement.classList.add(\"atv-feita\");\n        }\n        item.addEventListener(\"click\", function (event) {\n          event.currentTarget.classList.add(\"atv-feita\");\n          event.currentTarget.parentElement.parentElement.classList.add(\"atv-feita\");\n          document.body.style.pointerEvents = \"none\";\n          document.body.style.opacity = \"0.5\";\n          setTimeout(function () {\n            document.body.style.pointerEvents = \"auto\";\n            document.body.style.opacity = \"1\";\n          }, 2000);\n          var tarefaItem = event.currentTarget.parentElement.parentElement;\n          var id = Number(tarefaItem.id);\n          var buscaTarefa = cesta.find(function (item) {\n            return item.id === id;\n          });\n          if (!buscaTarefa) return;\n          buscaTarefa.status = \"Feita\";\n          tarefaItem.remove();\n          localStorage.setItem(\"cesta\", JSON.stringify(cesta));\n          criarItens();\n          window.location.href = \"../pag-extras/tarefas.html\";\n        });\n      });\n    };\n    criarItens();\n    ativarDelete();\n    marcarTarefa();\n    ativarDelete();\n    marcarTarefa();\n  }\n}\n\n//# sourceURL=webpack://to-do-list/./js/modules/criar-tarefas.js?\n}");

/***/ },

/***/ "./js/modules/data.js"
/*!****************************!*\
  !*** ./js/modules/data.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dataTarefa)\n/* harmony export */ });\nfunction dataTarefa() {\n  var cesta = JSON.parse(localStorage.getItem(\"cesta\")) || [];\n  var prazoLista = [];\n  function criarListaPrazo() {\n    cesta.forEach(function (elemento) {\n      prazoLista.push(elemento.prazo);\n    });\n  }\n  criarListaPrazo();\n  function validarPrazo(item) {\n    item = item.replace(/(\\d{2})\\/(\\d{2})\\/(\\d{4})/g, \"$3/$2/$1\");\n    return item;\n  }\n  function prazoVerificar(dataPrazo) {\n    var hoje = new Date();\n    var alvo = new Date(dataPrazo);\n    var diferenca = alvo - hoje;\n    var dias = Math.ceil(diferenca / (1000 * 60 * 60 * 24));\n    return dias;\n  }\n  var prazoListaSpan = [].concat(prazoLista);\n  function prazoHtml() {\n    var prazoTarefa = document.querySelectorAll(\".p-item\");\n    prazoListaSpan.forEach(function (prazo, index) {\n      prazoListaSpan[index] = prazo.replace(/(\\d{4})-(\\d{2})-(\\d{2})/g, \"$3/$2/$1\");\n    });\n    prazoTarefa.forEach(function (itemTarefa) {\n      var dataDaTarefa = itemTarefa.firstChild.textContent.trim();\n      prazoListaSpan.forEach(function (prazo) {\n        if (prazo === dataDaTarefa) {\n          var span = itemTarefa.querySelector(\"span\");\n          var resultado = prazoVerificar(validarPrazo(prazo));\n          if (resultado < -0) {\n            span.classList.add(\"atrasou\");\n            span.classList.remove(\"hoje\");\n            span.innerHTML = \"J\\xE1 passou dessa data!\";\n          } else if (resultado === -0) {\n            span.classList.add(\"hoje\");\n            span.classList.remove(\"atrasou\");\n            span.innerHTML = \"Chegou o dia\";\n          } else if (!resultado && resultado !== -0) {\n            span.classList.remove(\"hoje\");\n            span.classList.add(\"atrasou\");\n            span.innerHTML = \"Data n\\xE3o Encontrada!\";\n          } else {\n            span.classList.remove(\"hoje\");\n            span.classList.remove(\"atrasou\");\n            span.innerHTML = \"Faltam \".concat(resultado, \" dias\");\n          }\n        }\n      });\n    });\n  }\n  prazoHtml();\n}\n\n//# sourceURL=webpack://to-do-list/./js/modules/data.js?\n}");

/***/ },

/***/ "./js/modules/depoimentos.js"
/*!***********************************!*\
  !*** ./js/modules/depoimentos.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ criarDepoimentos)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction criarDepoimentos(listaDepoimentos) {\n  var depoimentosContainer = document.querySelector(listaDepoimentos);\n  if (depoimentosContainer) {\n    var fetchDepoimentos = /*#__PURE__*/function () {\n      var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var response, responseJSON, _t;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function (_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 1;\n              return fetch(\"./depoimentos-dos-usuarios/depoimentos.json\");\n            case 1:\n              response = _context.sent;\n              _context.next = 2;\n              return response.json();\n            case 2:\n              responseJSON = _context.sent;\n              responseJSON.forEach(function (item) {\n                var li = document.createElement(\"li\");\n                var divEstrelas = document.createElement(\"div\");\n                divEstrelas.classList.add(\"estrelas\");\n                for (var i = 0; i < item.estrela; i++) {\n                  var img = document.createElement(\"img\");\n                  img.src = \"./img/estrela.svg\";\n                  img.alt = \"Estrela\";\n                  divEstrelas.appendChild(img);\n                }\n                var p = document.createElement(\"p\");\n                p.innerText = item.avaliacao;\n                var h3 = document.createElement(\"h3\");\n                h3.innerText = item.nome;\n                li.appendChild(divEstrelas);\n                li.appendChild(p);\n                li.appendChild(h3);\n                depoimentosContainer.appendChild(li);\n              });\n              _context.next = 4;\n              break;\n            case 3:\n              _context.prev = 3;\n              _t = _context[\"catch\"](0);\n              console.log(_t);\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee, null, [[0, 3]]);\n      }));\n      return function fetchDepoimentos() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n    fetchDepoimentos();\n  }\n}\n\n//# sourceURL=webpack://to-do-list/./js/modules/depoimentos.js?\n}");

/***/ },

/***/ "./js/modules/href-marcador.js"
/*!*************************************!*\
  !*** ./js/modules/href-marcador.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ hrefMarcador)\n/* harmony export */ });\nfunction hrefMarcador(linksLista, iconesLista) {\n  var links = document.querySelectorAll(linksLista);\n  var iconesLinks = document.querySelectorAll(iconesLista);\n  if (links.length || iconesLinks) {\n    var linkSelecionado = function linkSelecionado() {\n      var windowLink = window.location.pathname;\n      links.forEach(function (link) {\n        var href = link.pathname;\n        if (href === windowLink) {\n          link.classList.add(\"linkAtual\");\n        } else {\n          link.classList.remove(\"linkAtual\");\n        }\n      });\n      iconesLinks.forEach(function (link) {\n        var href = link.pathname;\n        if (href === windowLink) {\n          link.classList.add(\"pag-atual\");\n        } else {\n          link.classList.remove(\"pag-atual\");\n        }\n      });\n    };\n    linkSelecionado();\n  }\n}\n\n//# sourceURL=webpack://to-do-list/./js/modules/href-marcador.js?\n}");

/***/ },

/***/ "./js/modules/menu-hamburguer.js"
/*!***************************************!*\
  !*** ./js/modules/menu-hamburguer.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuHamburguer)\n/* harmony export */ });\nfunction menuHamburguer(menuButton, navLista) {\n  var menu = document.querySelector(menuButton);\n  var nav = document.querySelector(navLista);\n  if (menu && nav) {\n    var ativarMenu = function ativarMenu(event) {\n      event.currentTarget.classList.toggle(\"inativo\");\n      event.currentTarget.classList.toggle(\"ativo\");\n      nav.classList.toggle(\"abrir\");\n      clicarForaMenu(nav, [\"click\", \"touchstart\"], function () {\n        nav.classList.remove(\"abrir\");\n        menu.classList.remove(\"ativo\");\n        menu.classList.add(\"inativo\");\n      });\n    };\n    var clicarForaMenu = function clicarForaMenu(elementoMenu, eventos, callback) {\n      var html = document.documentElement;\n      if (!elementoMenu.hasAttribute(\"data-click\", \"\")) {\n        eventos.forEach(function (evento) {\n          setTimeout(function () {\n            html.addEventListener(evento, controlarClick);\n          });\n        });\n        elementoMenu.setAttribute(\"data-click\", \"\");\n      }\n      function controlarClick(event) {\n        if (!elementoMenu.contains(event.target) && event.target !== menu) {\n          elementoMenu.removeAttribute(\"data-click\");\n          eventos.forEach(function (evento) {\n            html.removeEventListener(evento, controlarClick);\n          });\n          callback();\n        }\n      }\n    };\n    menu.addEventListener(\"click\", function (event) {\n      return ativarMenu(event);\n    });\n  }\n}\n\n//# sourceURL=webpack://to-do-list/./js/modules/menu-hamburguer.js?\n}");

/***/ },

/***/ "./js/modules/modal.js"
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ modal)\n/* harmony export */ });\nfunction modal(modalButton, modalContainer, fecharButton, cancelarButton, modalItem) {\n  var modalAtivar = document.querySelector(modalButton);\n  var modal = document.querySelector(modalContainer);\n  var fechar = document.querySelector(fecharButton);\n  var cancelar = document.querySelector(cancelarButton);\n  var modalForm = document.querySelector(modalItem);\n  if (modalAtivar && modal && fechar && cancelar && modalForm) {\n    var ativarModal = function ativarModal() {\n      modal.classList.add(\"ativo\");\n    };\n    var desativarModal = function desativarModal(event) {\n      event.preventDefault();\n      modal.classList.remove(\"ativo\");\n      inputs.forEach(function (input) {\n        input.value = \"\";\n      });\n      var modalValidos = modal.querySelectorAll(\".valido\");\n      var modalFeitos = modal.querySelectorAll(\".feita\");\n      modalValidos.forEach(function (valido) {\n        valido.classList.remove(\"valido\");\n      });\n      modalFeitos.forEach(function (feito) {\n        feito.classList.remove(\"feita\");\n      });\n      itensForm.forEach(function (item) {\n        item.innerText = \"Selecione\";\n        item.parentElement.classList.remove(\"texto-selecionado\");\n        var selecione = item.parentElement.querySelector(\".selecione\");\n        selecione.classList.remove(\"texto-selecionado\");\n      });\n      itensForm[2].parentElement.parentElement.classList.remove(\"categoria-valida\");\n    };\n    var clicarForaModal = function clicarForaModal(event) {\n      if (event.target === modalForm) {\n        modal.classList.remove(\"ativo\");\n        inputs.forEach(function (input) {\n          input.value = \"\";\n        });\n        var modalValidos = modal.querySelectorAll(\".valido\");\n        var modalFeitos = modal.querySelectorAll(\".feita\");\n        modalValidos.forEach(function (valido) {\n          valido.classList.remove(\"valido\");\n        });\n        modalFeitos.forEach(function (feito) {\n          feito.classList.remove(\"feita\");\n        });\n        itensForm.forEach(function (item) {\n          item.innerText = \"Selecione\";\n          item.parentElement.classList.remove(\"texto-selecionado\");\n          var selecione = item.parentElement.querySelector(\".selecione\");\n          selecione.classList.remove(\"texto-selecionado\");\n        });\n        itensForm[2].parentElement.parentElement.classList.remove(\"categoria-valida\");\n      }\n    };\n    var inputs = document.querySelectorAll(\".form-tarefa input\");\n    var itensForm = document.querySelectorAll(\".item-form .selecione\");\n    modalAtivar.addEventListener(\"click\", ativarModal);\n    fechar.addEventListener(\"click\", desativarModal);\n    cancelar.addEventListener(\"click\", function (event) {\n      return desativarModal(event);\n    });\n    modalForm.addEventListener(\"click\", function (event) {\n      return clicarForaModal(event);\n    });\n  }\n}\n\n//# sourceURL=webpack://to-do-list/./js/modules/modal.js?\n}");

/***/ },

/***/ "./js/modules/perfil-resumo.js"
/*!*************************************!*\
  !*** ./js/modules/perfil-resumo.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ resumoTarefasPerfil)\n/* harmony export */ });\nfunction resumoTarefasPerfil() {\n  var concluido = document.querySelector('[data-perfil=\"concluida\"] h2');\n  var progresso = document.querySelector('[data-perfil=\"progresso\"] h2');\n  var aFazer = document.querySelector('[data-perfil=\"pendente\"] h2');\n  var cesta = JSON.parse(localStorage.getItem(\"cesta\")) || [];\n  if (concluido && progresso && aFazer) {\n    var tarefasConcluidas = function tarefasConcluidas() {\n      cesta.map(function (elemento) {\n        if (elemento.status === \"Feita\") {\n          listaConcluidas.push(elemento);\n        }\n      });\n      concluido.innerHTML = listaConcluidas.length;\n    };\n    var tarefasProgresso = function tarefasProgresso() {\n      cesta.map(function (elemento) {\n        if (elemento.status === \"Em Progresso\") {\n          listaProgresso.push(elemento);\n        }\n      });\n      progresso.innerHTML = listaProgresso.length;\n    };\n    var tarefasPendente = function tarefasPendente() {\n      cesta.map(function (elemento) {\n        if (elemento.status === \"A Fazer\") {\n          listaPendente.push(elemento);\n        }\n      });\n      aFazer.innerHTML = listaPendente.length;\n    };\n    var progressoTarefas = function progressoTarefas() {\n      var progressoSpan = document.querySelector(\".p-progresso span\");\n      var soma = listaConcluidas.length + listaProgresso.length + listaPendente.length;\n      var calculoProgresso = Math.round(listaConcluidas.length * 100 / soma);\n      progressoSpan.innerHTML = \"\".concat(calculoProgresso, \"%\");\n      var progressoBar = document.querySelector(\".progresso-bar\");\n      progressoBar.style.setProperty(\"--progresso\", \"\".concat(calculoProgresso, \"%\"));\n    };\n    var listaConcluidas = [];\n    tarefasConcluidas();\n    var listaProgresso = [];\n    tarefasProgresso();\n    var listaPendente = [];\n    tarefasPendente();\n    progressoTarefas();\n  }\n}\n\n//# sourceURL=webpack://to-do-list/./js/modules/perfil-resumo.js?\n}");

/***/ },

/***/ "./js/modules/scroll-suave.js"
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ scrollSuave)\n/* harmony export */ });\nfunction scrollSuave(scrollSection) {\n  var scrollLista = document.querySelectorAll(scrollSection);\n  var alturaMinima = window.innerHeight * 0.6;\n  if (scrollLista.length) {\n    var ativarScrollSuave = function ativarScrollSuave() {\n      scrollLista.forEach(function (section) {\n        var sectionTop = section.getBoundingClientRect().top;\n        var visivel = sectionTop - alturaMinima < 0;\n        if (visivel) {\n          section.classList.add(\"ativo\");\n        }\n      });\n    };\n    ativarScrollSuave();\n    window.addEventListener(\"scroll\", ativarScrollSuave);\n  }\n}\n\n//# sourceURL=webpack://to-do-list/./js/modules/scroll-suave.js?\n}");

/***/ },

/***/ "./js/modules/tarefas-form.js"
/*!************************************!*\
  !*** ./js/modules/tarefas-form.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formTarefas)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(r, e) { var t = \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && \"number\" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t[\"return\"] || t[\"return\"](); } finally { if (u) throw o; } } }; }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction formTarefas(inputLista, prazoItem, radioButtons, opcoes, enviar, categoriaButton) {\n  var input = document.querySelector(inputLista);\n  var prazo = document.querySelector(prazoItem);\n  var radio = document.querySelectorAll(radioButtons);\n  var opcoesDiv = document.querySelectorAll(opcoes);\n  var botaoEnviar = document.querySelector(enviar);\n  var categoriaCriarButton = document.querySelector(categoriaButton);\n  var textoCriar = document.querySelector(\".texto-criar\");\n  var cesta = JSON.parse(localStorage.getItem(\"cesta\")) || [];\n  var categoriasLista = JSON.parse(localStorage.getItem(\"categoriasLista\")) || [];\n  if (input && prazo && radio.length && opcoesDiv.length && botaoEnviar && categoriaCriarButton && textoCriar) {\n    var inputValidar = function inputValidar(event) {\n      if (event.currentTarget.value.trim() === \"\") {\n        var pai = event.currentTarget.parentElement;\n        var label = event.currentTarget.parentElement.querySelector(\"label\");\n        div.classList.add(\"erro\");\n        label.classList.remove(\"feita\");\n        event.currentTarget.parentElement.classList.remove(\"valido\");\n        div.innerHTML = \"Por favor digite algo válido!\";\n        pai.appendChild(div);\n      } else {\n        div.classList.remove(\"erro\");\n        event.currentTarget.parentElement.classList.add(\"valido\");\n        var _label = event.currentTarget.parentElement.querySelector(\"label\");\n        _label.classList.add(\"feita\");\n        div.innerHTML = \"\";\n      }\n    };\n    var formatarPrazo = function formatarPrazo(data) {\n      var valor = data.currentTarget.value.replace(/\\D/g, \"\");\n      var prazoConstruido = valor.replace(/(\\d{2})(\\d{2})(\\d{2})/g, \"$1/$2/$3\");\n      return prazoConstruido;\n    };\n    var prazoValidar = function prazoValidar(event) {\n      var matchPrazo = event.currentTarget.value.match(/\\d{2}[\\/\\-\\.\\s]?\\d{2}[\\/\\-\\.\\s]?\\d{4}/);\n      if (matchPrazo && matchPrazo[0] === event.currentTarget.value) {\n        var label = event.currentTarget.parentElement.querySelector(\"label\");\n        label.classList.add(\"feita\");\n        divPrazo.classList.remove(\"erro\");\n        event.currentTarget.parentElement.classList.add(\"valido\");\n        divPrazo.innerHTML = \"\";\n        event.currentTarget.value = formatarPrazo(event);\n      } else {\n        var pai = event.currentTarget.parentElement;\n        divPrazo.classList.add(\"erro\");\n        var _label2 = event.currentTarget.parentElement.querySelector(\"label\");\n        _label2.classList.remove(\"feita\");\n        event.currentTarget.parentElement.classList.remove(\"valido\");\n        divPrazo.innerHTML = \"Por favor digite uma data válida!\";\n        pai.appendChild(divPrazo);\n      }\n    };\n    var ativarButton = function ativarButton(event) {\n      event.currentTarget.classList.add(\"ativo\");\n      var elementoPai = event.currentTarget.parentElement.parentElement.querySelector(\".selecione\");\n      if (elementoPai) {\n        elementoPai.innerText = event.currentTarget.innerText;\n        elementoPai.classList.add(\"texto-selecionado\");\n        event.currentTarget.parentElement.parentElement.classList.add(\"texto-selecionado\");\n        elementoPai.parentElement.parentElement.classList.add(\"valido\");\n      }\n    };\n    var abrirOpcao = function abrirOpcao(event) {\n      event.currentTarget.nextElementSibling.classList.toggle(\"abrir\");\n    };\n    var botaoCategoria = function botaoCategoria(event) {\n      event.preventDefault();\n      var inputCategoria = document.querySelector(\".btn-categoria input\");\n      var elementoPai = document.querySelector(\".categoria-aberta .opcoes\");\n      var div = document.createElement(\"div\");\n      div.innerText = inputCategoria.value;\n      var erroCategoria = document.querySelector(\".info-sem-categoria\");\n      var opcoesCategoria = document.querySelectorAll(\".categoria-aberta .opcoes div\");\n      if (div.innerText.trim() === \"\") {\n        erroCategoria.innerHTML = '<p class=\"erro\">Digite uma Categoria</p>';\n        return;\n      }\n      var categoriaExite = false;\n      var _iterator = _createForOfIteratorHelper(opcoesCategoria),\n        _step;\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var opcao = _step.value;\n          if (opcao.innerText.trim() === div.innerText.trim()) {\n            categoriaExite = true;\n            break;\n          }\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n      if (categoriaExite) {\n        erroCategoria.innerHTML = '<p class=\"erro\">Essa categoria já exite!</p>';\n        return;\n      }\n      elementoPai.appendChild(div);\n      erroCategoria.innerHTML = \"\";\n      div.addEventListener(\"click\", function (event) {\n        opcoesCategoria.forEach(function (div) {\n          div.classList.remove(\"ativo\");\n        });\n        event.currentTarget.classList.add(\"ativo\");\n        var elementoSelecione = event.currentTarget.parentElement.parentElement.parentElement.querySelector(\".selecione\");\n        elementoSelecione.innerText = event.currentTarget.innerHTML;\n        elementoSelecione.classList.add(\"texto-selecionado\");\n        elementoSelecione.parentElement.classList.add(\"texto-selecionado\");\n        elementoSelecione.parentElement.parentElement.classList.add(\"categoria-valida\");\n      });\n    };\n    var verificarCategorias = function verificarCategorias() {\n      var pSemCategoria = document.querySelector(\".categoria-aberta .info-sem-categoria p:nth-of-type(1)\");\n      var opcoesContainer = document.querySelector(\".categoria .opcoes\");\n      if (cesta.length > 0) {\n        pSemCategoria.style.display = \"none\";\n      } else {\n        pSemCategoria.style.display = \"block\";\n      }\n      opcoesContainer.innerHTML = \"\";\n      categoriasLista.forEach(function (elemento) {\n        var divOpcoesCategoria = document.createElement(\"div\");\n        var itemCategoria = document.querySelector(\".categoria\");\n        var select = itemCategoria.querySelector(\".costumizart-select\");\n        var selecione = itemCategoria.querySelector(\".selecione\");\n        divOpcoesCategoria.innerText = elemento.categoria;\n        divOpcoesCategoria.addEventListener(\"click\", function (event) {\n          opcoesContainer.querySelectorAll(\"div\").forEach(function (item) {\n            itemCategoria.classList.remove(\"categoria-valida\");\n            select.classList.remove(\"texto-selecionado\");\n            selecione.classList.remove(\"texto-selecionado\");\n            item.classList.remove(\"ativo\");\n          });\n          event.currentTarget.classList.add(\"ativo\");\n          selecione.innerHTML = elemento.categoria;\n          itemCategoria.classList.add(\"categoria-valida\");\n          select.classList.add(\"texto-selecionado\");\n          selecione.classList.add(\"texto-selecionado\");\n          if (event.currentTarget.classList.contains(\"ativo\")) {\n            var erroCategoria = document.querySelector(\".info-sem-categoria\");\n            erroCategoria.innerHTML = \"\";\n          }\n        });\n        opcoesContainer.appendChild(divOpcoesCategoria);\n      });\n    };\n    var validarSelecao = function validarSelecao(event) {\n      event.preventDefault();\n      var form = document.querySelector(\".form-tarefa\");\n      var validoLista = form.querySelectorAll(\".valido\");\n      var validoCategoria = form.querySelector(\".categoria-valida\");\n      var erroBotoes = document.querySelector(\".js-erro-button\");\n      if (validoCategoria === null || validoLista.length < 4) {\n        erroBotoes.classList.add(\"erro\");\n        erroBotoes.innerHTML = \"Certifique-se de preencher todo o formulário corretamente!\";\n      } else {\n        erroBotoes.classList.remove(\"erro\");\n        erroBotoes.innerHTML = \"\";\n        var titulo = document.querySelector(\".item-form input:nth-of-type(1)\");\n        var valorTitulo = titulo.value.trim();\n        var status = document.querySelector(\".status .selecione\");\n        var valorStatus = status.innerText;\n        var prioridade = document.querySelector(\".prioridade .selecione\");\n        var valorPrioridade = prioridade.innerText;\n        var categoria = document.querySelector(\".categoria-aberta .opcoes .ativo\");\n        var valorCategoria = categoria.innerText.trim();\n        var _prazo = document.querySelector(\"#prazo\");\n        var valorPrazo = _prazo.value;\n        cesta.push({\n          id: cesta.length,\n          titulo: valorTitulo,\n          status: valorStatus,\n          prioridade: valorPrioridade,\n          categoria: valorCategoria,\n          prazo: valorPrazo\n        });\n        var categoriaExisteSalvar = false;\n        for (var i = 0; i < categoriasLista.length; i++) {\n          if (categoriasLista[i].categoria === valorCategoria) {\n            categoriaExisteSalvar = true;\n            break;\n          }\n        }\n        if (!categoriaExisteSalvar) {\n          categoriasLista.push({\n            categoria: valorCategoria,\n            titulos: valorTitulo\n          });\n        }\n        localStorage.setItem(\"cesta\", JSON.stringify(cesta));\n        localStorage.setItem(\"categoriasLista\", JSON.stringify(categoriasLista));\n        var modal = document.querySelector(\".modal\");\n        modal.classList.remove(\"ativo\");\n        textoCriar.style.display = \"none\";\n        window.location.href = \"../pag-extras/tarefas.html\";\n      }\n    };\n    if (cesta.length > 0) {\n      textoCriar.style.display = \"none\";\n    }\n    var div = document.createElement(\"div\");\n    var divPrazo = document.createElement(\"div\");\n    verificarCategorias();\n    input.addEventListener(\"change\", function (event) {\n      return inputValidar(event);\n    });\n    prazo.addEventListener(\"change\", function (event) {\n      return prazoValidar(event);\n    });\n    radio.forEach(function (item) {\n      item.addEventListener(\"click\", function (event) {\n        return ativarButton(event);\n      });\n    });\n    opcoesDiv.forEach(function (opcao) {\n      opcao.addEventListener(\"click\", function (event) {\n        return abrirOpcao(event);\n      });\n    });\n    botaoEnviar.addEventListener(\"click\", function (event) {\n      return validarSelecao(event);\n    });\n    categoriaCriarButton.addEventListener(\"click\", function (event) {\n      return botaoCategoria(event);\n    });\n  }\n}\n\n//# sourceURL=webpack://to-do-list/./js/modules/tarefas-form.js?\n}");

/***/ },

/***/ "./js/modules/temas.js"
/*!*****************************!*\
  !*** ./js/modules/temas.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ temas)\n/* harmony export */ });\nfunction temas(tema) {\n  var temaButton = document.querySelector(tema);\n  var html = document.documentElement;\n  var modo = localStorage.getItem(\"tema\");\n  if (modo === \"escuro\") {\n    html.classList.add(\"tema-escuro\");\n  } else if (modo === \"claro\") {\n    html.classList.remove(\"tema-escuro\");\n  }\n  if (temaButton) {\n    var controlarTemas = function controlarTemas() {\n      html.classList.toggle(\"tema-escuro\");\n      if (html.classList.contains(\"tema-escuro\")) {\n        localStorage.setItem(\"tema\", \"escuro\");\n        temaButton.innerHTML = \"\\n                    <img src=\\\"./img/modo-escuro-ativado.svg\\\" alt=\\\"Modo-escuro ativado\\\">\\n                    <img src=\\\"./img/modo-claro-desativado.svg\\\" alt=\\\"Modo-claro desativado\\\">\\n                \";\n      } else {\n        localStorage.setItem(\"tema\", \"claro\");\n        temaButton.innerHTML = \"\\n                    <img src=\\\"./img/modo-escuro-desativado.svg\\\" alt=\\\"Modo-escuro desativado\\\">\\n                    <img src=\\\"./img/modo-claro-ativado.svg\\\" alt=\\\"Modo-claro ativado\\\">\\n                \";\n      }\n    };\n    if (modo === \"escuro\") {\n      temaButton.innerHTML = \"\\n                <img src=\\\"./img/modo-escuro-ativado.svg\\\" alt=\\\"Modo-escuro ativado\\\">\\n                <img src=\\\"./img/modo-claro-desativado.svg\\\" alt=\\\"Modo-claro desativado\\\">\\n            \";\n    } else if (modo === \"claro\") {\n      temaButton.innerHTML = \"\\n                <img src=\\\"./img/modo-escuro-desativado.svg\\\" alt=\\\"Modo-escuro desativado\\\">\\n                <img src=\\\"./img/modo-claro-ativado.svg\\\" alt=\\\"Modo-claro ativado\\\">\\n            \";\n    }\n    temaButton.addEventListener(\"click\", controlarTemas);\n  }\n}\n\n//# sourceURL=webpack://to-do-list/./js/modules/temas.js?\n}");

/***/ },

/***/ "./js/script.js"
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_href_marcador_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/href-marcador.js */ \"./js/modules/href-marcador.js\");\n/* harmony import */ var _modules_depoimentos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/depoimentos.js */ \"./js/modules/depoimentos.js\");\n/* harmony import */ var _modules_config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/config.js */ \"./js/modules/config.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tarefas_form_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tarefas-form.js */ \"./js/modules/tarefas-form.js\");\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_carrossel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/carrossel.js */ \"./js/modules/carrossel.js\");\n/* harmony import */ var _modules_menu_hamburguer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-hamburguer.js */ \"./js/modules/menu-hamburguer.js\");\n/* harmony import */ var _modules_temas_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/temas.js */ \"./js/modules/temas.js\");\n/* harmony import */ var _modules_criar_tarefas_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/criar-tarefas.js */ \"./js/modules/criar-tarefas.js\");\n/* harmony import */ var _modules_criar_categoria_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/criar-categoria.js */ \"./js/modules/criar-categoria.js\");\n/* harmony import */ var _modules_perfil_resumo_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/perfil-resumo.js */ \"./js/modules/perfil-resumo.js\");\n/* harmony import */ var _modules_data_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/data.js */ \"./js/modules/data.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_href_marcador_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\".menu nav a\", '[data-menu=\"icones\"] a');\n(0,_modules_depoimentos_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\".lista-depoimentos\");\n(0,_modules_config_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\".tema div\");\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('[data-modal=\"ativar\"]', \".modal\", \".fechar\", \".btns-form button:nth-of-type(2)\", '[data-modal=\"container\"]');\n(0,_modules_tarefas_form_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"#titulo\", \"#prazo\", \".opcoes div\", \".selecione\", \".btns-form button:nth-of-type(1)\", '[data-button=\"categoria\"]');\n(0,_modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('[data-scrol=\"suave\"]');\n(0,_modules_carrossel_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\".carrossel-wrapper\", \".carrossel-track\", \".prev\", \".prox\", \".enviar\", \".botoes-controle button\");\n(0,_modules_menu_hamburguer_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])('[data-menu=\"mobile\"]', '[data-menu=\"lista\"]');\n(0,_modules_temas_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])('[data-tema=\"button\"]');\n(0,_modules_criar_tarefas_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_modules_criar_categoria_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n(0,_modules_perfil_resumo_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])();\n(0,_modules_data_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"])();\n\n//# sourceURL=webpack://to-do-list/./js/script.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/OverloadYield.js"
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/OverloadYield.js ***!
  \**************************************************************/
(module) {

eval("{function _OverloadYield(e, d) {\n  this.v = e, this.k = d;\n}\nmodule.exports = _OverloadYield, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://to-do-list/./node_modules/@babel/runtime/helpers/OverloadYield.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/regenerator.js"
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regenerator.js ***!
  \************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{var regeneratorDefine = __webpack_require__(/*! ./regeneratorDefine.js */ \"./node_modules/@babel/runtime/helpers/regeneratorDefine.js\");\nfunction _regenerator() {\n  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */\n  var e,\n    t,\n    r = \"function\" == typeof Symbol ? Symbol : {},\n    n = r.iterator || \"@@iterator\",\n    o = r.toStringTag || \"@@toStringTag\";\n  function i(r, n, o, i) {\n    var c = n && n.prototype instanceof Generator ? n : Generator,\n      u = Object.create(c.prototype);\n    return regeneratorDefine(u, \"_invoke\", function (r, n, o) {\n      var i,\n        c,\n        u,\n        f = 0,\n        p = o || [],\n        y = !1,\n        G = {\n          p: 0,\n          n: 0,\n          v: e,\n          a: d,\n          f: d.bind(e, 4),\n          d: function d(t, r) {\n            return i = t, c = 0, u = e, G.n = r, a;\n          }\n        };\n      function d(r, n) {\n        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {\n          var o,\n            i = p[t],\n            d = G.p,\n            l = i[2];\n          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));\n        }\n        if (o || r > 1) return a;\n        throw y = !0, n;\n      }\n      return function (o, p, l) {\n        if (f > 1) throw TypeError(\"Generator is already running\");\n        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {\n          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);\n          try {\n            if (f = 2, i) {\n              if (c || (o = \"next\"), t = i[o]) {\n                if (!(t = t.call(i, u))) throw TypeError(\"iterator result is not an object\");\n                if (!t.done) return t;\n                u = t.value, c < 2 && (c = 0);\n              } else 1 === c && (t = i[\"return\"]) && t.call(i), c < 2 && (u = TypeError(\"The iterator does not provide a '\" + o + \"' method\"), c = 1);\n              i = e;\n            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;\n          } catch (t) {\n            i = e, c = 1, u = t;\n          } finally {\n            f = 1;\n          }\n        }\n        return {\n          value: t,\n          done: y\n        };\n      };\n    }(r, o, i), !0), u;\n  }\n  var a = {};\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n  t = Object.getPrototypeOf;\n  var c = [][n] ? t(t([][n]())) : (regeneratorDefine(t = {}, n, function () {\n      return this;\n    }), t),\n    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);\n  function f(e) {\n    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, regeneratorDefine(e, o, \"GeneratorFunction\")), e.prototype = Object.create(u), e;\n  }\n  return GeneratorFunction.prototype = GeneratorFunctionPrototype, regeneratorDefine(u, \"constructor\", GeneratorFunctionPrototype), regeneratorDefine(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = \"GeneratorFunction\", regeneratorDefine(GeneratorFunctionPrototype, o, \"GeneratorFunction\"), regeneratorDefine(u), regeneratorDefine(u, o, \"Generator\"), regeneratorDefine(u, n, function () {\n    return this;\n  }), regeneratorDefine(u, \"toString\", function () {\n    return \"[object Generator]\";\n  }), (module.exports = _regenerator = function _regenerator() {\n    return {\n      w: i,\n      m: f\n    };\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports)();\n}\nmodule.exports = _regenerator, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://to-do-list/./node_modules/@babel/runtime/helpers/regenerator.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/regeneratorAsync.js"
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorAsync.js ***!
  \*****************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{var regeneratorAsyncGen = __webpack_require__(/*! ./regeneratorAsyncGen.js */ \"./node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js\");\nfunction _regeneratorAsync(n, e, r, t, o) {\n  var a = regeneratorAsyncGen(n, e, r, t, o);\n  return a.next().then(function (n) {\n    return n.done ? n.value : a.next();\n  });\n}\nmodule.exports = _regeneratorAsync, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://to-do-list/./node_modules/@babel/runtime/helpers/regeneratorAsync.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js"
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js ***!
  \********************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{var regenerator = __webpack_require__(/*! ./regenerator.js */ \"./node_modules/@babel/runtime/helpers/regenerator.js\");\nvar regeneratorAsyncIterator = __webpack_require__(/*! ./regeneratorAsyncIterator.js */ \"./node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js\");\nfunction _regeneratorAsyncGen(r, e, t, o, n) {\n  return new regeneratorAsyncIterator(regenerator().w(r, e, t, o), n || Promise);\n}\nmodule.exports = _regeneratorAsyncGen, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://to-do-list/./node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js"
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js ***!
  \*************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{var OverloadYield = __webpack_require__(/*! ./OverloadYield.js */ \"./node_modules/@babel/runtime/helpers/OverloadYield.js\");\nvar regeneratorDefine = __webpack_require__(/*! ./regeneratorDefine.js */ \"./node_modules/@babel/runtime/helpers/regeneratorDefine.js\");\nfunction AsyncIterator(t, e) {\n  function n(r, o, i, f) {\n    try {\n      var c = t[r](o),\n        u = c.value;\n      return u instanceof OverloadYield ? e.resolve(u.v).then(function (t) {\n        n(\"next\", t, i, f);\n      }, function (t) {\n        n(\"throw\", t, i, f);\n      }) : e.resolve(u).then(function (t) {\n        c.value = t, i(c);\n      }, function (t) {\n        return n(\"throw\", t, i, f);\n      });\n    } catch (t) {\n      f(t);\n    }\n  }\n  var r;\n  this.next || (regeneratorDefine(AsyncIterator.prototype), regeneratorDefine(AsyncIterator.prototype, \"function\" == typeof Symbol && Symbol.asyncIterator || \"@asyncIterator\", function () {\n    return this;\n  })), regeneratorDefine(this, \"_invoke\", function (t, o, i) {\n    function f() {\n      return new e(function (e, r) {\n        n(t, i, e, r);\n      });\n    }\n    return r = r ? r.then(f, f) : f();\n  }, !0);\n}\nmodule.exports = AsyncIterator, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://to-do-list/./node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/regeneratorDefine.js"
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorDefine.js ***!
  \******************************************************************/
(module) {

eval("{function _regeneratorDefine(e, r, n, t) {\n  var i = Object.defineProperty;\n  try {\n    i({}, \"\", {});\n  } catch (e) {\n    i = 0;\n  }\n  module.exports = _regeneratorDefine = function regeneratorDefine(e, r, n, t) {\n    function o(r, n) {\n      _regeneratorDefine(e, r, function (e) {\n        return this._invoke(r, n, e);\n      });\n    }\n    r ? i ? i(e, r, {\n      value: n,\n      enumerable: !t,\n      configurable: !t,\n      writable: !t\n    }) : e[r] = n : (o(\"next\", 0), o(\"throw\", 1), o(\"return\", 2));\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports, _regeneratorDefine(e, r, n, t);\n}\nmodule.exports = _regeneratorDefine, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://to-do-list/./node_modules/@babel/runtime/helpers/regeneratorDefine.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/regeneratorKeys.js"
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorKeys.js ***!
  \****************************************************************/
(module) {

eval("{function _regeneratorKeys(e) {\n  var n = Object(e),\n    r = [];\n  for (var t in n) r.unshift(t);\n  return function e() {\n    for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e;\n    return e.done = !0, e;\n  };\n}\nmodule.exports = _regeneratorKeys, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://to-do-list/./node_modules/@babel/runtime/helpers/regeneratorKeys.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js"
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{var OverloadYield = __webpack_require__(/*! ./OverloadYield.js */ \"./node_modules/@babel/runtime/helpers/OverloadYield.js\");\nvar regenerator = __webpack_require__(/*! ./regenerator.js */ \"./node_modules/@babel/runtime/helpers/regenerator.js\");\nvar regeneratorAsync = __webpack_require__(/*! ./regeneratorAsync.js */ \"./node_modules/@babel/runtime/helpers/regeneratorAsync.js\");\nvar regeneratorAsyncGen = __webpack_require__(/*! ./regeneratorAsyncGen.js */ \"./node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js\");\nvar regeneratorAsyncIterator = __webpack_require__(/*! ./regeneratorAsyncIterator.js */ \"./node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js\");\nvar regeneratorKeys = __webpack_require__(/*! ./regeneratorKeys.js */ \"./node_modules/@babel/runtime/helpers/regeneratorKeys.js\");\nvar regeneratorValues = __webpack_require__(/*! ./regeneratorValues.js */ \"./node_modules/@babel/runtime/helpers/regeneratorValues.js\");\nfunction _regeneratorRuntime() {\n  \"use strict\";\n\n  var r = regenerator(),\n    e = r.m(_regeneratorRuntime),\n    t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor;\n  function n(r) {\n    var e = \"function\" == typeof r && r.constructor;\n    return !!e && (e === t || \"GeneratorFunction\" === (e.displayName || e.name));\n  }\n  var o = {\n    \"throw\": 1,\n    \"return\": 2,\n    \"break\": 3,\n    \"continue\": 3\n  };\n  function a(r) {\n    var e, t;\n    return function (n) {\n      e || (e = {\n        stop: function stop() {\n          return t(n.a, 2);\n        },\n        \"catch\": function _catch() {\n          return n.v;\n        },\n        abrupt: function abrupt(r, e) {\n          return t(n.a, o[r], e);\n        },\n        delegateYield: function delegateYield(r, o, a) {\n          return e.resultName = o, t(n.d, regeneratorValues(r), a);\n        },\n        finish: function finish(r) {\n          return t(n.f, r);\n        }\n      }, t = function t(r, _t, o) {\n        n.p = e.prev, n.n = e.next;\n        try {\n          return r(_t, o);\n        } finally {\n          e.next = n.n;\n        }\n      }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n;\n      try {\n        return r.call(this, e);\n      } finally {\n        n.p = e.prev, n.n = e.next;\n      }\n    };\n  }\n  return (module.exports = _regeneratorRuntime = function _regeneratorRuntime() {\n    return {\n      wrap: function wrap(e, t, n, o) {\n        return r.w(a(e), t, n, o && o.reverse());\n      },\n      isGeneratorFunction: n,\n      mark: r.m,\n      awrap: function awrap(r, e) {\n        return new OverloadYield(r, e);\n      },\n      AsyncIterator: regeneratorAsyncIterator,\n      async: function async(r, e, t, o, u) {\n        return (n(e) ? regeneratorAsyncGen : regeneratorAsync)(a(r), e, t, o, u);\n      },\n      keys: regeneratorKeys,\n      values: regeneratorValues\n    };\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports)();\n}\nmodule.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://to-do-list/./node_modules/@babel/runtime/helpers/regeneratorRuntime.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/regeneratorValues.js"
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorValues.js ***!
  \******************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{var _typeof = (__webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"]);\nfunction _regeneratorValues(e) {\n  if (null != e) {\n    var t = e[\"function\" == typeof Symbol && Symbol.iterator || \"@@iterator\"],\n      r = 0;\n    if (t) return t.call(e);\n    if (\"function\" == typeof e.next) return e;\n    if (!isNaN(e.length)) return {\n      next: function next() {\n        return e && r >= e.length && (e = void 0), {\n          value: e && e[r++],\n          done: !e\n        };\n      }\n    };\n  }\n  throw new TypeError(_typeof(e) + \" is not iterable\");\n}\nmodule.exports = _regeneratorValues, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://to-do-list/./node_modules/@babel/runtime/helpers/regeneratorValues.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/typeof.js"
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
(module) {

eval("{function _typeof(o) {\n  \"@babel/helpers - typeof\";\n\n  return module.exports = _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports, _typeof(o);\n}\nmodule.exports = _typeof, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://to-do-list/./node_modules/@babel/runtime/helpers/typeof.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/regenerator/index.js"
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{// TODO(Babel 8): Remove this file.\n\nvar runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ \"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js\")();\nmodule.exports = runtime;\n\n// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  if (typeof globalThis === \"object\") {\n    globalThis.regeneratorRuntime = runtime;\n  } else {\n    Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list/./node_modules/@babel/runtime/regenerator/index.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js"
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayLikeToArray)\n/* harmony export */ });\nfunction _arrayLikeToArray(r, a) {\n  (null == a || a > r.length) && (a = r.length);\n  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];\n  return n;\n}\n\n\n//# sourceURL=webpack://to-do-list/./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js"
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayWithHoles)\n/* harmony export */ });\nfunction _arrayWithHoles(r) {\n  if (Array.isArray(r)) return r;\n}\n\n\n//# sourceURL=webpack://to-do-list/./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js"
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayWithoutHoles)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(r) {\n  if (Array.isArray(r)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(r);\n}\n\n\n//# sourceURL=webpack://to-do-list/./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _asyncToGenerator)\n/* harmony export */ });\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) {\n  try {\n    var i = n[a](c),\n      u = i.value;\n  } catch (n) {\n    return void e(n);\n  }\n  i.done ? t(u) : Promise.resolve(u).then(r, o);\n}\nfunction _asyncToGenerator(n) {\n  return function () {\n    var t = this,\n      e = arguments;\n    return new Promise(function (r, o) {\n      var a = n.apply(t, e);\n      function _next(n) {\n        asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n);\n      }\n      function _throw(n) {\n        asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n);\n      }\n      _next(void 0);\n    });\n  };\n}\n\n\n//# sourceURL=webpack://to-do-list/./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js"
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _iterableToArray)\n/* harmony export */ });\nfunction _iterableToArray(r) {\n  if (\"undefined\" != typeof Symbol && null != r[Symbol.iterator] || null != r[\"@@iterator\"]) return Array.from(r);\n}\n\n\n//# sourceURL=webpack://to-do-list/./node_modules/@babel/runtime/helpers/esm/iterableToArray.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js"
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _iterableToArrayLimit)\n/* harmony export */ });\nfunction _iterableToArrayLimit(r, l) {\n  var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"];\n  if (null != t) {\n    var e,\n      n,\n      i,\n      u,\n      a = [],\n      f = !0,\n      o = !1;\n    try {\n      if (i = (t = t.call(r)).next, 0 === l) {\n        if (Object(t) !== t) return;\n        f = !1;\n      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);\n    } catch (r) {\n      o = !0, n = r;\n    } finally {\n      try {\n        if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return;\n      } finally {\n        if (o) throw n;\n      }\n    }\n    return a;\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list/./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js"
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _nonIterableRest)\n/* harmony export */ });\nfunction _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\n\n//# sourceURL=webpack://to-do-list/./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js"
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _nonIterableSpread)\n/* harmony export */ });\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\n\n//# sourceURL=webpack://to-do-list/./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _slicedToArray)\n/* harmony export */ });\n/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js\");\n/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ \"./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js\");\n/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ \"./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js\");\n\n\n\n\nfunction _slicedToArray(r, e) {\n  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(r) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(r, e) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(r, e) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://to-do-list/./node_modules/@babel/runtime/helpers/esm/slicedToArray.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toConsumableArray)\n/* harmony export */ });\n/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js\");\n/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/iterableToArray.js\");\n/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ \"./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js\");\n\n\n\n\nfunction _toConsumableArray(r) {\n  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(r) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(r) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(r) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://to-do-list/./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js?\n}");

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js"
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _unsupportedIterableToArray)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(r, a) {\n  if (r) {\n    if (\"string\" == typeof r) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(r, a);\n    var t = {}.toString.call(r).slice(8, -1);\n    return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(r, a) : void 0;\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list/./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;