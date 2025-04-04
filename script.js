document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll(".menu li a");

    menuLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Animação do botão de login
    const loginBtn = document.querySelector(".btn-login");
    loginBtn.addEventListener("click", function() {
        alert("Área de login em desenvolvimento!");
    });
});