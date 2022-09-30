let dia = document.getElementById("dia");
let mes = document.getElementById("mes");
let año = document.getElementById("anio");

let btn_calcular = document.getElementById("btn_calcular");

let resultado = document.getElementById("resultado");


btn_calcular.addEventListener("click", () => {
  
    if (dia.value == "" || mes.value == "" || año.value == "") {
        alert("Todos los campos son obligatorios");
        return;
    }

    if (año.value <= 0) {
        alert("El año debe ser mayor a 0");
        return;
    }

    if (mes.value < 1 || mes.value > 12) {
        alert("El mes debe estar entre 1 y 12");
        return;
    }

    
    if (dia.value < 1 || dia.value > 31) {
        alert("El día debe estar entre 1 y 31");
        return;
    }

    
    let fecha = new Date(año.value, mes.value - 1, dia.value);

    let dia_semana = fecha.getDay();

    let cadena = ""; 
    switch (dia_semana) {
        case 0:
            cadena = "Domingo";
            break;
        case 1:
            cadena = "Lunes";
            break;
        case 2:
            cadena = "Martes";
            break;
        case 3:
            cadena = "Miércoles";
            break;
        case 4:
            cadena = "Jueves";
            break;
        case 5:
            cadena = "Viernes";
            break;
        case 6:
            cadena = "Sábado";
            break;
    }

    if (dia_semana == 0 || dia_semana == 6) {
        cadena += ", descansa no es un día godín";
    } else {
        cadena += ", es un día godín";
    }

    
    resultado.value = cadena;
});
