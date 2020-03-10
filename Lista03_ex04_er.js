function calcular(){
    var number
    var contador = 0
    var saida

    number = Number(prompt("Informe um número: "))  

    while(contador <=10){
        
        saida = saida + "<br/>" + number + "x" + contador + "=" + number*contador

    contador++
    }
document.getElementById("saida").innerHTML = saida

}
