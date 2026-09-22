const menuItems = ["Linky", "Čáry máry", "Šachovnice"];

 function linky() {
  stroke(1);
  strokeWeight(5);
  let x = 0;
  let x2 = 800;
  for (let i = 10; i < height; i += 20) {
  line(x, i, x2, i);
  }
} 

function caryMary() {
  stroke(random(255), random(255), random(255));
  strokeWeight(random(5, 25));

  for (let i = 0; i < 10; i++) {
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);
    line(x1, y1, x2, y2);
  }
}

function sachovnice() {
  
}

function setup() {
  createCanvas(800, 800);
}

function drawMenu() {
  // barva vyplne
  fill(150, 100, 200, 100);
  stroke(1);
  strokeWeight(5);
  rect(20, 20, 250, 200, 10);

  // vypis
  fill(0);
  stroke(0);
  strokeWeight(0);
  textSize(15);
  text("MENU - Vyber efekt", 40, 50);
  strokeWeight(1);
  line(40, 60, 170, 60);
  strokeWeight(0);
  for(let i = 0; i < menuItems.length; i++) {
    text(`${i + 1} - ${menuItems[i]}`, 40, 80 + i * 20)
    // prakticky to jde i takhle ↓
    // text(i + 1 + " - " + menuItems[i], 40, 80 + i * 20)
  }
}

function draw() {
  background(220);
  switch (key) {
    case "1":
      linky();
      console.log(key);
      break;
      
    case "2":
      caryMary();
      console.log(key);
      break;

    case "3":
      console.log(key);
      sachovnice();
    
    default: 
      drawMenu();
  
  }
  drawMenu();
}

