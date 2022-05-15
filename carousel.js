const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next"); 

(function init(){
     // 하위요소에 html에 이미지 만들기 
    for(let i = 0; i < carousel.children.length; i++){
        let img = document.createElement("img");
        img.src = "./image/" + i + ".png";
 
        carousel.children[i].appendChild(img);
    }

  prevBtn.addEventListener('click', () => {translateContainer(1)});
  nextBtn.addEventListener('click',  () => {translateContainer(-1)});
//   prevBtn.addEventListener('click', translateContainer.bind(this, 1));
//   nextBtn.addEventListener('click', translateContainer.bind(this, -1));

})();

function translateContainer(direction){
  const selectedBtn = (direction === 1) ? 'prev' : 'next';
  carousel.style.transitionDuration = '500ms';
  carousel.style.transform = `rotateY(${direction * 60}deg)`;
  carousel.ontransitionend = () => reorganizeEl(selectedBtn);
}

function reorganizeEl(selectedBtn) {
    carousel.removeAttribute('style');

    if(selectedBtn == 'prev') {
      carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild)
    }
    else {
      carousel.appendChild(carousel.firstElementChild);
    }
  }