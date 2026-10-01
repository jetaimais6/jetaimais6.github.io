/* ============================================================
   theme.js —— 主题切换
   设计要点：
   1. 保存用户的手动选择（localStorage）
   2. 没有手动选择时跟随系统设置
   3. 监听系统主题变化，但仅在用户未手动选择时生效

   注意：防止「主题闪烁」的关键代码已内联在 index.html 的 <head> 里，
   本文件只负责按钮交互与后续同步。
   ============================================================ */

(function () {
  'use strict';

  var STORAGE_KEY = 'theme';
  var root = document.documentElement;
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  /* 读取已保存的选择 */
  function stored() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;   /* 隐私模式等禁用 localStorage 的情况 */
    }
  }

  /* 按「已保存 > 系统」的优先级应用主题 */
  function apply(theme) {
    if (theme === 'light' || theme === 'dark') {
      root.setAttribute('data-theme', theme);
    } else {
      root.removeAttribute('data-theme');   /* 交还给系统媒体查询 */
    }
  }

  /* 系统主题变化时，若用户没手动选过，就跟着变 */
  function onSystemChange() {
    if (!stored()) apply(null);
  }
  if (media.addEventListener) {
    media.addEventListener('change', onSystemChange);
  } else if (media.addListener) {
    media.addListener(onSystemChange);   /* 旧浏览器 */
  }

  function initToggle() {
    var btn = document.querySelector('.theme-toggle');
    if (!btn) return;

    /* 当前「看起来」是哪种主题，决定点击后切到哪个 */
    function current() {
      var saved = stored();
      if (saved === 'light' || saved === 'dark') return saved;
      return media.matches ? 'dark' : 'light';
    }

    function syncLabel() {
      var isDark = current() === 'dark';
      var label = isDark ? '切换到浅色主题' : '切换到深色主题';
      btn.setAttribute('aria-label', label);
      btn.setAttribute('title', label);
      btn.setAttribute('aria-pressed', String(isDark));
    }

    btn.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) { /* 写入失败也让本次会话生效 */ }
      apply(next);
      syncLabel();
    });

    syncLabel();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initToggle);
  } else {
    initToggle();
  }
})();
