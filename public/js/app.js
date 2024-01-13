function confirmDeleteLevel(event) {
    event.preventDefault();

    if (confirm('Etes vous sur de vouloir effacer la ressource ?')) {
        console.log('On efface');
        return true;
    }

    return false;
}

document.addEventListener('DOMContentLoaded', () => {
    const deleteLevelBtn = document.querySelector('.js-delete-level');

    deleteLevelBtn.addEventListener('click', confirmDeleteLevel);
});
