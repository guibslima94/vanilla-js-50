const addBtn = document.getElementById('add')

const notes = JSON.parse(localStorage.getItem('notes'))

if (notes) {
    notes.forEach(noteData => addNewNote(noteData))
}

addBtn.addEventListener('click', () => addNewNote())

function addNewNote(noteData = {}) {
    // Support both old format (string) and new format (object)
    const text = typeof noteData === 'string' ? noteData : (noteData.text || '')
    const title = typeof noteData === 'string' ? '' : (noteData.title || '')

    const note = document.createElement('div')
    note.classList.add('note')

    note.innerHTML = `
    <div class="tools">
        <input type="text" class="title-input" placeholder="Untitled Note" value="${title}">
        <h2 class="title-display ${title ? '' : 'empty'}">${title || 'Untitled Note'}</h2>
        <div class="tools-buttons">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
    </div>
    <div class="note-content">
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}" placeholder="Start writing your note..."></textarea>
    </div>
    `

    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')
    const titleInput = note.querySelector('.title-input')
    const titleDisplay = note.querySelector('.title-display')

    // Initialize title visibility
    titleInput.classList.add('hidden')
    titleDisplay.classList.remove('hidden')

    textArea.value = text
    main.innerHTML = marked(text)

    deleteBtn.addEventListener('click', () => {
        note.remove()
        updateLS()
    })

    editBtn.addEventListener('click', () => {
        const isEditing = textArea.classList.contains('hidden')
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
        titleInput.classList.toggle('hidden')
        titleDisplay.classList.toggle('hidden')
        note.classList.toggle('editing')

        // Change icon between edit and save
        const icon = editBtn.querySelector('i')
        if (isEditing) {
            icon.classList.remove('fa-edit')
            icon.classList.add('fa-save')
        } else {
            icon.classList.remove('fa-save')
            icon.classList.add('fa-edit')
            // Update title display when exiting edit mode
            const titleValue = titleInput.value.trim()
            titleDisplay.textContent = titleValue || 'Untitled Note'
            titleDisplay.classList.toggle('empty', !titleValue)
        }

        // Focus title input when entering edit mode
        if (!isEditing) {
            titleInput.focus()
            titleInput.select()
        }
    })

    titleInput.addEventListener('input', (e) => {
        updateLS()
    })

    textArea.addEventListener('input', (e) => {
        const { value } = e.target
        main.innerHTML = marked(value)
        updateLS()
    })

    document.body.appendChild(note)
}

function updateLS() {
    const notes = []
    const noteElements = document.querySelectorAll('.note')

    noteElements.forEach(noteEl => {
        const textArea = noteEl.querySelector('textarea')
        const titleInput = noteEl.querySelector('.title-input')
        notes.push({
            title: titleInput.value.trim(),
            text: textArea.value
        })
    })

    localStorage.setItem('notes', JSON.stringify(notes))
}