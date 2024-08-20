const textodigitado = document.getElementById("textodigitado");
const botaocriptografar = document.getElementById("botaocriptografar");
const botaodescriptografar = document.getElementById("botaodescriptografar");
const botaocopiar = document.getElementById("botaocopiar");
const campodetextocriptografado = document.getElementById("campodetextocriptografado");
const boneco = document.getElementById("boneco");
const textoinformativo = document.getElementById("textoinformativo");
const direita = document.getElementById("direita");

let substituir = [
    ["a","hjwww"],
    ["e","yuiu"],
    ["i","etrtyerty"],
    ["o","dogdog"],
    ["u","catcat"],
]

botaocriptografar.addEventListener("click", () => {
    const texto = textodigitado.value.toLowerCase();
    if(texto != "") {
        function criptografar(novotexto) {
            for(let i=0; i<substituir.length;i++){
                if(novotexto.includes(substituir[i][0])){
                    novotexto = novotexto.replaceAll(substituir[i][0], substituir[i][1]);
                };
            };
            return novotexto
        };
    } else {
        alert('Digite um texto')
    }
    const textocriptografado = criptografar(texto);

    campodetextocriptografado.innerHTML = textocriptografado;
    boneco.classList.add("oculto");
    textoinformativo.style.display = "none";
    botaocopiar.style.display = "block";
    direita.classList.add("ajustar");
    campodetextocriptografado.classList.add("ajustar");
})

const reiniciar = () => {
    campodetextocriptografado.innerHTML = "";
    boneco.classList.remove("oculto"); 
    textoinformativo.style.display = "block";
    botaocopiar.style.display = "none";
    direita.classList.remove("ajustar");
    campodetextocriptografado.classList.remove("ajustar");
}

botaodescriptografar.addEventListener("click", () => {
    const texto = textodigitado.value.toLowerCase();
    if (texto!="") {
        function descriptografar(novotexto) {
            for(let i=0; i<substituir.length; i++) {
                if(novotexto.includes(substituir[i][1])) {
                    novotexto = novotexto.replaceAll(substituir[i][1], substituir[1][i]);
                };
            };
            return novotexto;
        };
    } else {
        alert("Digite um texto para descriptografar")
    }
const textodescriptografado = descriptografar(texto);

campodetextocriptografado.innerHTML = textodescriptografado;

})

botaocopiar.addEventListener("click", () =>{
    let texto = textodigitado;
    texto.select();
    document.execCommand('copy');
    alert("Texto Copiado");
    reiniciar();
})