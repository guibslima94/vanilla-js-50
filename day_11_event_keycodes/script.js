const insert = document.getElementById('insert')

let listaLetras = []
window.addEventListener('keydown', (event) => {

    listaLetras.push(event.key)

    insert.innerHTML = `
    <div class="key">
        ${event.key == " " ? `Space` : event.key}
            <small>event.key</small>
        </div>

        <div class="key">
            ${event.keyCode}
            <small>event.keyCode</small>
        </div>

        <div class="key">
            ${event.code}
            <small>event.code</small>
        </div>

        <div class="key">
            ${listaLetras}
            <small>Contagem Letras</small>
        </div>

    `
})