document.addEventListener("DOMContentLoaded", function() {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const logado = localStorage.getItem("logado");
    const loginButton = document.getElementById("login-button");
    const menu = document.querySelector(".menu");

    if (!usuario || logado !== "true") {
        window.location.href = "login.html"; // Redireciona para login se não estiver logado
    } else {
        // Substitui o botão de login pelo nome do usuário
        loginButton.textContent = usuario.nome;
        loginButton.style.cursor = "default"; // Remover aparência de botão

        // Criar botão de logout ao lado do nome
        const logoutButton = document.createElement("button");
        logoutButton.textContent = "Sair";
        logoutButton.classList.add("btn-logout");
        logoutButton.style.marginLeft = "10px";
        logoutButton.addEventListener("click", function() {
            localStorage.removeItem("logado");
            location.reload(); // Atualiza a página ao deslogar
        });

        menu.appendChild(logoutButton);
    }
});
