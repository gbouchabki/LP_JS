function calcular(){
    var peso = Number(document.getElementById("peso").value)
    var idade = Number(document.getElementById("idade").value)

    var risco

    if (idade < 20)
        if (peso < 60) risco=9;
            else if (peso <= 90) risco=8
                else risco=7;
    else if (idade < 50)
        if (peso < 60) risco=9;
            else if (peso <= 90) risco=8
                else risco=7;
    else (idade <= 90)
        if (peso < 60) risco=9;
            else if (peso <= 90) risco=8
                else risco=7;
    document.getElementById("risco").innerHTML = "R$ " + risco
}