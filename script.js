function calcular() {
    var valor = parseFloat(document.getElementById("valor").value);
    var juros = parseFloat(document.getElementById("juros").value)/100;
    var anos = parseFloat(document.getElementById("anos").value);
    //Verificador
    if(valor<=0 || juros<=0 || anos<=0){
        window.alert("Valor, juros e anos não podem ser iguais a 0 ou menor que 0")
        window.alert("Tente novamente")
        //Especifico
        if (valor<=0) {
            let el=document.getElementById("valor");
            el.style.borderColor = 'red';
            el.style.borderWidth = '4px';
        }if (juros<=0) {
            let el=document.getElementById("juros");
            el.style.borderColor = 'red';
            el.style.borderWidth = '4px';
        }if (anos<=0) {
            let el=document.getElementById("anos");
            el.style.borderColor = 'red';
            el.style.borderWidth = '4px';
        }
    }else{
        //Voltar ao verde e Borda fina
        let Elvalor=document.getElementById("valor");
        Elvalor.style.borderColor = '#153d3d';
        Elvalor.style.borderWidth = '2px';
        let Eljuros=document.getElementById("juros");
        Eljuros.style.borderColor = '#153d3d';
        Eljuros.style.borderWidth = '2px';
        let Elanos=document.getElementById("anos");
        Elanos.style.borderColor = '#153d3d';
        Elanos.style.borderWidth = '2px';

        //Calculo
        var Element = document.getElementById("valor_final");
        var meses = anos*12.0;
        var valorfinal = valor+(valor*juros*meses);
        Element.innerHTML="R$  "+valorfinal.toFixed(2);
    }
}

