const calcular = document.getElementById('calcular');

function imc() {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(altura !== '' && peso !== ''){
        let imc = peso/(altura*altura);

        if(imc >= 25){
        resultado.textContent = ` Olá seu imc é ${imc.toFixed(2)} Você esta acima do peso.`;
        }else if(imc < 18){
            resultado.textContent = ` Olá seu imc é ${imc.toFixed(2)} Você esta abaixo do peso.`;
        }else{
            resultado.textContent = ` Olá seu imc é ${imc.toFixed(2)} Você esta no peso ideal.`;
        }

    }else{
        resultado.textContent = 'Preencha todos os campos!';
    }

}


calcular.addEventListener('click', imc);