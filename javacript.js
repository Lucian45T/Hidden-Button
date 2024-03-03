let input = document.getElementById('number_buttons');
let numberButtons;
function updateNumber() {
   numberButtons = parseInt(input.value, 10);
}
input.addEventListener('input', updateNumber);
let numberRandomFunction;
let saved = -1;
function  FoundButton() { 
   numberRandomFunction = numberButtons;
   for(let i = 0; i < numberButtons; ++i) { 
      ++saved;
         document.getElementById('numberButton').innerHTML +=`
            <div id = '${saved}'>
                <br>
                  <div class="card"
                        style="text-align:center">
                     <div class ="card-header"></div>
                  <div class="card-body">
               <buton class = "btn btn-success" id ="contor" onclick ='Win_Lose(${saved})'></buton>  
            </div>    
         </div>
      </div>`
     ; 
   }
   numberButtons = 0;
}
function getRandomInt(numberRandomFunction) {
   return Math.floor(Math.random() * numberRandomFunction);
}
let checkRandomReturn = 0;
let checkIfRandomReturn = 0;
let valueRandomReturn = 0;
function  Win_Lose(elementId) { 
   if (checkIfRandomReturn == 0) {
      valueRandomReturn = getRandomInt(numberRandomFunction);
      checkIfRandomReturn = 1;
   }
   if (elementId == valueRandomReturn && checkRandomReturn == 0) {    
      document.getElementById(elementId).innerHTML =`<br><div class="card"
         style="text-align:center">
            <div class ="card-header"></div>
               <div class="card-body">
            <buton class = "btn btn-success" id ="contor" >winner</buton>
         </div>    
      </div>`
   ; 
   checkRandomReturn = 1;
   }
   else {
      document.getElementById(elementId).innerHTML =`<br><div class="card"
         style="text-align:center">
            <div class ="card-header"></div>
               <div class="card-body">
            <buton class = "btn btn-success" id ="contor" >Loser</buton>
         </div>     
      </div>`
   ; 
   }
} 
