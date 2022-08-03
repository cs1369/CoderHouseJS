let nombre = prompt("Ingresa tu nombre:");
let saldo = 5000;
let pagarServicio = prompt(`Hola ${nombre} tu saldo es de $${saldo}: \n Deseas Pagar algun servicio? S/N`);
let servicio;
let luz = 3300;
let gas = 1500;
let agua = 2000;
let saldoTotal = saldo;
let seguirPagando = "s";
if(pagarServicio == "s" || pagarServicio=="S"){

    while(seguirPagando == "s"){
        servicio = prompt(`Que servicio deseas pagar: \n 1)Luz $${luz} \n 2)Agua $${agua} \n 3)Gas $${gas} \n 4)Ninguno \n Elija un numero:`)
        if(servicio >0 && servicio<5){
            if(servicio != 4){
                menu(parseInt(servicio));
                seguirPagando = prompt("Desea seguir pagando? S/N");
                seguirPagando.toLowerCase();
                console.log(seguirPagando)
            }else{
                seguirPagando="n";
            }
        }else{
            alert("El numero que ingresaste es invalido!!");
        }
        
    }
    alert("Gracias por Elegirnos");
    
}else{
    alert("Gracias por Elegirnos");
}

function menu(servicio){
    debugger
    switch (servicio) {
        case 1:
            if(saldoTotal>0 && saldoTotal>luz){
                if(luz>0){
                    saldoTotal-=luz;
                    luz= 0;
                    alert(`Pagaste el servicio!!. Tu saldo es de ${saldoTotal}`);
                }else{
                    alert("Ya tienes pagado este servicio.");
                }                        
                
            }else{
                alert(`${nombre} no posees saldo suficiente!!`);
            }
            break;
        case 2:
            if(saldoTotal>0 && saldoTotal>agua){
                if(agua>0){
                    saldoTotal-=agua;
                    agua= 0;
                    alert(`Pagaste el servicio!!. Tu saldo es de ${saldoTotal}`);
                }else{
                    alert("Ya tienes pagado este servicio.");
                }                        
                
            }else{
                alert(`${nombre} no posees saldo suficiente!!`);
            }
            break;
        case 3:
            if(saldoTotal>0 && saldoTotal>gas){
                if(gas>0){
                    saldoTotal-=gas;
                    gas= 0;
                    alert(`Pagaste el servicio!!. Tu saldo es de ${saldoTotal}`);
                }else{
                    alert("Ya tienes pagado este servicio.");
                }                        
                
            }else{
                alert(`${nombre} no posees saldo suficiente!!`);
            }
            break;
        default:
            break;
    }
}