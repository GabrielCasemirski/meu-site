document.addEventListener("DOMContentLoaded", () => {
    alert("funcionando");

    const botao = document.getElementById("botao");

    botao.addEventListener("click", () => {
        window.location.href = "https://github.com/GabrielCasemirski";
    });
});
