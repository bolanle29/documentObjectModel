// Write the code neccessary to do the following


// QUESTION 1
// Select the "section" with an with an id of 'container' without using 'query selector'
const contain = document.getElementById("container")
console.log(contain);



// QUESTION 2
// Select the "section" with an with an id of 'container'using 'query selector'
const cont = document.querySelector("#container")
console.log(cont)



// QUESTION 3
// Select a list item  with a class of 'second'
let con = document.querySelectorAll(".second")
console.log(con);



// QUESTION 4
// Select a list item with a class of third, but only the list item inside of the 'ol' tag
let thirdItem = document.querySelector ("ol")
console.log (thirdItem)




// QUESTION 5
// Give the 'section' with an id of 'container' the text "Hello!"
// container.innerHTML = "Hello!"


// QUESTION 6
// Add the class 'main' to the 'div' with a class of 'footer'.
let footMain = document.querySelector(".footer")
footMain.classList.add("main")
console.log(footMain)



// QUESTION 7
// Remove  the class 'main' on the 'div' with a class of 'footer'
let mainF = document.querySelector(".footer")
mainF.classList.remove("main")
console.log(mainF)



// QUESTION 8
// Create a new element 'li'
let list = document.createElement("li")
console.log(list)


// QUESTION 9
// Give the 'li' the text "four" 
let newList = document.createElement("li");
newList.textContent = 'four'
console.log(newList)




// QUESTION 10
// Append the 'li' to the 'ul'element
// list = document.createElement("ul")
// newList.append(list)
//  console.log(list)





// QUESTION 11
// Loop over all of the 'lis'inside the 'ol'tag and give them a backgound color "green"
const bgColor = document.getElementsByTagName("ol")
for(let i=0; i<bgColor.length; i++){
    console.log(bgColor[i])
    bgColor[i].style.backgroundColor = "green"
}



// QUESTION 12
// Remove the div with a class of 'footer'
let foota = document.querySelector(".footer")
footMain.classList.remove("footer")
console.log(foota)





