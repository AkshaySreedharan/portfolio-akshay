const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
const colors = ['rgba(255,255,255,0.5)','rgba(255,255,255,0.3)','rgba(255,255,255,0.1)'];

class Particle {
  constructor() {
    this.x = Math.random()*canvas.width;
    this.y = Math.random()*canvas.height;
    this.radius = Math.random()*2+1;
    this.speedX = Math.random()*1-0.5;
    this.speedY = Math.random()*1-0.5;
    this.color = colors[Math.floor(Math.random()*colors.length)];
  }
  update() { this.x += this.speedX; this.y += this.speedY; if(this.x<0||this.x>canvas.width) this.speedX*=-1; if(this.y<0||this.y>canvas.height) this.speedY*=-1; }
  draw() { ctx.beginPath(); ctx.arc(this.x,this.y,this.radius,0,Math.PI*2); ctx.fillStyle=this.color; ctx.fill(); }
}

function initParticles(num){
  particlesArray = [];
  for(let i=0;i<num;i++){ particlesArray.push(new Particle()); }
}
function animateParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particlesArray.forEach(p=>{p.update();p.draw();});
  requestAnimationFrame(animateParticles);
}

initParticles(120);
animateParticles();
window.addEventListener('resize',()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight; initParticles(120);});
