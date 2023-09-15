/*
console.log("hello world");
const button = document.querySelector('button');
button.addEventListener('click', function(event) {
  event.preventDefault();
});
*/
/*
console.log('hello');
function headerScroll() {
  if (window.scrollY > 0) {
    document.getElementById('catTitle').classList.add('titleScrolled');
  }
  else {
    document.getElementById('catTitle').classList.remove('titleScrolled');
  }
}
document.getElementById('catTitle').addEventListener('scroll', headerScroll());
*/
const catHeader = document.getElementById("catHeaderId");
const catTitle = document.getElementById("catTitle");
window.addEventListener("scroll", headerScroll);
/*
function headerScroll() {
  if (window.pageYOffset > 25) {
    console.log(window.pageYOffset);
    catHeader.style.height = '100px';
    catHeader.style.transition = '0.2s';
    catTitle.style.transition = '0.2s';
    catTitle.style.fontSize = '55px';
  } else {
    catHeader.style.height = '200px';
    catTitle.style.fontSize = '120px';

  }
};
*/
/*
function headerScroll() {
  if (window.pageYOffset > 25) {
    console.log(window.pageYOffset);
    catHeader.classList.add('catHeaderScrolled');
    catTitle.classList.add('titleScrolled') ;
  } else {
    catHeader.classList.remove('catHeaderScrolled');
    catTitle.classList.remove('titleScrolled');
  }
};
*/
