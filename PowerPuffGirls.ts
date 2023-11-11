import prompt from 'prompt-sync';
console.log("\n");
console.log("--- A CIDADE DE TOWNSVILLE ESTÁ SENDO ATACADA ---");
prompt()("Pressione ENTER para descobrir quem está atacando a cidade");


class Carta {
    constructor(
        public nome: string,
        public forca: number,
        public inteligencia: number,
        public defesa: number,
        public vida: number,
        public agilidade: number,
        public valorAssist: number,
        public adicionaAssist: string
    ) { }
}

// criamos classe heroi
class Heroi extends Carta {
    usarComoPrincipal() {
        console.log(`${this.nome} vai salvar a cidade!`);
        console.log(`Força: ${this.forca}`);
        console.log(`Inteligência: ${this.inteligencia}`);
        console.log(`Defesa: ${this.defesa}`);
        console.log(`Vida: ${this.vida}`);
        console.log(`Agilidade: ${this.agilidade}`);
    }
    // criando assistente do heroi, e o valor que ele deve adicionar ao personagem principal
    usarComoAssistente(personagemPrincipal: Heroi) {
        console.log(`Ufa! ${this.nome} ouviu seu pedido de ajuda e veio ajudá-lo, lhe fornecendo mais ${this.valorAssist} pontos de ${this.adicionaAssist}`)
        if (personagemPrincipal instanceof Heroi) {
            if (this.nome === "Docinho") {
                personagemPrincipal.forca += 5;
            } else if (this.nome === "Florzinha") {
                personagemPrincipal.agilidade += 4;
            } else if (this.nome === "Lindinha") {
                personagemPrincipal.defesa += 4;
            } else if (this.nome === "Professor Utônio") {
                personagemPrincipal.inteligencia += 5;
            } else if (this.nome === "Senhorita Belo") {
                personagemPrincipal.vida += 10;
            } else if (this.nome === "Prefeito") {
                personagemPrincipal.vida += 5;
            }
        }
    }
}
// criando o vilao
class Vilao extends Carta {
    usarComoPrincipal() {
        console.log(`Oh não! A cidade está sendo atacada por ${this.nome}`);
        console.log(`Força: ${this.forca}`);
        console.log(`Inteligência: ${this.inteligencia}`);
        console.log(`Defesa: ${this.defesa}`);
        console.log(`Vida: ${this.vida}`);
        console.log(`Agilidade: ${this.agilidade}`);
    }
    // criando o assistente do vilao
    usarComoAssistente(personagemPrincipal: Vilao) {
        console.log(`Ah não! ${this.nome} está(ão) ajudando a destruir a cidade e deu ao vilão mais ${this.valorAssist} pontos de ${this.adicionaAssist}`)
        if (this.nome === "Fuzzy Confusão") {
            personagemPrincipal.forca += 4;
        } else if (this.nome === "Ele") {
            personagemPrincipal.agilidade += 3;
        } else if (this.nome === "Gangue Gangrena") {
            personagemPrincipal.defesa += 3;
        } else if (this.nome === "Macaco Louco") {
            personagemPrincipal.inteligencia += 5;
        } else if (this.nome === "Meninos Desordeiros") {
            personagemPrincipal.vida += 10;
        } else if (this.nome === "Trio Ameba") {
            personagemPrincipal.vida += 5;
        }
    }
}

// atribuindo os valores a cada hero/vilao
const herois: Heroi[] = [
    new Heroi("Florzinha", 50, 80, 30, 100, 70, 4, "Agilidade"),
    new Heroi("Lindinha", 60, 70, 50, 100, 60, 4, "Defesa"),
    new Heroi("Docinho", 80, 60, 40, 100, 80, 5, "Força"),
    new Heroi("Professor Utônio", 70, 90, 20, 100, 90, 5, "Inteligência"),
    new Heroi("Senhorita Belo", 90, 50, 60, 100, 50, 10, "Vida"),
    new Heroi("Prefeito", 40, 40, 10, 100, 40, 5, "Vida")
];
const viloes: Vilao[] = [
    new Vilao("Fuzzy Confusão", 50, 70, 30, 100, 80, 4, "Força"),
    new Vilao("Ele", 60, 60, 40, 100, 90, 3, "Agilidade"),
    new Vilao("Gangue Gangrena", 70, 50, 50, 100, 60, 3, "Defesa"),
    new Vilao("Macaco Louco", 80, 80, 20, 100, 70, 5, "Inteligência"),
    new Vilao("Meninos Desordeiros", 90, 40, 60, 100, 50, 10, "Vida"),
    new Vilao("Trio Ameba", 40, 30, 10, 100, 40, 5, "Vida")
];

// fazendo sorteio do heroi e do vilao com o math ramdom pra ser aleatorio
const sorteioHeroiPrincipal = (): Heroi => {
    const cartaPrincipalJogador: Heroi = herois[Math.floor(Math.random() * herois.length)];
    return cartaPrincipalJogador;
};
const sorteioAssistente = (cartaPrincipalJogador: Heroi): Heroi => {
    let cartaAssistenteJogador: Heroi = herois[Math.floor(Math.random() * herois.length)];
    while (cartaAssistenteJogador === cartaPrincipalJogador) {
        cartaAssistenteJogador = herois[Math.floor(Math.random() * herois.length)];
    }
    return cartaAssistenteJogador;
};
const sorteioVilao = (): Vilao => {
    const cartaPrincipalComputador: Vilao = viloes[Math.floor(Math.random() * viloes.length)];
    return cartaPrincipalComputador;
};
const sorteioAssistenteVilao = (cartaPrincipalComputador: Vilao): Vilao => {
    let cartaAssistenteComputador: Vilao = viloes[Math.floor(Math.random() * viloes.length)];
    while (cartaAssistenteComputador === cartaPrincipalComputador) {
        cartaAssistenteComputador = viloes[Math.floor(Math.random() * viloes.length)];
    }
    return cartaAssistenteComputador;
};

//criando as variaveis
const cartaPrincipalJogador = sorteioHeroiPrincipal();
const cartaAssistenteJogador = sorteioAssistente(cartaPrincipalJogador);
const cartaPrincipalComputador = sorteioVilao();
const cartaAssistenteComputador = sorteioAssistenteVilao(cartaPrincipalComputador);

// o que imprimir no terminal ao iniciar o programa
console.log("\n");
cartaPrincipalComputador.usarComoPrincipal();
console.log("\n");
prompt()("(pressione o botão “enter” para sortear o seu herói e defender a cidade)")
console.log("\n");
cartaPrincipalJogador.usarComoPrincipal();
console.log("\n");
prompt()("Espere... o que está acontecendo?")
console.log("\n");
cartaAssistenteComputador.usarComoAssistente(cartaPrincipalComputador);
console.log("\n");
prompt()("Mas veja...")
console.log("\n");
cartaAssistenteJogador.usarComoAssistente(cartaPrincipalJogador);


// mostrar o que esta quem ganhou em cada categoria
console.log("\n");
prompt()("Prontos para iniciar a batalha?")
console.log("\n");
console.log("--- INÍCIO DA BATALHA ---");
console.log("\n");


const batalha = () => {
    let contadorHeroi = 0;
    let contadorVilao = 0;
    let contadorEmpate = 0;
    console.log(`Força:\n ${cartaPrincipalJogador.nome}: ${cartaPrincipalJogador.forca} \n vs \n ${cartaPrincipalComputador.nome}: ${cartaPrincipalComputador.forca}`);


    if (cartaPrincipalJogador.forca > cartaPrincipalComputador.forca) {
        contadorHeroi++;
        console.log(`Ganhador: ${cartaPrincipalJogador.nome}`);
    } else if (cartaPrincipalComputador.forca > cartaPrincipalJogador.forca) {
        contadorVilao++;
        console.log(`Ganhador: ${cartaPrincipalComputador.nome}`);
    } else {
        contadorEmpate++;
        console.log(`Parece que deu empate...`);
    }
    console.log("\n");


    console.log(`Inteligência:\n ${cartaPrincipalJogador.nome}: ${cartaPrincipalJogador.inteligencia} \n vs \n ${cartaPrincipalComputador.nome}: ${cartaPrincipalComputador.inteligencia}`);


    if (cartaPrincipalJogador.inteligencia > cartaPrincipalComputador.inteligencia) {
        contadorHeroi++;
        console.log(`Ganhador: ${cartaPrincipalJogador.nome}`);
    } else if (cartaPrincipalComputador.inteligencia > cartaPrincipalJogador.inteligencia) {
        contadorVilao++;
        console.log(`Ganhador: ${cartaPrincipalComputador.nome}`);
    } else {
        contadorEmpate++;
        console.log(`Parece que deu empate...`)
    }
    console.log("\n");


    console.log(`Defesa:\n ${cartaPrincipalJogador.nome}: ${cartaPrincipalJogador.defesa} \n vs \n ${cartaPrincipalComputador.nome}: ${cartaPrincipalComputador.defesa}`);
    if (cartaPrincipalJogador.defesa > cartaPrincipalComputador.defesa) {
        contadorHeroi++;
        console.log(`Ganhador: ${cartaPrincipalJogador.nome}`);
    } else if (cartaPrincipalComputador.defesa > cartaPrincipalJogador.defesa) {
        contadorVilao++;
        console.log(`Ganhador: ${cartaPrincipalComputador.nome}`);
    } else {
        contadorEmpate++;
        console.log(`Parece que deu empate...`)
    }
    console.log("\n");
    console.log(`Vida:\n ${cartaPrincipalJogador.nome}: ${cartaPrincipalJogador.vida} \n vs \n ${cartaPrincipalComputador.nome}: ${cartaPrincipalComputador.vida}`);
    if (cartaPrincipalJogador.vida > cartaPrincipalComputador.vida) {
        contadorHeroi++;
        console.log(`Ganhador: ${cartaPrincipalJogador.nome}`);
    } else if (cartaPrincipalComputador.vida > cartaPrincipalJogador.vida) {
        contadorVilao++;
        console.log(`Ganhador: ${cartaPrincipalComputador.nome}`);
    } else {
        contadorEmpate++;
        console.log(`Parece que deu empate...`)
    }
    console.log("\n");
    console.log(`Agilidade:\n ${cartaPrincipalJogador.nome}: ${cartaPrincipalJogador.agilidade} \n vs \n ${cartaPrincipalComputador.nome}: ${cartaPrincipalComputador.agilidade}`);
    if (cartaPrincipalJogador.agilidade > cartaPrincipalComputador.agilidade) {
        contadorHeroi++;
        console.log(`Ganhador: ${cartaPrincipalJogador.nome}`);
    } else if (cartaPrincipalComputador.agilidade > cartaPrincipalJogador.agilidade) {
        contadorVilao++;
        console.log(`Ganhador: ${cartaPrincipalComputador.nome}`);
    } else {
        contadorEmpate++;
        console.log(`Parece que deu empate...`)
    }
    console.log("\n");
    prompt()("E quando a fumça baixa, finalmente podemos ver...")
    console.log("\n");
    console.log(`--- O RESULTADO DA BATALHA ---`);
    console.log("\n");
    console.log(`${cartaPrincipalJogador.nome}: ${contadorHeroi} vitória(s)`);
    console.log(`${cartaPrincipalComputador.nome}: ${contadorVilao} vitória(s)`);
    console.log(`Batalhas empatadas: ${contadorEmpate}`)
    console.log("\n");
    if (contadorHeroi > contadorVilao) {
        console.log(`E no fim do dia, a cidade de Townsville foi salva por ${cartaPrincipalJogador.nome}!`);
    } else if (contadorHeroi < contadorVilao) {
        console.log(`Oh não... ${cartaPrincipalComputador.nome} venceu a batalha!`);
    } else {
        console.log('Você impediu que a cidade fosse destruída, mas o vilão consegiu escapar.. essa batalha terminou em empate!');
    }
};
batalha();
