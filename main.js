let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
//ctx.fillRect(0,0,canvas.width,canvas.height)

// constantes
let images = {
    bg:"https://i.pinimg.com/originals/dc/8d/ef/dc8def609c27f9123c4f61a83a3b93bd.jpg",
    mario:"https://pdpcom.scdn1.secure.raxcdn.com/media/catalog/product/optimized/6/a/6ae8f47c065c72cde8a74e0189aa683d/small_mario_perspective_on_copy_1.png",
    lui:"https://i.imgur.com/fptIuQ5.png"
}

//let img = document.createElement('img') // forma 1
let img = new Image() // forma pro
img.src = images.bg

ctx.drawImage(img, 0,0, canvas.width,canvas.height)

class Mario{ // esto es el molde! => objetos (instancias)
    constructor(link, x){
        this.x = x ? x : 90 // default value in case x is not present
        this.y = 171
        this.width = 64
        this.height = 64
        this.img = new Image()
        this.img.src = link
        this.img.onload = this.draw // esperar a que la img cargue
    }
    // fuera del constructor
    draw = () => { // this context
          ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
    }
} // la calse termina aquí

let mario = new Mario(images.mario)
let luigui = new Mario(images.lui, 20)
// coloca a un koopa !! Y a yoshi

// Intervalo
let interval
let frames = 0

interval = setInterval(() => { // TAREA 4.1: porqué no se ve el bg? TAREA4.2: haz que se vea......................
    // primero borramos
    ctx.clearRect(0,0,canvas.width,canvas.height)
    // aumentamos el contador
    frames++
    console.log(frames)
    // vamos a dibujar
    mario.draw()
    luigui.draw()
}, 1000/60);

addEventListener('keydown', e=>{

    switch(e.keyCode){
        case 39:
          mario.x +=10
          break;
        case 37:
          mario.x-=10
          break;
        default:
          break;
    }
}) // TAREA 3: agrega arriba y abajo