/**
 @method cambiarUnidades
**/
function cambiarUnidades(id, valor){
    if(isNaN(valor)){
        alert('Valor invalido');
    }
    else if(id=="metro"){
        document.unidades.unid_pulgada.value = valor*39.37;
        document.unidades.unid_pie.value = valor*3.37;
        document.unidades.unid_yarda.value = valor*1.09;
    }
    else if(id=="pulgada"){
        document.unidades.unid_metro.value = valor*0.025;
        document.unidades.unid_pie.value = valor*0.083;
        document.unidades.unid_yarda.value = valor*0.027;
    }
    else if(id=="pie"){
        document.unidades.unid_metro.value = valor*0.3;
        document.unidades.unid_pulgada.value = valor*12;
        document.unidades.unid_yarda.value = valor*0.33;
    }
    else if(id=="yarda"){
        document.unidades.unid_metro.value = valor*0.91;
        document.unidades.unid_pulgada.value = valor*36;
        document.unidades.unid_pie.value = valor*3;
    }
}