document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const notice = document.getElementById('formNotice');
      notice.style.display = 'block';
      notice.textContent = 'تم استلام طلبك في هذه النسخة التجريبية من الموقع. أضف وسيلة الاتصال الخاصة بك لربط النموذج فعليًا.';
      form.reset();
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});
