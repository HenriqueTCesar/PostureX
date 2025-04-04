document.addEventListener("DOMContentLoaded", function() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    let container = document.getElementById("itens-carrinho");

    function atualizarCarrinho() {
        container.innerHTML = "";
        if (carrinho.length === 0) {
            container.innerHTML = "<p>Seu carrinho está vazio.</p>";
            return;
        }
        
        carrinho.forEach((item, index) => {
            let div = document.createElement("div");
            div.innerHTML = `
                <span>${item.nome} - R$ ${item.preco.toFixed(2)}</span>
                <button onclick="removerItem(${index})">Remover</button>
            `;
            container.appendChild(div);
        });
    }

    window.adicionarAoCarrinho = function(nome, preco) {
        carrinho.push({ nome, preco });
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        window.location.href = "carrinho.html";
    }

    window.removerItem = function(index) {
        carrinho.splice(index, 1);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        atualizarCarrinho();
    }

    window.finalizarCompra = function() {
        alert("Compra finalizada com sucesso!");
        localStorage.removeItem("carrinho");
        window.location.href = "index.html";
    }

    atualizarCarrinho();
});
