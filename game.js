
class enemy {
    constructor(damage,armor,name) {
        this.damage = damage;
        this.armor = armor;
        this.name = name;
    }
}

const Plr2 = new enemy(2,4,"Kage")
const Plr1 = new enemy(2,4,"Naruto")  

//

function playerListRefresh(){

    document.getElementById("Player1").innerText = Plr1.name
    document.getElementById("Player2").innerText = Plr2.name

}
playerListRefresh()


//
var chance = Math.random(0.1,0.9);
var attacker = Math.random(0.1,0.9);
var hit = "";
var lost = "N/A";

document.getElementById('start').addEventListener("click", function(){StartWar();})

function StartWar(){

    life(Plr2,Plr1);

    if(lost == Plr1.name || lost == Plr2.name){

        console.log(lost+" defeat")
        document.getElementById("defeat").innerText = lost + " defeat"

        if(lost == "Danzo1" || lost == "Danzo2"){
            document.getElementById("JD").innerText = "JD"
        }

    }

    else{

        draw()
        drawEnemy()

        if(attacker > 0.5){

            hit = Plr1;

        }
        else{

            hit = Plr2;

        };

        document.getElementById("attacker").innerText = "Attacker: " + hit.name;


        if(chance > 0.5){

            console.log("You attack the enemy")

            if(hit.name == Plr1.name){
                hiting(hit,Plr1)
            }
            else if(hit.name == Plr2.name){
                hiting(hit,Plr2)
            };

        }
        else{
            console.log("You miss the enemy")
        };
    }
    

}

function draw(){

    chance = Math.random(0.1,0.9)

}

function drawEnemy(){

    attacker = Math.random(0.1,0.9)

}

function hiting(how,how2){

    how.armor = how.armor - how2.damage;
    life(how)

}

function life(how,how2){

    if(how.armor < 1){
        lost = how.name
    }
    else if(how2.armor < 1){
        lost = how2.name
    }
    else{
        lost = "N/A"
    }

}

document.getElementById("restart").addEventListener("click", function(){restart()})

function restart(){
    Plr1.armor = 4
    Plr2.armor = 4
    document.getElementById("defeat").innerText = ""
    document.getElementById("JD").innerText = ""
}

//   
//

document.getElementById("p1Danzo").addEventListener("click", function(){p1Danzo()})
document.getElementById("p1Kage").addEventListener("click", function(){p1Kage()})
document.getElementById("p1Naruto").addEventListener("click", function(){p1Naruto()})
document.getElementById("p1Sasuke").addEventListener("click", function(){p1Sasuke()})
document.getElementById("p1Sakura").addEventListener("click", function(){p1Sakura()})
document.getElementById("p1Madara").addEventListener("click", function(){p1Madara()})
document.getElementById("p1Hinata").addEventListener("click", function(){p1Hinata()})
document.getElementById("p1Hashirama").addEventListener("click", function(){p1Hashirama()})

function p1Danzo(){
   Plr1.name = "Danzo1"
   Plr1.damage = 1
   Plr1.armor = 1
   playerListRefresh()
};

function p1Kage(){
    Plr1.name = "Kage1"
    Plr1.damage = 2
    Plr1.armor = 4
    playerListRefresh()
};


function p1Naruto(){
    Plr1.name = "Naruto1"
    Plr1.damage = 2
    Plr1.armor = 4
    playerListRefresh()
};

function p1Sasuke(){
    Plr1.name = "Sasuke1"
    Plr1.damage = 2
    Plr1.armor = 4
    playerListRefresh()
};

function p1Sakura(){
    Plr1.name = "Sakura1"
    Plr1.damage = 4
    Plr1.armor = 3
    playerListRefresh()
};

function p1Madara(){
    Plr1.name = "Madara1"
    Plr1.damage = 4
    Plr1.armor = 4
    playerListRefresh()
};

function p1Hinata(){
    Plr1.name = "Hinata1"
    Plr1.damage = 2
    Plr1.armor = 2
    playerListRefresh()
};

function p1Hashirama(){
    Plr1.name = "Hashirama1"
    Plr1.damage = 4
    Plr1.armor = 4
    playerListRefresh()
};

//

document.getElementById("p2Danzo").addEventListener("click", function(){p2Danzo()})
document.getElementById("p2Kage").addEventListener("click", function(){p2Kage()})
document.getElementById("p2Naruto").addEventListener("click", function(){p2Naruto()})
document.getElementById("p2Sasuke").addEventListener("click", function(){p2Sasuke()})
document.getElementById("p2Sakura").addEventListener("click", function(){p2Sakura()})
document.getElementById("p2Madara").addEventListener("click", function(){p2Madara()})
document.getElementById("p2Hinata").addEventListener("click", function(){p2Hinata()})
document.getElementById("p2Hashirama").addEventListener("click", function(){p2Hashirama()})

function p2Danzo(){
    Plr2.name = "Danzo2"
    Plr2.damage = 1
    Plr2.armor = 1
    playerListRefresh()
};

function p2Kage(){
    Plr2.name = "Kage2"
    Plr2.damage = 2
    Plr2.armor = 4
    playerListRefresh()
};


function p2Naruto(){
    Plr2.name = "Naruto2"
    Plr2.damage = 2
    Plr2.armor = 4
    playerListRefresh()
};

function p2Sasuke(){
    Plr2.name = "Sasuke2"
    Plr2.damage = 2
    Plr2.armor = 4
    playerListRefresh()
};

function p2Sakura(){
    Plr2.name = "Sakura2"
    Plr2.damage = 4
    Plr2.armor = 3
    playerListRefresh()
};

function p2Madara(){
    Plr2.name = "Madara2"
    Plr2.damage = 4
    Plr2.armor = 4
    playerListRefresh()
};

function p2Hinata(){
    Plr2.name = "Hinata2"
    Plr2.damage = 2
    Plr2.armor = 2
    playerListRefresh()
};

function p2Hashirama(){
    Plr2.name = "Hashirama2"
    Plr2.damage = 4
    Plr2.armor = 4
    playerListRefresh()
};