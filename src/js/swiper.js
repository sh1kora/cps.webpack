import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

let swipers = [];

function initSwiper() {
    const swiperContainers = document.querySelectorAll('.swiper');

    swiperContainers.forEach((swiperContainer, index) => {
        const isMobile = window.innerWidth < 768;

        if (isMobile && !swipers[index]) {
            swipers[index] = new Swiper(swiperContainer, {
                speed: 400,
                spaceBetween: 16,
                slidesPerView: 'auto',
                freeMode: true,
                pagination: {
                    el: '.swiper-pagination',
                },
            });
        } else if (!isMobile && swipers[index]) {
            swipers[index].destroy(true, true);
            swipers[index] = undefined;

            // Удаляем пагинацию и кнопки навигации, если они остались
            swiperContainer.querySelector('.swiper-pagination')?.remove();
            swiperContainer.querySelector('.swiper-button-next')?.remove();
            swiperContainer.querySelector('.swiper-button-prev')?.remove();
        }
    });
}

// Вызываем при загрузке и на изменении размеров
window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);




// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css';
//
// let swipers = [];
//
// function initSwiper() {
//     const swiperContainers = document.querySelectorAll('.swiper');
//
//     swiperContainers.forEach((swiperContainer, index) => {
//         const isMobile = window.innerWidth < 768;
//
//         if (isMobile && !swipers[index]) {
//             swipers[index] = new Swiper(swiperContainer, {
//                 speed: 400,
//                 spaceBetween: 16,
//                 slidesPerView: 'auto',
//                 freeMode: true,
//                 pagination: {
//                     el: '.swiper-pagination',
//                     clickable: true,
//                 }
//             });
//         } else if (!isMobile && swipers[index]) {
//             swipers[index].destroy(true, true);
//             swipers[index] = undefined;
//
//             // Удаляем пагинацию и кнопки навигации, если они остались
//             swiperContainer.querySelector('.swiper-pagination')?.remove();
//             swiperContainer.querySelector('.swiper-button-next')?.remove();
//             swiperContainer.querySelector('.swiper-button-prev')?.remove();
//         }
//     });
// }
//
// // Вызываем при загрузке и на изменении размеров
// window.addEventListener('load', initSwiper);
// window.addEventListener('resize', initSwiper);