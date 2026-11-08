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

    const tariffsBlock = document.querySelector('#tariffs');
    const modalEl      = document.querySelector('#modal-game');

    if (!tariffsBlock || !modalEl || typeof bootstrap === 'undefined') return;

    const modal = new bootstrap.Modal(modalEl, {
        backdrop: true,
        keyboard: true
    });

    let isOpen = false;

    // Следим за закрытием — чтобы можно было открыть снова
    modalEl.addEventListener('hidden.bs.modal', () => {
        isOpen = false;
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting && !isOpen) {
            isOpen = true;
            modal.show();
        }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(tariffsBlock);
});
