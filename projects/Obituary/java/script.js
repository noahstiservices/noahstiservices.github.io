// HTML setup (add this to your HTML file):
// <button id="plus">Upload Image</button>
// <input type="file" id="imageInput" accept="image/*" style="display:none" />

document.getElementById('plus').addEventListener('click', function() {
    document.getElementById('imageInput').click();
});

document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) return;

    // Basic check for image type
    if (!file.type.startsWith('image/')) {
        alert('Please upload a valid image file.');
        return;
    }

    // Simple explicit content filter (client-side, not foolproof)
    const explicitKeywords = ['nude', 'sex', 'porn', 'xxx', 'erotic'];
    const fileName = file.name.toLowerCase();
    if (explicitKeywords.some(word => fileName.includes(word))) {
        alert('Explicit images are not allowed.');
        return;
    }

    // Preview image (optional)
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.style.maxWidth = '200px';
        document.body.appendChild(img);
    };
    reader.readAsDataURL(file);

    // You can add further upload logic here
});

document.body.addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
        event.target.remove();
    }
});
/*
No additional code is needed here. The existing code already allows anyone to upload images by clicking the "Upload Image" button and selecting a file. The image is then previewed and can be removed by clicking on it.
*/
