const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
    accordion.addEventListener('click', function() {
        // بستن تمامی پنل‌های باز
        accordions.forEach((item) => {
            if (item !== this) {
                const panel = item.nextElementSibling;
                panel.classList.remove('active');
                panel.style.maxHeight = null;
            }
        });

        // باز و بسته کردن پنل فعلی
        const panel = this.nextElementSibling;
        if (panel.classList.contains('active')) {
            panel.classList.remove('active');
            panel.style.maxHeight = null;
        } else {
            panel.classList.add('active');
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
});
