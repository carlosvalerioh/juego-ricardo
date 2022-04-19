let seleccionar  = document.querySelector("select")
let parrafo = document.querySelector("#Result")
let content = document.getElementById("Content")

seleccionar.addEventListener("change", establecerjuego)

function establecerjuego(){
content.className = "hidden"
let eleccion = seleccionar.value

if(eleccion === "Minecraft"){
    crearTarjetaDeResultado(
        eleccion,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9fDE9Z_51yMzvOaaG8bzuPuZ5jCnVAtJ_nQ&usqp=CAU",
        "Esta muy divertido y es de arquitectura"
    );
} else if (eleccion === "Pac - Man"){
    crearTarjetaDeResultado(
        eleccion,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR4MF6doX7fboxI8Nn9-id-GjpqGHeCJ0U9A&usqp=CAU ",
        "Es uno de los juegos clasicos de los 80"
    )
} else if (eleccion === "Contra"){
    crearTarjetaDeResultado(
        eleccion,
        "https://th.bing.com/th/id/R.3ddc5869cdfad2d38bcd776a43481a44?rik=2Gjfb4yj4Lfjig&riu=http%3a%2f%2f1.bp.blogspot.com%2f-01J9vo3xjAQ%2fT00mWbxvRyI%2fAAAAAAAAAOs%2fGWGlKSeH4eo%2fs400%2fContra%2b1987%2bNes%2bFamily%2bGame.png&ehk=lKi5njsm6macAtyfcS5pV%2bP8FZ0CyWdKFjBFKVXeB%2fE%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
        "Es un juego en equipo"
    ) 

} else if (eleccion === "Mario Bros"){
    crearTarjetaDeResultado(
        eleccion,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAmAdUDWvD_Qn0o3g4IvCaScPnlp4cyVPfxg&usqp=CAU",
        "Es el primer juego que los niños jugaron en los 80s, 90s"
    )
} else if (eleccion === ""){
    content.classList.remove("hidden")
    content.classList.add("Content")
    content.classList.add("hidden")
    }
}

function crearTarjetaDeResultado(juego, imagen, description){
    parrafo.classList.remove("hidden")
    parrafo.classList.add("Result")
    LimpiarResultados();
    let card = document.createElement("div")
    card.classList.add("CardResult")
   card.innerHTML =  ` 
                <div class="CardResult-Image">
                    <img
                        src="${imagen}"
                        alt="${juego}"
                    />
                </div>
                <div class="CardResult-Content">
                    <h3>${juego}{</h3>
                    <p>${description}</p>
                </div>
   `
   parrafo.appendChild(card)
}

function LimpiarResultados(){
    parrafo.innerHTML = ""
}