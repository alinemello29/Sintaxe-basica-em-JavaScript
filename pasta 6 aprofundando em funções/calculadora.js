/* // criando uma calculadora 
function calculadora() {

    //definindo as operações e peagando valor de entrada do usuário
   // usamos "\n" para fazer uma quebra de linha
   const operacao = number(pompt('Escolha uma opção:\n 1 - soma (+\n 2 - subtração (-)\n 3 - multiplicação (*)\n4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)')); 

   //verificando se a operação e válida
   if(!opracao || operacao >= 7) {
    alert('erro -operação inválida');
    calculadora();
} else {

    //definindo variáveis 
    //todas as entradas devem  ser do tipo munber
    let n1 = Number(prompt('insira o segundo valor:'));
    let n2 = Number(prompt('insira o segundo valor:'));
    let resultado:

    //verificando se as variáveis são válidas 
    if (!in || !n2) { 
        alert('erro - parâmetros inválidos');
        calculadora ();
    } else {

        // definindo as funções 
        function soma() {
            resultado = n1 + n2;

            // mostrando o resultado  usando template strings 
            alert('${1} + ${2} = ${resultado}');
            novaOperacao();
        }

        function subtracao() {
            resultado = n1 -n2;
            alert('${n1} - ${n2} = ${resultado}');
            novaOperacao();
        }

        function multiplicada() {
            resultado = n1 * n2;
            alert('${n1} *${n2} = ${resultado}');
            novaOperacao();
        }

        fuction divisaoReal() {
            resultado = n1 / n2; 
            alert('${n1} \ ${n2} = ${resultado}');
            novaOperacao();
        }

        function divisaoInteira(){
            resultado = n1 % n2;
            alert('O resto da divisão entre$(n1) e $(n2) é igual a ${resultado}');
            novaOperacao();
        } 

        function potenciacao(){
            resultado = n1 ** n2;
        alert('$n1) elevando a ${n2}ª potência é ${resultado}');
        novaOperacao();
        }

        //nova operação 
        function novaOperacao() {
            let pcao = pompt('Deseja fazer outra operacção?\n 1 - sim\n 2 - não');

            if (opcao == 1) {
                calculadora();
            } elese if (opcao == 2) {
                alert(' Até mais!');
            } else {
                alert('Digite uma opção valida!');
                novaOperacao();
                     }
            }
        }
    } */       

    /* // escolhendo operação
    // usand if && else
    if (operacao == 1) {
        soma();
    } else if (operacao == 2) {
        subtracao();
    } else if (operacao == 3) {
        multiplicacao();
    } else if (operacao == 4) {
        divisaoReal();
    } else if (operacao == 5) {
        divisaoInteira();
    } else if (operacao == 6) {
        potenciacao();
    } */

  /*     // usando switch case
    switch (operacao) {
        case 1:
            soma();
            break;
        case 2:
            subtracao();
            break;
        case 3:
            multiplicacao();
            break;
        case 4:
            divisaoReal();
            break;
        case 5:
            divisaoInteira();
            break;
        case 6:
            potenciacao();
            break;
    } 
}

calculadora(); */  
