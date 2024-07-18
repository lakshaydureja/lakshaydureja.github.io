function showModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'block';
    
    // Close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}