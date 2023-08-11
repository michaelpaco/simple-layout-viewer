const dropzone = document.querySelector('.dropzone')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const opacitySlider = document.getElementById('opacitySlider')

const DRAG_OVER_EVENT = 'dragover'
const DRAG_LEAVE_EVENT = 'dragleave'
const DROP_EVENT = 'drop'
const INPUT_EVENT = 'input'

const handleDragEvent = (event, type) => {
    event.preventDefault()
    type === DRAG_OVER_EVENT ? dropzone.classList.add(DRAG_OVER_EVENT) : dropzone.classList.remove(DRAG_OVER_EVENT)
}

const readFiles = (files) => {
    if (files.length >= 2) {
        const [file1, file2] = files

        const reader1 = new FileReader()
        const reader2 = new FileReader()

        reader1.onload = () => setImageSrc(image1, reader1.result)
        reader2.onload = () => setImageSrc(image2, reader2.result)

        reader1.readAsDataURL(file1)
        reader2.readAsDataURL(file2)
    }
}

const setImageSrc = (imageContainer, result) => imageContainer.src = result

dropzone.addEventListener(DRAG_OVER_EVENT, e => handleDragEvent(e, DRAG_OVER_EVENT))
dropzone.addEventListener(DRAG_LEAVE_EVENT, e => handleDragEvent(e, DRAG_LEAVE_EVENT))

dropzone.addEventListener(DROP_EVENT, e => {
    handleDragEvent(e, DRAG_LEAVE_EVENT)

    const files = e.dataTransfer.files

    readFiles(files)
})

opacitySlider.addEventListener(INPUT_EVENT, () => {
    image2.style.opacity = opacitySlider.value
})
