function aparecerCartao() {
  let valorDoCartao = document.getElementById("inputTexto").value;
  document.getElementById("textoDigitado").textContent = valorDoCartao;
}

document.getElementById("inputTexto").addEventListener("input", aparecerCartao);

function aparecerNumero() {
  var valor = document.getElementById("inputNumero").value;
  var cardNumber = valor.replace(/\D/g, "");

  var formattedCardNumber = "";
  for (var i = 0; i < cardNumber.length && i < 16; i++) {
    if (i > 0 && i % 4 == 0) {
      formattedCardNumber += " ";
    }
    formattedCardNumber += cardNumber.charAt(i);
  }

  document.getElementById("textoDigitado2").textContent = formattedCardNumber;
}

document
  .getElementById("inputNumero")
  .addEventListener("input", aparecerNumero);

function aparecerMes() {
  let valorMes = document.getElementById("inputMm").value;

  if (valorMes.length === 2) {
    valorMes += "/";
    document.getElementById("inputMm").value = valorMes;
  }
  if (valorMes.length > 3) {
    document.getElementById("inputMm").value = valorMes;
  }

  document.getElementById("textoDigitado3").textContent = valorMes;
}

document.getElementById("inputMm").addEventListener("input", aparecerMes);

const ativaMenu = document.querySelector(".fa-bars");
const navMenu = document.querySelector("nav .menu");

ativaMenu.addEventListener("click", () => {
  ativaMenu.classList.toggle("fa-x");
  navMenu.classList.toggle("ativado");
});

