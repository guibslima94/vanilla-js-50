const iconsEl = document.querySelectorAll('li')
const imgsEl = document.querySelectorAll('img')

iconsEl.forEach((icon, idx) => {
    icon.addEventListener('click', () => {
        hideAllIcons()
        hideAllimgs()
        icon.classList.add('active')
        imgsEl[idx].classList.add('show')
    })
})

function hideAllIcons() {
    iconsEl.forEach(icon => icon.classList.remove('active'))
}

function hideAllimgs() {
    imgsEl.forEach(img => img.classList.remove('show'))
}