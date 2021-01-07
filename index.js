
window.onload = (event)=>{
    var defaultValue = 1;
    var multipleValueInput =document.getElementById("multiple")
    multipleValueInput.value=defaultValue;
    var initialTotal = calculateTotal(defaultValue)

    document.getElementById("equal-num").innerHTML = commaIt(initialTotal)

    multipleValueInput.addEventListener("input",function(e){
        var unitValue = parseInt(multipleValueInput.value) 
        if(Number.isInteger(unitValue) && unitValue >0){
           var newTotal = calculateTotal(unitValue)
            document.getElementById("equal-num").innerHTML = commaIt(newTotal)
        }
        else{
            document.getElementById("equal-num").innerHTML = commaIt(initialTotal)

        }
    })


}

function calculateTotal(units){
    baseValue = 2000
    unitsTotals = units * 150;

    total = baseValue + unitsTotals

    return total
}

function commaIt(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}