/**
 @method cambiarUnidades
**/

var metroPulgada = 39.37;
var metroPie = 3.37;
var metroYarda = 1.09;
var pulgadaPie = 0.083;
var pulgadaYarda = 0.027;
var pieYarda = 0.33;

let cambiarUnidades = (id, valor) => {
    if(isNaN(valor)){
        alert('Valor invalido');
    }
    else if(id=="metro"){
        document.unidades.unid_pulgada.value = valor*metroPulgada;
        document.unidades.unid_pie.value = valor*metroPie;
        document.unidades.unid_yarda.value = valor*metroYarda;
    }
    else if(id=="pulgada"){
        document.unidades.unid_metro.value = valor*(1/metroPulgada);
        document.unidades.unid_pie.value = valor*pulgadaPie;
        document.unidades.unid_yarda.value = valor*pulgadaYarda;
    }
    else if(id=="pie"){
        document.unidades.unid_metro.value = valor*(1/metroPie);
        document.unidades.unid_pulgada.value = valor*(1/pulgadaPie);
        document.unidades.unid_yarda.value = valor*pieYarda;
    }
    else if(id=="yarda"){
        document.unidades.unid_metro.value = valor*(1/metroYarda);
        document.unidades.unid_pulgada.value = valor*(1/pulgadaYarda);
        document.unidades.unid_pie.value = valor*(1/pieYarda);
    }
}