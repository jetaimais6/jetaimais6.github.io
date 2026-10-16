/* ============================================================
   lightbox.js —— 图集点击放大
   用原生 <dialog> 实现：自带焦点管理与 Esc 关闭，无需第三方库。
   ============================================================ */
(function () {
  'use strict';

  var dlg = document.getElementById('lightbox');
  if (!dlg) return;
  var img = document.getElementById('lbImg');
  var lastFocus = null;

  document.querySelectorAll('.ph-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      lastFocus = btn;
      img.src = btn.getAttribute('data-full') || '';
      img.alt = btn.getAttribute('data-alt') || '';
      if (typeof dlg.showModal === 'function') {
        dlg.showModal();
      } else {
        // 极旧浏览器：退化为直接打开大图
        window.open(img.src, '_blank', 'noopener');
      }
    });
  });

  function close() {
    if (dlg.open) dlg.close();
    img.src = '';
    if (lastFocus) lastFocus.focus();
  }

  dlg.querySelector('.lb-close').addEventListener('click', close);
  // 点击图片以外的区域也关闭
  dlg.addEventListener('click', function (e) {
    if (e.target === dlg) close();
  });
  dlg.addEventListener('close', function () {
    img.src = '';
    if (lastFocus) lastFocus.focus();
  });
})();
