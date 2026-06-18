document.getElementById('navToggle').addEventListener('click', function () {
    document.getElementById('navLinks').classList.toggle('open');
});

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            document.getElementById('navLinks').classList.remove('open');
        }
    });
});

document.querySelectorAll('.pub-tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
        document.querySelectorAll('.pub-tab').forEach(function (t) { t.classList.remove('active'); });
        document.querySelectorAll('.pub-section').forEach(function (s) { s.classList.add('hidden'); });
        tab.classList.add('active');
        document.getElementById('tab-' + tab.dataset.tab).classList.remove('hidden');
    });
});
