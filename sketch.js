//canvas variables
let canvasW = 625;
let canvasH = 600;
//damage values
let neutralDamage = 10;
let superEffectiveDamage = neutralDamage * 2;
let resistedDamage = neutralDamage / 2;
//health values
let p1Health = 250;
let p2Health = 250;
//types
let typeColors = ["red", "blue", "green"]
//power points
let superEffectivePp = 100;
let neutralPp = 100;
let resistedPp = 100;
//moves
let moves = [
    ["Flamethrower - C", "Fire Blast - I"],
    ["Water Pulse  - X", "Bubblebeam - O"],
    ["Magical Leaf - Z", "Razor Leaf -  P"]
];
let flamethrower = new Move(moves[0][0], neutralDamage, neutralPp, 67);
let waterPulse = new Move(moves[1][0], superEffectiveDamage, superEffectivePp, 88);
let magicalLeaf = new Move(moves[2][0], resistedDamage, resistedPp, 90);
let fireBlast = new Move(moves[0][1], superEffectiveDamage, superEffectivePp, 73);
let bubblebeam = new Move(moves[1][1], resistedDamage, resistedPp, 79);
let razorLeaf = new Move(moves[2][1], neutralDamage, neutralPp, 80);
let moveObjects = [[flamethrower, waterPulse, magicalLeaf], [fireBlast, bubblebeam, razorLeaf]];
//turns
let turns = Math.floor(Math.random()*2);
let img;
let img1;
function preload(){
img = loadImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d83m36e-3b58ca48-fe8a-456e-9ffc-a5a84eca6613.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjI4MjFhLTE0MDYtNGExZC05YjA0LTY2NjhmMjc4ZTk0NFwvZDgzbTM2ZS0zYjU4Y2E0OC1mZThhLTQ1NmUtOWZmYy1hNWE4NGVjYTY2MTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jOpoPaOypPatcb4k7flznTP9YiwUEX2q2BKoeWUPU74")
img1 = loadImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cdf4aad9-8288-49e9-b966-0ed0471c6f1a/da84swr-c16eaa42-df84-41be-9941-95e725f3a012.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NkZjRhYWQ5LTgyODgtNDllOS1iOTY2LTBlZDA0NzFjNmYxYVwvZGE4NHN3ci1jMTZlYWE0Mi1kZjg0LTQxYmUtOTk0MS05NWU3MjVmM2EwMTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7iBRKA5WM-gbQk5-_HPVnR62X0XgdLPR6fei0JCR3a8")
img2 = loadImage("http://66.media.tumblr.com/2d55d887558d2b0edb0784f64e6b0c6c/tumblr_mhd98a5fT51s2ugo7o8_250.gif")
}
function setup() {
    createCanvas(canvasW, canvasH);
}
function draw() {
    //bg
    background(0, 150, 255);
    image(img,0,0,canvasW,canvasH)
    //mons
    image(img1,50,200,300,300);
    image(img2,350, 175, 100, 100)
    //health
    fill(0, 225, 0);
    noStroke();
    rect(0, 550, p1Health, 50);
    rect(375, 0, p2Health, 50);
    //moves
    for (let i = 0; i < moves.length; i++) {
        fill(typeColors[i]);
        rect(0, 515 - 35 * i, moveObjects[0][i].pp, 35);
        textAlign(LEFT);
        fill("yellow");
        textSize(12);
        text(moves[i][0], 5, 535 - 35 * i)
    }
    for (let j = 0; j < moves.length; j++) {
        fill(typeColors[j]);
        rect(525, 50 + 35 * j, moveObjects[1][j].pp, 35);
        textAlign(CENTER);
        fill("yellow");
        textSize(12);
        text(moves[j][1], 575, 70 + 35 * j)
    }
    //turns
    if(turns == 0){
        if(p1Health > 0 && p2Health > 0){
        textSize(16);
        fill(255);
        text("What will Bulbasaur do?", 200, 500);
        }
    }
    else if(turns == 1){
        if(p1Health > 0 && p2Health > 0){
        textSize(16);
        fill(255);
        text("What will Charmander do?", 400, 100);
        }
    }
    //win message
    if (p1Health <= 0) {
        p1Health = 0;
        fill("red");
        textSize(32);
        textAlign(CENTER);
        text("Player 2 wins!", 300, 300)
    }
    else if (p2Health <= 0) {
        p2Health = 0;
        fill(0, 255, 0);
        textSize(32);
        textAlign(CENTER);
        text("Player 1 wins!", 300, 300);
    }
}
function keyPressed() {
    //moves to keys
    let critRatio = random(0, 100);
    
    //p1
    if (keyCode == flamethrower.key || keyCode == waterPulse.key || keyCode == magicalLeaf.key) {
        if (turns == 0) {
            
            if (keyCode == flamethrower.key) {
                if (flamethrower.pp > 0) {
                    turns = 1;
                    if (p1Health > 0 && p2Health > 0) {
                        flamethrower.pp -= 10;
                        if (critRatio < 6.25) {
                            flamethrower.damage *= 1.5;
                        }
                        p2Health -= flamethrower.damage;
                    }
                }
            }
            else if (keyCode == waterPulse.key) {
                if (waterPulse.pp > 0) {
                    turns = 1;
                    if (p2Health > 0 && p1Health > 0) {
                        waterPulse.pp -= 20;
                        if (critRatio < 6.25) {
                            waterPulse.damage *= 1.5;
                        }
                        p2Health -= waterPulse.damage;
                    }
                }
            }
            else if (keyCode == magicalLeaf.key) {
                if (magicalLeaf.pp > 0) {
                    turns = 1;
                    if (p1Health > 0 && p2Health > 0) {
                        if (critRatio < 6.25) {
                            magicalLeaf.damage *= 1.5;
                        }
                        magicalLeaf.pp -= 5;
                        p2Health -= magicalLeaf.damage;
                    }
                }
            }
        }
    }
    //p2
    else if (keyCode == fireBlast.key || keyCode == bubblebeam.key || keyCode == razorLeaf.key) {
        if (turns == 1) {
            
            if (keyCode == fireBlast.key) {
                if (fireBlast.pp > 0) {
                    turns = 0;
                    if (p1Health > 0 && p2Health > 0) {
                        fireBlast.pp -= 20;
                        if (critRatio < 6.25) {
                            fireBlast.damage *= 1.5;
                        }
                        p1Health -= fireBlast.damage;
                    }
                }
            }
            else if (keyCode == bubblebeam.key) {
                if (bubblebeam.pp > 0) {
                    turns = 0;
                    if (p1Health > 0 && p2Health > 0) {
                        bubblebeam.pp -= 5;
                        if (critRatio < 6.25) {
                            bubblebeam.damage *= 1.5;
                        }
                        p1Health -= bubblebeam.damage;
                    }
                }
            }
            else if (keyCode == razorLeaf.key) {
                if (razorLeaf.pp > 0) {
                    turns = 0;
                    if (p1Health > 0 && p2Health > 0) {
                        razorLeaf.pp -= 10;
                        if (critRatio < 6.25) {
                            razorLeaf.damage *= 1.5;
                        }
                        p1Health -= razorLeaf.damage;
                    }
                }
            }
        }
    }
}