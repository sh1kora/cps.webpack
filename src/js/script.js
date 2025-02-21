function handleActiveClass(parentSelector, itemSelector, activeClass) {
    const parent = document.querySelector(parentSelector);

    if (!parent) return;

    parent.addEventListener('click', (event) => {
        const target = event.target.closest(itemSelector);
        if (!target) return;

        parent.querySelectorAll(itemSelector).forEach((el) => {
            el.classList.remove(activeClass);
        });

        target.classList.add(activeClass);
    });
}

handleActiveClass('.menu', '.menu__item', 'menu__item--active');
handleActiveClass('.sidebar', '.sidebar__item', 'sidebar__item--highlighted');
handleActiveClass('.sidebar', '.sidebar__lang', 'sidebar__lang--active');

// Управление списками внутри контентных секций
function toggleClassOnClick(buttonSelector, targetSelector, toggleClass) {
    const buttons = document.querySelectorAll(buttonSelector);

    if (!buttons.length) return;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const container = button.closest('.section__content');
            if (!container) return;

            const target = container.querySelector(targetSelector);
            if (!target) return;

            target.classList.toggle(toggleClass);
            button.textContent = target.classList.contains(toggleClass) ? 'Скрыть' : 'Показать все';
        });
    });
}

toggleClassOnClick('.section__list__expand-button', '.section__content', 'section__content--expanded');

