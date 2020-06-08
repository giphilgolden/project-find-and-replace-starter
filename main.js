// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row")

// When you call the function belwo, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 
function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}


// YOUR CODE GOES HERE

replaceAllButton.addEventListener("click", function() {
    let findInputClick = findInput.value
    console.log(findInputClick)

    let replaceInputClick = replaceInput.value
    console.log(replaceInputClick)

    let rowNumber = 1
    for (let row = 0; row < rowElements.length; row += 1) {
        rowNumber += 1

        let cellNumber = 1
        let cellID = getCellElements(rowElements[row])
        
        for (let cell = 0; cell < cellID.length; cell += 1) {
            cellNumber += 1
            let cellText = (cellID[cell])
            if (cellText.innerText.includes(findInput.value)) {
                console.log("true")
                cellID[cell].innerHTML = cellID[cell].innerHTML.replace(findInputClick, replaceInputClick)
            }
            
        }
    }
})