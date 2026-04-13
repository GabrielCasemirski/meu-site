alert("funcionando");

const botao = document.getElementById("botao");

botao.addEventListener("click", () => {
    const numero = "41998358540"; // coloque seu número real
    const mensagem = "Olá, vi seu perfil e quero entrar em contato!";

    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(link, "_blank");
});
