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
});
