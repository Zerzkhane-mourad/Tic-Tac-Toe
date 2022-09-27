let t = "X" ;
let rj = true;  
let squ = [];
let modal2 = document.getElementById("modal2");
let modal1 = document.getElementById("modal1");
let resj1 = parseInt(localStorage.getItem("resj1"));
let resj2 = parseInt(localStorage.getItem("resj2"));




function jouer(id){
    let elem = document.getElementById(id);
    if(t == "X" && elem.innerHTML==''){
        elem.innerHTML = "X";
        t="O"     
    
    }else if(t == "O" && elem.innerHTML==''){
        elem.innerHTML = "O";
        t = "X";
    }
    
    win();
}
function winner(a){
    if(squ[a]=="X"){
        localStorage.setItem("resj1", ++resj1);
    }else{
        localStorage.setItem("resj2", ++resj2);
    }
    modal1.style.display = "block";

}

// function 
//libuv nodejs
function win(){    

    for(let i=0 ; i<9 ; i++){
        squ[i] = document.getElementById(i).innerHTML;
    }
    if(squ[0] == squ[1] && squ[1] == squ[2] && squ[2] != ''){
        winner(1);
        rj = false;
    }
    else if(squ[3] == squ[4] && squ[4]==squ[5] && squ[5] != ''){
        winner(4);
        rj = false;
    }
    else if(squ[6] == squ[7] && squ[7]==squ[8] && squ[8] != ''){
        winner(7);
        rj = false;
    }
    else if(squ[0] == squ[3] && squ[3]==squ[6] && squ[6] != ''){
        winner(3);
        rj = false;
    }
    else if(squ[1] == squ[4] && squ[4]==squ[7] && squ[7] != ''){
        winner(7);
        rj = false;
    }
    else if(squ[2] == squ[5] && squ[5]==squ[8] && squ[8] != ''){
        winner(5);
        rj = false;
    }
    else if(squ[0] == squ[4] && squ[4]==squ[8] && squ[8] != ''){
        winner(4);
        rj = false;
    }
    else if(squ[2] == squ[4] && squ[4]==squ[6] && squ[6] != ''){
        winner(6);
        rj = false;
        
    } 
    else if(rj==true && squ[0]!='' && squ[1]!='' && squ[2]!='' && squ[3]!='' && squ[4]!=''&& squ[5]!='' && squ[6]!='' && squ[7]!='' && squ[8]!='' ){
        modal2.style.display = "block";
    }
      
}

const names = JSON.parse(localStorage.getItem("joueurs"));

    if(names != null) {
   document.getElementById("joueur1").style = "display: none"
   document.getElementById("joueur2").style = "display: none"
   document.getElementById("nom1").innerHTML = `${names.joueur1} :  ${resj1}`
   document.getElementById("nom2").innerHTML = `${names.joueur2} :  ${resj2}`
   document.getElementById("xj").innerHTML = `X : <b>${names.joueur1}</b>`
   document.getElementById("yj").innerHTML = `O : <b>${names.joueur2}</b>`
}else{
    preventDefault();
}
function save() {
    const joueurs = {
        joueur1: joueur1.value,
        joueur2: joueur2.value,
    }   
    localStorage.setItem("resj1", 0);
    localStorage.setItem("resj2", 0);
    localStorage.setItem("joueurs",JSON.stringify(joueurs));

}

function cleare() {
    
    localStorage.clear();
    rel();    

}
function rel() {
    
    location.reload();    

}












