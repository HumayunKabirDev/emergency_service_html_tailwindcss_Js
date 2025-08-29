getElementById: This selector is define by id name of element and it return single element.
getElementsByClassName: Its define all the matching className element and return HTML collection. 
querySelector: This selector is define first matching element of more className.
querySelectorAll: this is define all the matching element return a nodelist.

{ How do you create and insert a new element into the DOM?
ans: first i create a parent div by id name
now create a element by const newElement=document.createElement(tagname); and 
now creat a inerHTML file like newElement.innertext = `text/div here`
now parentIdName.append(newElement) }

( Event bublling  হলো একটা সেকশনকে grandParent  হিসাবে ধরে এর ভিতরে একটা parent div  নিয়ে  তার ভিতরে দুইটা button  নিবো parent ও child নামে.
এখন এদেরকে addEvene দিয়ে ধরে নিলে child এ click করলে সে alert দিলে সে চলে যাবে তার parent এর কাছে সেখান থেকে সে চলে যাবে তার grandParent এর কাছে 
এর পরে সে আর কোনো element না পেলে বন্ধ হবে। )

( Event Delegation একাধিক child element এর জন্য একটা parent addEvantListener রাখা এবং নতুন কোনো child element যোগ করলেও সে কাজ করবে )

 preventDefault() এটি ব্রাউসার এর বিহেভিয়ার পরিবর্তন করে |
 stopPropagation() এটি কোনো Event এর bublling বন্ধ করে |
