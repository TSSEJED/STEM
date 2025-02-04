// scripts/app.js
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});