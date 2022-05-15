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
  // 동작이 종료시 
  carousel.ontransitionend = () => reorganizeEl(selectedBtn);
}

// 요소들을 재구성하는 함수
function reorganizeEl(selectedBtn) {
    carousel.removeAttribute('style');

    if(selectedBtn == 'prev') {
      // 참조된 노드 앞에 특정 부모 노드의 자식 노드를 삽입
      // prev 누르면 마지막 요소가 첫번째 요소가 된다. 
      carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);
    }
    else {
      // 첫번째 요소가 자식요소로 된다. 
      carousel.appendChild(carousel.firstElementChild);
    }
  }