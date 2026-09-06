//add stuff - insert items into an area

//be able to clear it - delete all or just one
//be able to check it off as finished /put a line through - line through style ? , check off boxes like a form



document.querySelector('#enterTask').addEventListener('click',task)


//document.querySelector('#delete').addEventListener('click',reset)


function task(){
  //get value from input
 let item1 = document.querySelector('#getTask').value
 //create a new p element
 let task1 = document.createElement('p')
 //create checkbox for the element
 let checkbox = document.createElement('input')
 //controls that its a checkbox
 checkbox.type = 'checkbox'

// value from input becomes text in the dom
 task1.textContent = item1
 //where to put the 
 const tasklist = document.querySelector('#placeHere')
//adds the checkbox before the p
 task1.prepend(checkbox)
 // adds the p tag
 tasklist.appendChild(task1)

 //when checkbox is checked the class of checked is applied to the P element

 checkbox.addEventListener('change',()=> {
if (checkbox.checked){
  task1.classList.toggle('checked')
}
 })

}

// function task2(){
// let task2 = document.querySelector('#getTask').value

  // document.querySelector('#placeHere2').innerText = task2
// }



document.querySelector('#delete').addEventListener('click', deleteChecked)
//only removes the checked items 
function deleteChecked(){

let lastTask = document.querySelectorAll('#placeHere .checked')

lastTask.forEach(task=> task.remove())
}



document.querySelector('#deleteAll').addEventListener('click', removeAll)
//removes everything
function removeAll(){
  let allTasks = document.querySelectorAll('p')

  allTasks.forEach(function(p){
    p.remove()
  })
}



