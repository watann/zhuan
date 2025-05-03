function showFlavors() {
    document.getElementById('flavorModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('flavorModal').style.display = 'none';
}
function showFlavor() {
    document.getElementById('flavorModa').style.display = 'block';
}

function closeModa() {
    document.getElementById('flavorModa').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('flavorModal')) {
        closeModal();
    }
};
