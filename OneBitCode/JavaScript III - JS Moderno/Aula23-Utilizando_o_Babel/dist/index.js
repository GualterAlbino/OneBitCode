"use strict";

//Dois exemplos para o cálculo de média simples
var MediaSimples = function MediaSimples() {
  var soma = 0;
  for (var i = 0; i < arguments.length; i++) {
    soma += i < 0 || arguments.length <= i ? undefined : arguments[i];
  }
  return soma / arguments.length;
};
console.log("Media Aritimetica Simples: ".concat(MediaSimples(1, 2, 3)));

//Ou então:
var MediaSimples2 = function MediaSimples2() {
  for (var _len = arguments.length, valores = new Array(_len), _key = 0; _key < _len; _key++) {
    valores[_key] = arguments[_key];
  }
  var Soma = valores.reduce(function (Acumulador, NumeroAtual) {
    return Acumulador;
  }, NumeroAtual, 0);
  return Soma / valores.length;
};
console.log("Media Aritimetica Simples: ".concat(MediaSimples(1, 2, 3)));
var MediaPonderada = function MediaPonderada() {
  for (var _len2 = arguments.length, valores = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    valores[_key2] = arguments[_key2];
  }
  var Soma = valores.reduce(function (Acumulador, _ref) {
    var NumeroAtual = _ref.NumeroAtual,
      Peso = _ref.Peso;
    return Acumulador + NumeroAtual * Peso;
  }, 0);
  var SomaDosPesos = valores.reduce(function (Acumulador, NumeroAtual) {
    return Acumulador + NumeroAtual.Peso;
  }, 0);
  return Soma / SomaDosPesos;
};
console.log("A Media Ponderada \xE9: ".concat(MediaPonderada({
  NumeroAtual: 9,
  Peso: 3
}, {
  NumeroAtual: 7,
  Peso: 1
}, {
  NumeroAtual: 10,
  Peso: 1
})));
var Mediana = function Mediana() {
  for (var _len3 = arguments.length, valores = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    valores[_key3] = arguments[_key3];
  }
  valores.sort(function (a, b) {
    return a - b;
  });
  //Função nativa "Math.floor() pega o numero inteiro mais proximo"
  var meio = Math.floor(valores.length / 2);

  //Se o meio for IMPAR,  existe apenas um valor no meio
  if (valores.length % 2 !== 0) {
    return console.log("A mediana \xE9: ".concat(valores[meio], " "));

    //Se o valor for PAR, existem dois valores no meio, sendo o do calculo e seu antecessor    
  } else {
    return console.log("A mediana \xE9 ".concat(valores[meio - 1], " e ").concat(valores[meio]));
  }
};
Mediana(2, 5, 99, 4, 42, 7);
Mediana(2, 5, 99, 4, 42);
var Moda = function Moda() {
  for (var _len4 = arguments.length, valores = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    valores[_key4] = arguments[_key4];
  }
  //[ [numero,quantidade], [numero,quantidade], [numero,quantidade] ]
  var Contador = valores.map(function (Numero) {
    return [Numero, valores.filter(function (n) {
      return Numero === n;
    }).length];
  });
  Contador.sort(function (a, b) {
    return b[1] - a[1];
  });
  return Contador[0][0];
};
console.log("Moda: ".concat(Moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)));