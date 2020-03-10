function calcular(){
    var code = Number(document.getElementById("code").value)
    var qtd = Number(document.getElementById("qtd").value)

    var un_price
    var total
    var discount
    var final_price
    
switch (true){
    case code <= 10:
        un_price = 10;
    break;
    case code <= 20:
        un_price = 15;
    break;
    case code <= 30:
        un_price = 20;
    break;
    case code <= 40:
        un_price = 30;
    break;
    default:
        un_price <= 0
}
    total = qtd*un_price

    total <= 250 ? discount = total*0.05 : total <= 500 ? discount = total*0.1 : discount = total*0.15;

    final_price = total - discount
      
    document.getElementById("un_price").innerHTML = "R$ " + un_price.toFixed(2)
    document.getElementById("total").innerHTML = "R$ " + total.toFixed(2)
    document.getElementById("discount").innerHTML = "R$ " + discount.toFixed(2)
    document.getElementById("final_price").innerHTML = "R$ " + final_price.toFixed(2)
}