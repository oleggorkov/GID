$(document).ready(function() {
    $('.why-tabs').each(function () {
        if (this.dataset.tabsInit) return;
        this.dataset.tabsInit = '1';

        const $tabs = $(this);

        $tabs.on('click', '.why-tabs-item__head', function (e) {
            e.preventDefault();
            e.stopPropagation();

            const $item = $(this).closest('.why-tabs-item');
            const wasActive = $item.hasClass('active');

            $tabs.find('> .why-tabs-item').removeClass('active');
            if (!wasActive) $item.addClass('active');
        });
    });

    $('.header-burger').on('click', function(){
		$('.mobile-menu').toggleClass('show'); 
        $('body').toggleClass('burger-active');
	});

    $('.back').on('click', function () {
        $('body').removeClass('burger-active');
        $('.mobile-menu').removeClass('show');
    });

    const swiper = new Swiper('.swiper-tariff', {
        direction: 'horizontal',
        loop: false,
        spaceBetween: 24,
        slidesPerView: 1.2,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    const swiperCars = new Swiper('.swiper-cars', {
        direction: 'horizontal',
        loop: false,
        spaceBetween: 24,
        pagination: {
            el: '.swiper-pagination-cars',
            clickable: true,
        },
    });

    const swiperTeacher = new Swiper('.swiper-teacher', {
        direction: 'horizontal',
        loop: false,
        spaceBetween: 24,
        pagination: {
            el: '.swiper-pagination-teacher',
            clickable: true,
        },
    });

    (function initLearnCar() {
        const section = document.querySelector('.learn');
        const car     = document.querySelector('.learn-car');
        
        if (!section || !car) return;

        const DIST = 1350;
        let rafId = null;

        function update() {
            rafId = null;
            const r = section.getBoundingClientRect();
            const total = r.height - window.innerHeight;

            if (total <= 0) {
            car.style.transform = 'translateY(0px)';
            return;
            }

            const p = Math.min(1, Math.max(0, -r.top / total));
            car.style.transform = `translateY(${p * DIST}px)`;
        }

        function onScroll() {
            if (rafId === null) rafId = requestAnimationFrame(update);
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        update();

        return function destroy() {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (rafId !== null) cancelAnimationFrame(rafId);
        };
    })();
});

