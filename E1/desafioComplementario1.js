let nota = 0;
let totalNotas = 0;
let promedio = 0;
let cantidadNotas=0;
let respuesta = "si";

while(respuesta == "si"){
    cantidadNotas = parseInt(prompt("Cuantas notas desea ingresar:"));
    if(cantidadNotas>0){
        for(let i= 1; i<=cantidadNotas; i++){
            nota = parseInt(prompt(`Ingrese la nota N°${i}`));
            totalNotas += nota;
        }
        promedio = totalNotas/cantidadNotas;
        console.log(promedio)
        alert(`La nota promedio es de ${promedio}`);
        respuesta = prompt("Desea continuar cargando : si/no");
    }
    else{
        respuesta="no";
    }
        
}