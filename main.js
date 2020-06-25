let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
//ctx.fillRect(0,0,canvas.width,canvas.height)

// constantes
let images = {
    bg:"https://i.pinimg.com/originals/dc/8d/ef/dc8def609c27f9123c4f61a83a3b93bd.jpg",
    mario:"https://pdpcom.scdn1.secure.raxcdn.com/media/catalog/product/optimized/6/a/6ae8f47c065c72cde8a74e0189aa683d/small_mario_perspective_on_copy_1.png",

}

//let img = document.createElement('img') // forma 1
let img = new Image() // forma pro
img.src = images.bg

ctx.drawImage(img, 0,0, canvas.width,canvas.height)

class Mario{ // esto es el molde! => objetos (instancias)
    constructor(){
        this.x = 90
        this.y = 171
        this.width = 64
        this.height = 64
        this.img = new Image()
        this.img.src = images.mario
    }
    // fuera del constructor
    draw = () => {
          ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
    }
}

let mario = new Mario()
// queremos que mario se AUTODIBUJE:
mario.draw()
