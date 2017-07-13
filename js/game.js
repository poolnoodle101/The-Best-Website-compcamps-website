var items =[
  {name: 'apple', value: 4},
  {name: 'orange', value: 3},
  {name: 'elephant', value: 650}
];

var count= 0;
var first = document.querySelector("#first");
var second = document.querySelector("#second");
var firstDiv = document.querySelector(".first");
var secondDiv = document.querySelector(".second");

first.addEventListener('click', function() {
  if(firstDiv.value < secondDiv.value){
    count++;
  }else{
    console.log("WRONG");
  }
});

second.addEventListener('click', function() {
  if(firstDiv.value > secondDiv.value){
    count++;
  }else{
    console.log("WRONG");
  }
});

function setItems() {
  function rand(first) {
    var i = Math.floor(Math.random()*(item.length));
    if(i == first){
      rand(first);
    } else {
      return i;
    }
  }
var i = rand();
firstDiv.value = items[i].value;
firstDiv.innerText = items[i].name;
var j = rand(i);
secondDiv.value = items[j].value;
secondDiv.innerText = items[j].name;
}

setItems();
