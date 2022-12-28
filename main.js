
//Button Resumen
let ticketsResumen = document.querySelector("#ticketsResumen");
ticketsResumen.addEventListener("click", ticketsPrice);

// Button Borrar
let ticketsBorrar = document.querySelector("#ticketsBorrar");
ticketsBorrar.addEventListener("click", borrarOutput);

//Cantidad
let ticketsQuantity = document.querySelector(".ticketsQuantity");
ticketsQuantity.addEventListener("click", clearInput);

//Categoria
let ticketsCategory = document.querySelector(".ticketsCategory");
ticketsCategory.addEventListener("click", descuento);

let discountStudent = document.querySelector(".estudiante");
discountStudent.addEventListener("click", updateCategory);
let discountTrainee = document.querySelector(".trainee");
discountTrainee.addEventListener("click", updateCategory);
let discountJunior = document.querySelector(".junior");
discountJunior.addEventListener("click", updateCategory);




// TICKET
function ticketsPrice(evento) {
    console.log(evento);
   
    evento.preventDefault();

    let ticketsQuantity = document.querySelector(".ticketsQuantity");

    if (Number(ticketsQuantity.value)) {
        let ticketsCategory = document.querySelector(".ticketsCategory");
        let totalPayment;

        switch (ticketsCategory.value) {
            case "Estudiante": {
                totalPayment = 200 * ticketsQuantity.value * 0.2;
                break;
            }
            case "Trainee": {
                totalPayment = 200 * ticketsQuantity.value * 0.5;
                break;
            }
            case "Junior": {
                totalPayment = 200 * ticketsQuantity.value * 0.85;
                break;
            }
        }

        document.querySelector(".ticketsOutput").textContent = `Total a pagar$:${totalPayment}`;
        let outputNode = document.querySelector(".ticketsOutput");
        let spanNode = document.createElement("span");
        spanNode.className = 'ticketsBuy';
        spanNode.append(textNode);
        outputNode.append(spanNode);


    } else {
        document.querySelector(".ticketsQuantity").style.border = "2px solid";
        ticketsQuantity.value = "";
        ticketsQuantity.placeholder = "Ingrese una cantidad válida";
        alert("Ingrese una cantidad válida");
    }
}

// BORRAR
function borrarOutput() {

    document.querySelector(".ticketsOutput").textContent = "Total a pagar:";

    let form = document.querySelector(".ticketsForm");
    for (i = 0; i < 4; i++) {
        document.querySelector("." + form[i].className).style.border = "1px solid var(--gray-300)";
    }
}

// SUBMIT
function ticketsSubmit() {

    let form = document.querySelector(".ticketsForm");
console.log(form);
    inputCheck(form);

    function inputCheck(form) {
        let arrayCheck = [];
        for (i = 0; i < 3; i++) {
            arrayCheck[i] = form[i].value;
            if (form[i].value == "") {
                document.querySelector("." + form[i].className).style.border = "2px solid";
            } else {
                document.querySelector("." + form[i].className).style.border = "1px solid var";
            }
        }

        if (arrayCheck.every(element => element != "")) {
            if (form[2].value.includes('@') && form[2].value.includes('.')) {
                alert("Formulario enviado");
                form.submit();
                document.querySelector("." + form[2].className).style.border = "1px solid var";
            } else {
                alert("Debe ingresar un correo válido");
                document.querySelector("." + form[2].className).style.border = "2px solid"
            }
        } else {
            alert("Completar los campos");
        }

    }
}



// Descuento
function descuento(evento) {
    
    switch (evento.target.value) {
        case "Estudiante": {
            document.querySelector(".estudiante").style.backgroundColor = "#f2f2f2";
            document.querySelector(".trainee").style.backgroundColor = "transparent";
            document.querySelector(".junior").style.backgroundColor = "transparent";
            break;
        }
        case "Trainee": {
            document.querySelector(".estudiante").style.backgroundColor = "transparent";
            document.querySelector(".trainee").style.backgroundColor = "#f2f2f2";
            document.querySelector(".junior").style.backgroundColor = "transparent";
            break;
        }
        case "Junior": {
            document.querySelector(".estudiante").style.backgroundColor = "transparent";
            document.querySelector(".trainee").style.backgroundColor = "transparent";
            document.querySelector(".junior").style.backgroundColor = "#f2f2f2";
            break;
        }
    }
}
