window.onload=()=>{
    "use strick"
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("./sw.js")
    }
}


let Jogador = "X";
let TabelaDoJogo = ["", "", "", "", "", "", "", "", ""];
let JogoAtivo = true;
const Mensagem = document.getElementById("mensagem");

function Movimento(CaixaIndex) {
    if (TabelaDoJogo[CaixaIndex] === "" && JogoAtivo) {
        TabelaDoJogo[CaixaIndex] = Jogador;
        document.getElementsByClassName("Caixa")[CaixaIndex].innerText = Jogador;
        Vencedor();
        AlternarJogador();
    }
}

function AlternarJogador() {
    Jogador = Jogador === "X" ? "O" : "X";
}

function Vencedor() {
    const ManeirasDeVitoria = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of ManeirasDeVitoria) {
        const [a, b, c] = combo;
        if (TabelaDoJogo[a] && TabelaDoJogo[a] === TabelaDoJogo[b] && TabelaDoJogo[a] === TabelaDoJogo[c]) {
            JogoAtivo = false;
            Mensagem.innerText = `${Jogador} venceu!`;
            return;
        }
    }

    if (!TabelaDoJogo.includes("")) {
        JogoAtivo = false;
        Mensagem.innerText = "Empate!";
    }
}

function Resetar() {
    Jogador = "X";
    TabelaDoJogo = ["", "", "", "", "", "", "", "", ""];
    JogoAtivo = true;
    Mensagem.innerText = "";
    const Caixas = document.getElementsByClassName("Caixa");
    for (const Caixa of Caixas) {
        Caixa.innerText = "";
    }
}

Resetar();