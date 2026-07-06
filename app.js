'use strict';
const textEl = document.querySelector('.text');
const inputEl = document.querySelector('input');
let idx = 1;
let text = 'Courage terence keep up';
autoType();
function autoType() {
  textEl.textContent = text.slice(0, idx);
  idx++;
  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(() => {
    autoType();
  }, inputEl.value * 100);
}







