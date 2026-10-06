    document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. TOAST NOTIFICATION SETUP ---
    // Automatically create the container for notifications if it doesn't exist
    if (!document.getElementById('toast-container')) {
        const toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        document.body.appendChild(toastContainer);
    }

    // Fire a welcome toast on load just to show it works
    showToast("Welcome to your Pro Alumni Network", "success");

    // --- 2. LIVE SEARCH ENGINE ---
    const searchInput = document.querySelector('input[name="search"]');
    const alumniCards = document.querySelectorAll('.alumni-card');

    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();

            alumniCards.forEach(card => {
                // Grab all the text inside the specific card
                const textContent = card.innerText.toLowerCase();
                
                // If the text matches what is typed, show it. Otherwise, hide it.
                if (textContent.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});

// Global function you can call anytime you need a popup message
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerText = message;

    container.appendChild(toast);

    // Trigger the slide-in animation
    setTimeout(() => { toast.classList.add('show'); }, 10);

    // Remove the toast automatically after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => { toast.remove(); }, 300);
    }, 3000);
}