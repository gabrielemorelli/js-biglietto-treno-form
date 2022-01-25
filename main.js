

const bottone = document.getElementById('elabora');



bottone.addEventListener('click',
    function () {

        const nome = document.getElementById('name').value;
        console.log(nome);
        const kmdapercorrere = document.getElementById('km').value;;
        const fasciaeta = document.getElementById('eta').value;;
        const costokm = 0.21;
        let prezzobiglietto = kmdapercorrere * costokm;
        let offerta = 'Biglietto intero'

        if (nome == '' || kmdapercorrere == '') {
            alert("Nome o km  vuoto")
            nome = "";
            kmdapercorrere = "";
        }
        else {


            if (fasciaeta == "minorenne") {
                prezzobiglietto = prezzobiglietto - (prezzobiglietto * 20 / 100)
                offerta = 'Biglietto ridotto'
            }

            else if (fasciaeta == "over-65") {
                prezzobiglietto = prezzobiglietto - (prezzobiglietto * 40 / 100)
                offerta = 'Biglietto over65'
            }
        }

        let biglietto = document.getElementById('biglietto');
 
        biglietto.classList.remove('hidden');
        document.getElementById('out_prezzobiglietto').innerHTML = prezzobiglietto.toFixed(2) + " Euro";
        document.getElementById('out_name').innerHTML = nome;
      
        document.getElementById('out_offerta').innerHTML = offerta;
        const carrozza = Math.floor((Math.random() * 9)) + 1;
        document.getElementById('out_carrozza').innerHTML = carrozza;
        const ccp = Math.floor((Math.random() * 1000)) + 9000;
        document.getElementById('out_ccp').innerHTML = ccp;
    }


    

)

const annulla = document.getElementById('annulla');
annulla.addEventListener('click',
    function () {
        let biglietto = document.getElementById('biglietto');
        biglietto.classList.add('hidden');

        document.getElementById('name').value = "";
        document.getElementById('km').value = "";
        document.getElementById('eta').value = "minorenne";

    }
)



