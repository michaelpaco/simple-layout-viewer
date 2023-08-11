const dropzone = document.querySelector('.dropzone');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const opacitySlider = document.getElementById('opacitySlider');

dropzone.addEventListener('dragover', e => {
    e.preventDefault();
    dropzone.classList.add('dragover');
});

dropzone.addEventListener('dragleave', e => {
    e.preventDefault();
    dropzone.classList.remove('dragover');
});

dropzone.addEventListener('drop', e => {
    e.preventDefault();
    dropzone.classList.remove('dragover');

    const files = e.dataTransfer.files;

    if (files.length >= 2) {
        const file1 = files[0];
        const file2 = files[1];

        const reader1 = new FileReader();
        const reader2 = new FileReader();

        reader1.onload = () => {
            image1.src = reader1.result;
        };

        reader2.onload = () => {
            image2.src = reader2.result;
        };

        reader1.readAsDataURL(file1);
        reader2.readAsDataURL(file2);
    }
});

opacitySlider.addEventListener('input', () => {
    image2.style.opacity = opacitySlider.value;
});
