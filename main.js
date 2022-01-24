let name = document.getElementById('name');
let km = document.getElementById('km');
let eta = document.getElementById('eta');
let button = document.getElementById('elabora');



button.addEventListener('click',
    function () {

        if (name.value == '' || km.value=='') {
             alert("Nome o km  vuoto")
             name.value = "";
             km.value = ""; }
        else {
            let costokm = 0.21;
            let prezzo = km.value * costokm;
            console.log(prezzo);

            if (eta.value == "minorenne") {
                console.log(prezzo);

                var sconto = (km.value * costokm * 20) / 100;
                console.log(sconto);

            }

            else if (eta.value == "over-65") {
                var sconto = (km.value * costokm * 40) / 100;
                console.log(sconto);

            }


            else {
                var sconto = 0;
            }

            let prezzofinale = prezzo - sconto;
            console.log(prezzofinale);
            document.getElementById('out_name').value=name.value; 
            document.getElementById('biglietto').value=prezzofinale; 
            
          
        }


    }

)


annulla.addEventListener('click',
    function () {
        name.value = "";
        km.value = "";

    }
)



