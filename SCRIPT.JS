alert("funcionando");

const botao = document.getElementById("botao");

botao.addEventListener("click", () => {
    const link = "https://github.com/GabrielCasemirski";

    window.open(link, "_blank");
});
