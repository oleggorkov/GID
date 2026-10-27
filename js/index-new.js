jQuery(document).ready(function() {

  /* tabs profile */

  const tabItems = document.querySelectorAll('.profile-tabs__item');
  const contentItems = document.querySelectorAll('.profile-tab');

  if (tabItems.length > 0 && contentItems.length > 0) {
    function activateTab(targetTab) {
      const tabIndex = Array.from(tabItems).indexOf(targetTab);

      // Удаляем активный класс у всех вкладок
      tabItems.forEach(tab => {
        tab.classList.remove('active');
      });

      // Удаляем активный класс у всех контентных блоков
      contentItems.forEach(content => {
        content.classList.remove('active');
      });

      // Добавляем активный класс нажатой вкладке
      targetTab.classList.add('active');

      // Активируем соответствующий контентный блок
      if (tabIndex >= 0 && contentItems[tabIndex]) {
        contentItems[tabIndex].classList.add('active');
      }

      // Обновляем breadcrumb (если есть)
      const breadElement = document.getElementById('bread');
      if (breadElement) {
        const breadText = targetTab.dataset.breadText ||
          (tabIndex === 0 ? ' Casual Stats' : (tabIndex === 1 ? ' Match History' : ' Competitive Stats'));
        breadElement.textContent = breadText;
      }
    }

    // Добавляем обработчики клика на все вкладки
    tabItems.forEach(tab => {
      tab.addEventListener('click', function() {
        activateTab(this);
      });
    });

    // Активируем первую вкладку, если нет активной
    const activeTab = document.querySelector('.profile-tabs__item.active');
    if (!activeTab && tabItems.length > 0) {
      activateTab(tabItems[0]);
    }
  }

  /* кнопка скролла */

  const historyItems = document.querySelectorAll('.scroll__item');
  const scrollTopBtn = document.querySelector('.scroll-top');
  const historyContainer = document.querySelector('.scroll__inner');
  function checkItemsCount() {
    if (!scrollTopBtn) return;

    if (historyItems.length > 2) {
      scrollTopBtn.style.display = 'flex';

    } else {
      scrollTopBtn.style.display = 'none';
    }
  }
  function scrollToTop() {
    if (historyContainer) {
      historyContainer.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', scrollToTop);
  }

  if (historyContainer) {
    const observer = new MutationObserver(checkItemsCount);

    observer.observe(historyContainer, {
      childList: true,
      subtree: true
    });
  }

  checkItemsCount();

  /* Toast */
  function showToast() {

    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  const cancelButtons = document.querySelectorAll('.profile-sub__cancel');

  cancelButtons.forEach(button => {
    button.addEventListener('click', showToast);
  });

  function showToast() {

    const toast = document.getElementById('apply');
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  const apply = document.querySelectorAll('.custom-color__apply');

  apply.forEach(button => {
    button.addEventListener('click', showToast);
  });

});
