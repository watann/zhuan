function showFlavors() {
    document.getElementById('flavorModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('flavorModal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('flavorModal')) {
        closeModal();
    }
};