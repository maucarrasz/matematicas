function teoremaPitagoras(cateto, hipotenusa) {
  return Math.sqrt(hipotenusa ** 2 - cateto ** 2);
}

function alturaTriangulo(lado1, lado2, base) {
  if (lado1 === lado2 && lado1 != base) {
    alert("Tenemos un triángulo isósceles salvaje!!");
    let altura = teoremaPitagoras(base / 2, lado1);
    altura = altura.toFixed(2);
    console.log(`La altura de este pokemón es de ${altura}cm`);
    alert(`La altura de este pokemón es de ${altura}cm`);
  } else {
    alert("Lo siento, pero su triángulo no es isósceles");
  }
}
