function generateButtons() {
    const inputNumber = document.getElementById("inputNumber").value;
    const buttonsDiv = document.getElementById("buttons");
    buttonsDiv.innerHTML = "";

    for (let i = 0; i < inputNumber; i++) {
        const button = document.createElement("button");
        button.className = "button";
        button.addEventListener("click", checkWinner);
        buttonsDiv.appendChild(button);
    }

    const randomIndex = Math.floor(Math.random() * inputNumber);
    const buttons = buttonsDiv.getElementsByTagName("button");
    buttons[randomIndex].classList.add("green");
}

function checkWinner(event) {
    if (event.target.classList.contains("green")) {
        alert("You won!");
    } else {
        alert("You lost!");
    }
}
