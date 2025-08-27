// Heart Count
// const heartCount = document.getElementById("heartCount");
// const heartBtn = document.querySelectorAll(".fa-heart");

// for (let i = 0; i < heartBtn.length; i++) {
//   heartBtn[i].addEventListener("click", function () {
//     heartCount.innerText = Number(heartCount.innerText) + 1;
//   });
// }
const heartBtns = document.getElementsByClassName('heart_btn');

for(let heartBtn of heartBtns){
  heartBtn.addEventListener('click' , function(){
    const heartCount = document.getElementById('heartCount').innerText;
    const currentCount = Number(heartCount) + 1;

   document.getElementById('heartCount').innerText = currentCount;
      
  })
}