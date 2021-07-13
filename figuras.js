// codigo del cuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

// codigo del triángulo
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// código del círculo
const PI = Math.PI;
function diametroCirculo(radio) {
  return radio * 2;
}

function perimetroCirculo(radio) {
  return diametroCirculo(radio) * PI;
}

function areaCirculo(radio) {
  return radio * radio * PI;
}

// Aquí interactuamos con el HTML

// Cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  // alert(perimetro);
  document.getElementById('resultado').innerHTML= perimetro;
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

// Triángulo
function calcularPerimetroTriangulo() {
  const inputLado1 = document.getElementById("InputLado1Triangulo");
  const valueLado1 = Number(inputLado1.value);

  const inputLado2 = document.getElementById("InputLado2Triangulo");
  const valueLado2 = Number(inputLado2.value);

  const inputBase = document.getElementById("InputBaseTriangulo");
  const valueBase = Number(inputBase.value);

  const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const inputbase = document.getElementById("InputBaseTriangulo");
  const valuebase = Number(inputbase.value);

  const inputAltura = document.getElementById("InputAlturaTriangulo");
  const valueAltura = Number(inputAltura.value);

  const area = areaTriangulo(valuebase, valueAltura);
  alert(area);
}

// Circulo

function calcularPerimetroCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const area = areaCirculo(value);
  alert(area);
}

function calcularDiametroCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const area = diametroCirculo(value);
  alert(area);
}