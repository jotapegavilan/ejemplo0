// comentarios

/*
comentarios
en multiples
líneas
*/

function show_hide() {
    var x = document.getElementById("imagen");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function suma(n1 , n2){
    var suma = Number.parseFloat(n1) + Number.parseFloat(n2);
    console.log(suma);
    return suma;
}

function resta(n1 , n2){
    var resta = Number.parseFloat(n1) - Number.parseFloat(n2);
    console.log(resta);
    return resta;
}

function multiplicacion(n1 , n2){
    var multi = Number.parseFloat(n1) * Number.parseFloat(n2);
    console.log(multi);
    return multi;
}

function dividir(n1 , n2){
    if( n2 == 0 ){
        alert("El segundo número no puede ser 0 en división.");
        return 0;
    }else{
        var division = Number.parseFloat(n1) / Number.parseFloat(n2);
        console.log(division);
        return division;
    }
    
}