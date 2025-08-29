const heartBtns = document.getElementsByClassName('heart_btn');

for(let heartBtn of heartBtns){
  heartBtn.addEventListener('click' , function(){
    const heartCount = document.getElementById('heartCount').innerText;
    const currentCount = Number(heartCount) + 1;

   document.getElementById('heartCount').innerText = currentCount;
      
  })
}

// =============================================================

let coins = 100;
const coinElement = document.querySelector(".coinCount")
const coinCount = document.querySelector("coinCount");
const callBtns = document.getElementsByClassName("call_btn");
const cartContainer = document.getElementById("cart_container");

for (let callBtn of callBtns) {
  callBtn.addEventListener("click", function () {
    const callerTitle = callBtn.parentNode.parentNode.children[1].innerText;
    const callerNumber = callBtn.parentNode.parentNode.children[3].innerText;

      if (coins < 20) {
      alert("Call করার জন্য আপনার কাছে অন্তত ২০ কয়েন থাকতে হবে!");
      return;
    }

     coins -= 20;
    coinElement.innerText = coins;

    alert(`${callerTitle} কল হচ্ছে...  নাম্বার: ${callerNumber}`);
   
    const newCart = document.createElement("div");
    const date =new Date().toLocaleTimeString()

    newCart.innerHTML = `
             <div class="bg-gray-100 rounded-xl py-1 px-2 mt-3 flex justify-between items-center">
                    <div class="">
                  <h2 class="font-regular">${callerTitle}</h2>
                  <h3>${callerNumber}</h3>
                </div>
                  <p>${date}</p>
                </div>
        `;

        cartContainer.append(newCart)
  });
}
document.getElementById('clearBtn').addEventListener('click', function(){
    const cartContainer = document.getElementById("cart_container");
    cartContainer.innerHTML = "";
})