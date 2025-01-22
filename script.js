document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".button");
    const display = document.getElementById("display");
    let currentInput = "";
    let operator = "";
    let firstOperand = "";

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = this.dataset.value;
            
            if (value === "C") {
                currentInput = "";
                operator = "";
                firstOperand = "";
                display.textContent = "";
                return;
            }

            if (value === "=") {
                if (operator && firstOperand && currentInput) {
                    display.textContent = eval(firstOperand + operator + currentInput);
                    currentInput = display.textContent;
                    operator = "";
                    firstOperand = "";
                }
                return;
            }

            if (["+", "-", "*", "/"].includes(value)) {
                if (currentInput && !operator) {
                    operator = value;
                    firstOperand = currentInput;
                    currentInput = "";
                }
                return;
            }

            currentInput += value;
            display.textContent = currentInput;
        });
    });
});
