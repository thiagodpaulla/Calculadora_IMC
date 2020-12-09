const   calcular = document.getElementById ('calcular');

function imc (){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== ''){

        const valorIMC = (peso/ (altura*altura)).toFixed (2);

        let classificação = '';

        if (valorIMC < 18.5){
            classificação = 'Seu IMC esta Abaixo e você abaixo do peso ideal para sua Altura';

        }else if (valorIMC < 25) { 
             classificação = 'com peso ideal. Parabens';

        }else if (valorIMC < 30 ) {
            classificação = 'esta levemente acima do peso.';

        }else if (valorIMC < 35) {
            classificação = ' você esta com obesidade grau 1';

        } else if (valorIMC < 40) {
            classificação = 'você esta com obesidade grau 2';
            
        }else {
            classificação = 'você esta com obesidade grau 3 CUIDADO!!!';
        }
      

        resultado.textContent = ` ${nome} seu IMC é ${valorIMC} e voce esta ${classificação}`;
    } else {
        resultado.textContent = 'Preencha todos os campos!!!';
        
    }
   
}

calcular.addEventListener ('click', imc);

