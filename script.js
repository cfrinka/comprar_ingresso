let readlineSync = require('readline-sync');
let filmes = ["1. O Iluminado", " 2. Clube da Luta", " 3. O Poderoso Chefão", " 4. Um Sonho de Liberdade"];
let horariosIluminado = [" 1. 10:00", " 2. 14:00", " 3. 19:00"];
let horariosClubeDaLuta = [" 1. 11:00", " 2. 15:00", " 3. 20:00"];
let horariosPoderosoChefao = [" 1. 12:00", " 2. 16:00", " 3. 21:00"];
let horariosSonhoDeLiberdade = [" 1. 13:00", " 2. 17:00", " 3. 22:00"];
let nome = readlineSync.question('Olá! Qual o seu nome? ')
let numeroDoPedido = (Math.random())
console.log(`Oi ${nome}. Os filmes disponíveis são: ${filmes}`);

let escolhaFilme = readlineSync.questionInt('Digite o numero do filme escolhido: ')

if (escolhaFilme == 1) {
    console.log(`Você escolheu: ${filmes[0]}`);
    console.log(`Os horários disponíveis são: ${horariosIluminado}`);
    let escolhaIluminado = readlineSync.question('Digite o numero do horário escolhido: ');
    if (escolhaIluminado == 1) {
        console.log(`Seu filme é ${filmes[0]} na sessão das ${horariosIluminado[0]} horas.`);
    }
    if (escolhaIluminado == 2) {
        console.log(`Seu filme é ${filmes[0]} na sessão das ${horariosIluminado[1]} horas.`);
    }
    if (escolhaIluminado == 3) {
        console.log(`Seu filme é ${filmes[0]} na sessão das ${horariosIluminado[2]} horas.`);
    }
}
if (escolhaFilme == 2) {
    console.log(`Você escolheu: ${filmes[1]}`);
    console.log(`Os horários disponíveis são: ${horariosClubeDaLuta}`);
    let escolhaClubeDaLuta = readlineSync.question('Digite o número do horário escolhido')
    if (escolhaClubeDaLuta == 1) {
        console.log(`Seu filme é ${filmes[1]} na sessão das ${horariosClubeDaLuta[0]}`)
    }
    if (escolhaClubeDaLuta == 2) {
        console.log(`Seu filme é ${filmes[1]} na sessão das ${horariosClubeDaLuta[1]}`)
    }
    if (escolhaClubeDaLuta == 3) {
        console.log(`Seu filme é ${filmes[1]} na sessão das ${horariosClubeDaLuta[2]}`)
    }
}
if (escolhaFilme == 3) {
    console.log(`Você escolheu: ${filmes[2]}`);
    console.log(`Os horários disponíveis são: ${horariosPoderosoChefao}`);
    let escolhaPoderosoChefao = readlineSync.question('Digite o número do horario escolhido: ');
    if (escolhaPoderosoChefao == 1) {
        console.log(`Seu filme é ${filmes[2]} na sessão das ${horariosPoderosoChefao[0]}`);
    }
    if (escolhaPoderosoChefao == 2) {
        console.log(`Seu filme é ${filmes[2]} na sessão das ${horariosPoderosoChefao[1]}`);
    }
    if (escolhaPoderosoChefao == 3) {
        console.log(`Seu filme é ${filmes[2]} na sessão das ${horariosPoderosoChefao[2]}`);
    }
}
if (escolhaFilme == 4) {
    console.log(`Você escolheu: ${filmes[3]}`);
    console.log(`Os horarios disponiveis são: ${horariosSonhoDeLiberdade}`);
    let escolhaSonhoDeLiberdade = readlineSync.question('Digite o numero do horario escolhido: ');
    if (escolhaSonhoDeLiberdade == 1) {
        console.log(`Seu filme é ${filmes[3]} no horario das ${horariosSonhoDeLiberdade[0]}`)
    }
    if (escolhaSonhoDeLiberdade == 2) {
        console.log(`Seu filme é ${filmes[3]} no horario das ${horariosSonhoDeLiberdade[1]}`)
    }
    if (escolhaSonhoDeLiberdade == 3) {
        console.log(`Seu filme é ${filmes[3]} no horario das ${horariosSonhoDeLiberdade[2]}`)
    }
}

if (escolhaFilme >= 5) {
    console.log('Nao encontrei seu filme.')
        // inserir comando para reiniciar o script 
}

let meia = readlineSync.questionInt('Quantos ingressos a meia entrada gostaria?')
let inteira = readlineSync.questionInt('Quantos ingressos inteiros gostaria?')
let total = (meia * 5) + (inteira * 10)

console.log(`${nome}, O total do seu pedido é de R$ ${total}`);
console.log(`O numero do seu pedido é ${numeroDoPedido}`);
console.log(`Dirija-se ao caixa e informe o número do pedido para efetuar o pagamento.`);
console.log(`Tenha uma ótima sessão`);









// let variavelSemNome = readlineSync.questionInt('Digite o número do horario desejado: ')