$(document).ready(function(){

    $("#botao-soma").on("click",function(){

        let num1 = parseFloat($("#num1").val());
        let num2 = parseFloat($("#num2").val());

        if (isNaN(num1) || isNaN(num2)) {
             alert("Por favor, insira números válidos.");
        }else{
            const soma = num1 + num2;
            alert("A soma é : "+soma);
        }
    })
    
    $("#botao-sub").on("click",function(){

        let num1 = parseFloat($("#num1").val());
        let num2 = parseFloat($("#num2").val());

        if (isNaN(num1) || isNaN(num2)) {
             alert("Por favor, insira números válidos.");
        }else{
            const sub = num1 - num2;
            alert("A subtração é : "+sub);
        }
    })

    $("#botao-mult").on("click",function(){

        let num1 = parseFloat($("#num1").val());
        let num2 = parseFloat($("#num2").val());

        if (isNaN(num1) || isNaN(num2)) {
             alert("Por favor, insira números válidos.");
        }else{
            const mult = num1 * num2;
            alert("A multiplicação é : "+ mult);
        }
    })

    $("#botao-div").on("click",function(){

        let num1 = parseFloat($("#num1").val());
        let num2 = parseFloat($("#num2").val());

        if (isNaN(num1) || isNaN(num2)) {
             alert("Por favor, insira números válidos.");
        }else{
            const div = num1 / num2;
            alert("A divisão é : "+div);
        }
    })

})