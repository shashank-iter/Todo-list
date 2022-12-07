let noteCount=0;

// Function for adding task---------------------------------------------------------------
      function addtask(){
        let title=document.getElementById("title-input").value;
        let task = document.getElementById("task").value;
        var e = document.getElementById("priority");
        var value = e.value;
var text = e.options[e.selectedIndex].text;
noteCount++;
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;
 
        if(title===""){
          alert("Please add a title for task");
        }
        else{
          
          $('#note-container').append(`<div class="notes" id="note${noteCount}">
    <div class="note-head text-lg font-semibold text-gray-900">${title}</div>
    <div class="note-content">
      <div class="prior">
        <span class="prior-text text-gray-900">Priority:</span><div class="prior-logo  text-md text-white text-semibold" id="priorText${noteCount}">${text}</div>
      </div>
      <div class="date text-gray-900 text-xs">Scheduled on: ${currentDate}</div>

      <p class="note-text">
      ${task}

      </p>
      <div class="comp-btn"><button type="button" class="inline-block px-6 py-2.5 bg-gray-800 text-white font-small text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out" id="comp-task${noteCount}" onclick="remove()">Complete</button></div>
   </div>`)
   prior_color(text);
   let title1=document.getElementById("title-input")
   let task1 = document.getElementById("task")
   title1.value="";
   task1.value="";
   
        }
      }
//  Function adding Tasks-----------------------------------------------------------------

// Function Triggering add Task Tasks------------------------------------------------------
      $(document).ready(function(){
    $('#addtask-btn').click(function(){
        addtask();
    })
    
})
// Function triggering add task end--------------------------------------------------------

 
// Priority Status Color Set Function Start------------------------------------------------
function prior_color(text){
 
  if(text==="Low"){
    $(`#priorText${noteCount}`).addClass("bg-green-400")
  }
  else if(text==="Moderate"){
    $(`#priorText${noteCount}`).addClass("bg-orange-400")
  }
  else{
    
    $(`#priorText${noteCount}`).addClass("bg-rose-400")
  
  }
}
// Priority Status Color Set Function Finished---------------------------------------------

// Function to remove the notes------------------------------------------------------------
function remove(){
  const buttons = document.getElementsByClassName("comp-btn");
  
  const buttonPressed = e => { 
   let a = e.target.id;
   
    let c =$('#'+a).parentsUntil(".note-container");
    c.remove();
    
   
}
toast_remove();
for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
}

}
function toast(){
  Toastify({
    text: "Task Scheduled",
    duration: 4000,

    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: false, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
}
function toast_remove(){
  Toastify({
    text: "Yay!! Task Completed",
    duration: 4000,
   
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: false, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #f12711,#f5af19)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
}
//  Function to remove the notes end-------------------------------------------------------