const generateButton = document.getElementById("generate")
const divNumbers = document.getElementById("numbers")

generateButton.onclick = ()=>{
    let numbers = []
    for(let i = 0; i < 6; i++){
        let number = Math.floor(Math.random()*99)+1
        numbers.push(number.toString().padStart(2, "0"))
    }
    divNumbers.textContent = numbers.join("   ")
}

