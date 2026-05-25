/* CafeStand FourSeason — メインJS */

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');

  /* スクロール時のヘッダーシャドウ */
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });

  /* ハンバーガーメニュー */
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', siteNav.classList.contains('open'));
    });
  }

  /* 現在ページのナビをアクティブに */
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  /* フェードインアニメーション */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  /* お問い合わせフォーム（クライアントサイドバリデーション） */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('お問い合わせを受け付けました。\n後ほどご連絡いたします。');
      form.reset();
    });
  }
});
