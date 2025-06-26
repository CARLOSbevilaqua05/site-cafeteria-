 let btnSaibamais = document.getElementById("botao-saiba-mais");
let btnmenu = document.getElementById("menu");
  function rolarParaCardapio() {
    const destino = document.getElementById("fotos");
    if (destino) {
      destino.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("Elemento #cadu não encontrado.");
    }
  }

  btnSaibamais.addEventListener("click", rolarParaCardapio);
  btnmenu.addEventListener("click", rolarParaCardapio);

 
  const botoesAdicionar = document.querySelectorAll(".container button");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const cartCount = document.getElementById("cart-count");
  const carrinho = document.getElementById("carrinho");
  const btnAbrir = document.getElementById("cart-btn");
  const btnFechar = document.getElementById("close-cart");
  const btnFinalizar = document.getElementById("checkout-btn");

  let total = 0;
  let contador = 0;

  botoesAdicionar.forEach(botao => {
    botao.addEventListener("click", function () {
      const container = this.closest(".container");
      const nome = container.querySelector("h3").innerText;
      const precoTexto = container.querySelector("p").innerText.replace("R$", "").trim();
      const preco = parseFloat(precoTexto);

      const item = document.createElement("p");
      item.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
      cartItems.appendChild(item);

      total += preco;
      contador++;
      cartTotal.textContent = total.toFixed(2);
      cartCount.textContent = contador;
    });
  });

  btnAbrir.addEventListener("click", () => {
    carrinho.style.display = "block";
    carrinho.style.position = "fixed";
  });

  btnFechar.addEventListener("click", () => {
    carrinho.style.display = "none";
  });

  btnFinalizar.addEventListener("click", () => {
    const endereco = document.getElementById("address").value;
    const pagamento = document.getElementById("pagamento").value;

    if (!endereco) {
      alert("Por favor, digite o endereço.");
      return;
    }

    let mensagem = "🛒 *Pedido realizado:*\n\n";

    const itens = cartItems.querySelectorAll("p");
    itens.forEach(item => {
      mensagem += `• ${item.textContent}\n`;
    });

    mensagem += `\n💰 *Total:* R$ ${total.toFixed(2)}`;
    mensagem += `\n📍 *Endereço:* ${endereco}`;
    mensagem += `\n💳 *Pagamento:* ${pagamento}`;

    const numero = "55SEUNUMEROAQUI"; // Coloque seu número do WhatsApp com DDD
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  });

 