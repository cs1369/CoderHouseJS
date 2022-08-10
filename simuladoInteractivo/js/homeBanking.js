let nombre = prompt("Ingresa tu nombre:");
let dinero = 5000;
let pagarServicio = prompt(`Hola ${nombre} tu saldo es de $${dinero}: \n Deseas Pagar algun servicio? S/N`);
let servicio;
let saldoTotal = dinero;
let seguirPagando = "s";
let serviciosArray=[];
let menuServicios ="";
function addServicio(nombreServicio, saldo){
    this.nombreServicio=nombreServicio;
    this.saldo=saldo;
}

if(pagarServicio == "s" || pagarServicio=="S"){

    while(seguirPagando == "s"){
        menuServicios="";
        if(serviciosArray.length === 0){
            servicio = prompt(`Servicio: \na)Agregar Servicio\nb)cancelar`);
        }
        else{
            for(let i = 0 ; i<serviciosArray.length;i++){
                menuServicios+=`${i})${serviciosArray[i].nombreServicio} $${serviciosArray[i].saldo} \n`;
            }
            servicio = prompt(`Servicio: \n ${menuServicios}a)Agregar Servicio\nb)cancelar`);
        }
        seguirPagando = respuesta(servicio);   
    }

    alert("Gracias por Elegirnos"); 

}else{
    alert("Gracias por Elegirnos");
}

function respuesta(servicio){
    let respuesta = "s";
    let nombreServ;
    let monto;
    if(servicio=="a"){
        nombreServ = prompt("Ingrese el nombre del nuevo servicio:");
        monto = prompt("ingrese el monto del servicio:");
        serviciosArray.push(new addServicio(nombreServ,monto));
    }else if(servicio == "b"){
        respuesta="n";
    }else if(servicio > -1 && servicio < serviciosArray.length){
        menu(parseInt(servicio));
        respuesta = prompt("Desea seguir pagando? S/N");
        respuesta.toLowerCase();
    }else{
        alert("La respuesta que ingresaste es invalida!!");
    }

    
    return respuesta;
}

function menu(servicio){
    debugger
    if(serviciosArray[servicio].saldo > 0){
        if(serviciosArray[servicio].saldo<=dinero){
            dinero -= serviciosArray[servicio].saldo;
            serviciosArray[servicio].saldo=0;
            alert(`Pagaste el servicio te queda $${dinero} en tu cuenta`);
        }else{
            alert("No tienes saldo suficiente para pagar este servicio");
        }
    }else{
        alert("Ya tienes pagado este servicio");
    }
}