const search = document.querySelector('.search');
const bar = document.querySelector('.search-bar');
const btn = document.querySelector('.search-btn');

function activate() {
  search.classList.toggle('active');
  bar.value = '';
  setTimeout(() => bar.focus(),750)
}

btn.addEventListener('click',activate,false);