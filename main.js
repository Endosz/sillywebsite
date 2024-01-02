let currentShitters= []
let exShitters = []
currentShitters.push("Hutmuncher","NecroStickIsReal","Ducky_Jar","Lightning_PvP")
exShitters.push("Endosz")
function printCurrentShitters(values){
document.getElementById("current").innerHTML+= `<li> ${values} </li>`
}
currentShitters.forEach(printCurrentShitters)
function printExShitters(values){
document.getElementById("ex").innerHTML+= `<li> ${values} </li>`
}
exShitters.forEach(printExShitters)
