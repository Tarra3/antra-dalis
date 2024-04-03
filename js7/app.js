const xInput = document.getElementById("x");
const yInput = document.getElementById("y");
const btn = document.getElementById("btn");
const rez = document.getElementById("rez");

const skaiciuoti = () => {
    const x = xInput.valueAsNumber;
    const y = yInput.valueAsNumber;
    if (isNaN(x) || isNaN(y)) { // kad neskaiciuotu zodziu arba tusciu laukeliu
        rez.innerHTML = `ivesti skaiciai yra neteisingi`;
    } else {
        const sum = x + y;
        // let alertClass = ""; variantas2 stilizuotas isvedimas

        if (sum > 100) {
            // alertClass="alert-danger"; <- variantas2
            rez.innerHTML = `<div class="alert alert-danger" role="alert">
            Skaiciu suma yra lygi: ${sum}
                </div>`;

        } else {
            //  alertClass="alert-success"; <- variantas2 

            rez.innerHTML = `<div class="alert alert-success" role="alert">
                Skaiciu suma yra lygi: ${sum}
                </div>`;
        }
        //rez.innerHTML = `<div class="alert ${alertClass}" role="alert">
        //   Skaiciu suma yra lygi: ${ sum }
        //  </div >`; variantas2

        //rez.innerHTML = `Skaiciu suma yra lygi: ${sum}`; <-rezultatas be spalvu ir alertu
    }

    // formos isvalymas po apsakaiciavimo:
    xInput.value = "";
    yInput.value = "";
}

btn.onclick = skaiciuoti;



/*
isNaN("855") -> false
isNaN("") -> true
isNaN("tekstas") -> true
*/