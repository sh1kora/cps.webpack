function sidebarsHandler(openBtnSelector, closeBtnSelector, sidebarSelector, hideClass) {
    const openBtns = document.querySelectorAll(openBtnSelector);
    const closeBtns = document.querySelectorAll(closeBtnSelector);
    const sidebar = document.querySelector(sidebarSelector);
    const overlay = document.querySelector('.overlay');

    if (openBtns.length > 0 && sidebar && overlay) {
        openBtns.forEach(openBtn => {
            openBtn.addEventListener('click', () => {
                closeAllSidebars();
                sidebar.classList.remove(hideClass);
                overlay.classList.add('overlay--active');
            });
        });

        closeBtns.forEach(closeBtn => {
            closeBtn.addEventListener('click', () => {
                sidebar.classList.add(hideClass);
                overlay.classList.remove('overlay--active');
            });
        });

        overlay.addEventListener('click', () => {
            sidebar.classList.add(hideClass);
            overlay.classList.remove('overlay--active');
        });
    }
}

function closeAllSidebars() {
    document.querySelectorAll('.sidebar-menu').forEach(sidebar => {
        sidebar.classList.add('sidebar--hidden');
    });
}

sidebarsHandler('.burger-menu', '.burger-close-sidebar', '.sidebar-menu', 'sidebar--hidden');
sidebarsHandler('.burger-feedback', '.feedback-modal .modal__burger-close', '.feedback-modal', 'modal--closed');
sidebarsHandler('.burger-callback', '.callback-modal .modal__burger-close', '.callback-modal', 'modal--closed');





// function sidebarsHandler(openBtnSelector, closeBtnSelector, sidebarSelector, hideClass) {
//     const openBtn = document.querySelector(openBtnSelector);
//     const closeBtns = document.querySelectorAll(closeBtnSelector); // Используем querySelectorAll
//     const sidebar = document.querySelector(sidebarSelector);
//     const overlay = document.querySelector('.overlay');
//
//     if (openBtn && sidebar && overlay) {
//         openBtn.addEventListener('click', () => {
//             sidebar.classList.remove(hideClass);
//             overlay.classList.add('overlay--active');
//         });
//
//         closeBtns.forEach(closeBtn => {
//             closeBtn.addEventListener('click', () => {
//                 sidebar.classList.add(hideClass);
//                 overlay.classList.remove('overlay--active');
//             });
//         });
//
//         overlay.addEventListener('click', () => {
//             sidebar.classList.add(hideClass);
//             overlay.classList.remove('overlay--active');
//         });
//     }
// }
//
// sidebarsHandler('.burger-menu', '.burger-close-sidebar', '.sidebar', 'sidebar--hidden');
// sidebarsHandler('.burger-feedback', '.feedback-modal .modal__burger-close', '.feedback-modal', 'modal--closed');
// sidebarsHandler('.burger-callback', '.callback-modal .modal__burger-close', '.callback-modal', 'modal--closed');

