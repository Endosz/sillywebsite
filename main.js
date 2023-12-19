// let tekst = "To jest epicki tekst w akapicie 1"
// window.setTimeout(function alertuj(){document.getElementById("tekst1").innerHTML=tekst}, 1000)

let obrazeczki = document.querySelectorAll(`img`)
var licz = obrazeczki.length-2

var Id = window.setInterval(
    function(){
        obrazeczki[licz].setAttribute(`src`,"IMG/kot5.jfif")
        licz-=1
        if(licz ==-1){
            window.clearInterval(Id)
        }
    }, 1000
)



let godziny = new Date().getHours();
let minuty = new Date().getMinutes();
let sekundy = new Date().getSeconds();
    function dodajZero(){
    if(sekundy < 10){
        sekundy = "0" + sekundy.toString()
        
    }
    if(minuty < 10){
        minuty = "0" + minuty.toString()
        
    }
    if(godziny < 10){
        godziny = "0" + godziny.toString()
        
    }}
    dodajZero()




function uaktualnijCzas(){
    today2 = new Date
    godziny = new Date().getHours();
    minuty = new Date().getMinutes();
    sekundy = new Date().getSeconds();
    dodajZero()
    zmiennaCzasu=`${godziny}:${minuty}:${sekundy}`
    document.title = zmiennaCzasu
}
let Id2 = window.setInterval(uaktualnijCzas,1000)


// window.setTimeout(function(){document.getElementsByTagName("img")[1].src="IMG/kot1.jfif"}, 10000)
// window.setTimeout(function(){document.getElementsByTagName("img")[1].src="IMG/kot5.jfif"}, 10001)



let iterowana = window.innerWidth
let width = window.innerWidth
let height = window.innerHeight
let numberOfRows = 0
let ktora = 0
function wypiszLiczby(){
    switch(ktora){
        case 0:
            for(let i =0; i<window.innerWidth/16.169;i++){
                document.getElementById("tekst2").innerHTML+="0"
                document.getElementById("tekst2").innerHTML+="1"
            }
            ktora = 1
            break
        case 1:
            for(let i =0; i<window.innerWidth/16.169;i++){
                document.getElementById("tekst2").innerHTML+="1"
                document.getElementById("tekst2").innerHTML+="0"
            }
            ktora = 0
            break
    }
    
    document.getElementById("tekst2").innerHTML+="<br>"
    numberOfRows++
    if(numberOfRows>=window.innerHeight/19){
        window.clearInterval(Id1)
    }

}
function matrix(){
    alert("Uwaga! Twój komputer został zainfekoawny")
    document.body.style.backgroundColor="black"
    document.body.style.color="green"
    document.getElementById("tekst2").innerHTML=""
    Id1 = window.setInterval(wypiszLiczby,1)
    let Id4 = window.setInterval(zmienKolor,14)
}
window.setTimeout("matrix()", 5000);

// let timer = 10
// function odliczaj(){
//     if(timer==0){
//         document.getElementsByTagName("p")[1].innerHTML="START"
//         window.clearInterval(Id3)
//     }
//     else{
//     document.getElementsByTagName("p")[1].innerHTML=timer
//     timer--
//     }
    
// }
// Id3 = window.setInterval(odliczaj,1000)
let kolor = 0
function zmienKolor(){
    document.body.style.color="rgb(244,174,202)"
    switch(kolor){
        case 0:
            document.body.style.backgroundColor="red"
            document.body.style.color="orange"
            kolor++
            break
        case 1:
            document.body.style.backgroundColor="orange"
            document.body.style.color="yellow"
            kolor++
            break
        case 2:
            document.body.style.backgroundColor="yellow"
            document.body.style.color="lime"
            kolor++
            break
        case 3:
            document.body.style.backgroundColor="lime"
            document.body.style.color="cyan"
            kolor++
            break
        case 4:
            document.body.style.backgroundColor="cyan"
            document.body.style.color="blue"
            kolor++
            break
        case 5:
            document.body.style.backgroundColor="blue"
            document.body.style.color="purple"
            kolor++
            break
        case 6:
            document.body.style.color="red"
            document.body.style.backgroundColor="purple"
            kolor=0
            break

    }
}
// function zmienObrazek(){
//     let obrazek = document.querySelector("img")
//     if(obrazek!= null){
//         console.log("Pobrano!")
//     }
//     else{
//         console.log("Nie pobrano poprawnie.")
//     }
//     obrazek.setAttribute(`src`,"IMG/kot5.jfif")
//     obrazek.setAttribute(`width`,"300px")
//     obrazek.setAttribute(`height`,"300px")
// }
// window.setTimeout("zmienObrazek()",3000)
