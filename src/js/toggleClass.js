function toggleClassOnClick(buttonSelector, wrapperSelector, toggleClass) {
    document.querySelectorAll(buttonSelector).forEach(button => {
        button.addEventListener('click', () => {
            const wrapper = button.closest('.section__content')?.querySelector(wrapperSelector);
            if (!wrapper) return;

            wrapper.classList.toggle(toggleClass);
            button.textContent = wrapper.classList.contains(toggleClass) ? 'Скрыть' : 'Показать все';
        });
    });
}

toggleClassOnClick(
    '.section__list__expand-button',
    '.section__list-wrapper',
    'section__list-wrapper--expanded'
);
