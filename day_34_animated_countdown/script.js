const numberElements = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.getElementById('replay')

// Calculate constants once
const LAST_INDEX = numberElements.length - 1

// Store event handlers to prevent duplicate listeners
const animationHandlers = new Map()

function resetDOM() {
    counter.classList.remove('hide')
    finalMessage.classList.remove('show')

    numberElements.forEach((num) => {
        num.className = ''
    })

    numberElements[0].classList.add('in')
}

function setupAnimationListeners() {
    // Remove existing listeners to prevent duplicates
    numberElements.forEach((num, index) => {
        const existingHandler = animationHandlers.get(num)
        if (existingHandler) {
            num.removeEventListener('animationend', existingHandler)
        }

        const handler = (e) => {
            if (e.animationName === 'goIn' && index !== LAST_INDEX) {
                num.classList.remove('in')
                num.classList.add('out')
            } else if (e.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in')
            } else {
                counter.classList.add('hide')
                finalMessage.classList.add('show')
            }
        }

        animationHandlers.set(num, handler)
        num.addEventListener('animationend', handler)
    })
}

function init() {
    resetDOM()
    setupAnimationListeners()
}

// Initialize on page load
init()

// Replay functionality
replay?.addEventListener('click', () => {
    init()
})