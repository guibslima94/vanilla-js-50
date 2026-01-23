const passwordInput = document.getElementById('password')
const backgroundImg = document.getElementById('background')

passwordInput.addEventListener('input', (e) => {
    const Passwordlength = e.target.value.length
    const blurValue = 20 - Passwordlength * 2
    backgroundImg.style.filter = `blur(${blurValue}px)`

})

