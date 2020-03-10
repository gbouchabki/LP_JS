function calcular(){
    var f1 = 0
    var f2 = 0
    var f3 = 0
    var f4 = 0
    var f5 = 0
    var qtd = 1

    while (qtd <=8){
        idade = Number(prompt("Informa uma idade: " + qtd))
        if (idade <=15){
            f1++
        }
        else if ((idade>=16) && (idade<=30)){
            f2++
        }
        else if ((idade>=31) && (idade<=45)){
            f3++
        }
        else if ((idade>=46) && (idade<=60)){
            f4++
        }
        else {
            f5++
        }
        qtd++
    }
document.getElementById("result").innerHTML = 
"Quantidade na faixa 1: " + f1 + "<br/> Quantidade na faixa 2: " + f2 + 
"<br/> Quantidade na faixa 3: " + f3 + "<br/> Quantidade na faixa 3: " + f3 + 
"<br/> Quantidade na faixa 4: " + f4 + "<br/> Quantidade na faixa 5: " + f5

document.getElementById("percentf1").innerHTML = "Percentual na faixa 1: " + f1/0.08 + "%" 

document.getElementById("percentf5").innerHTML = "Percentual na faixa 5: " + f5/0.08 + "%" 
}
