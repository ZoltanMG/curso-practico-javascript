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
const PI = Math.PI
function diametroCirculo(radio) {
  return radio * 2;
}

function perimetroCirculo(radio) {
  return diametroCirculo(radio) * PI;
}

function areaCirculo(radio) {
  return radio * radio * PI;
}
