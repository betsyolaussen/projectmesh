var logosmall = document.querySelector(".logosmall");
document.body.classList.add('js-loading');
img.addEventListener("load", removeLoadingClass);
function removeLoadingClass() {
  document.body.classList.remove('js-loading');
}