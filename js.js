let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 3;

loadMoreBtn.onclick = () =>{
   let boxes = [...document.querySelectorAll('.work .box-work .box')];
   for (var i = currentItem; i < currentItem + 4; i++){
      boxes[i].style.display = 'inline-block';
   }
   currentItem += 4;

   if(currentItem >= boxes.length){
      loadMoreBtn.style.display = 'none';
   }
}
