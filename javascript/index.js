const display = document.getElementById("display")
const btn = document.querySelectorAll("button")

let expression = ""
let displayExpr = ""

btn.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.dataset.value

        if (!isNaN(value)) {
            expression += value
            displayExpr += value
            updateDisplay()
        }

        else if (value === ".") {
            const parts = displayExpr.split(/[\+\-\*\/\(\)]/)
            if (!parts[parts.length - 1].includes(".")) {
                expression += "."
                displayExpr += "."
                updateDisplay()
            }
        }

        else if (["+", "-", "x", "/"].includes(value)) {
            if (displayExpr === "") {
                if (value === "-") {
                    displayExpr += value;
                    expression += value;
                    updateDisplay();
                }
                return;
            }

            const lastChar = displayExpr[displayExpr.length - 1];
            if (["+", "-", "x", "/"].includes(lastChar)) return;

            displayExpr += value;
            expression += value === "x" ? "*" : value;
            updateDisplay();
        }


        else if (value === "√") {
            if (displayExpr === "") return;
            displayExpr = "√(" + displayExpr + ")";
            expression = "Math.sqrt(" + expression + ")";
            updateDisplay();
        }


        else if (value === "x2") {
            if (displayExpr === "") return;
            displayExpr = "(" + displayExpr + ")²";
            expression = "(" + expression + ")**2";
            updateDisplay();
        }

        else if (value === "x3") {
            if (displayExpr === "") return;
            displayExpr = "(" + displayExpr + ")³";
            expression = "(" + expression + ")**3";
            updateDisplay();
        }

        else if (value === "1/x") {
            if (displayExpr === "") return;
            displayExpr = "1/(" + displayExpr + ")";
            expression = "1/(" + expression + ")";
            updateDisplay();
        }

        else if (value === "%") {
            if (displayExpr === "") return;

            const operators = ["+", "-", "*", "/"];
            let lastOperatorIndex = -1;

            for (let i = displayExpr.length - 1; i >= 0; i--) {
                if (operators.includes(expression[i])) {
                    lastOperatorIndex = i;
                    break;
                }
            }

            if (lastOperatorIndex === -1) {
                displayExpr = "(" + displayExpr + ")/100";
                expression = "(" + expression + ")/100";
            } else {
                let baseExpr = expression.slice(0, lastOperatorIndex);
                let operator = expression[lastOperatorIndex];
                let number = expression.slice(lastOperatorIndex + 1);

                expression = baseExpr + operator + "(" + baseExpr + "*" + number + "/100)";
                displayExpr = displayExpr + "%";
            }

            updateDisplay();
        }

        else if (value === "=") {
            calculate()
        }

        else if (value === "DE") {
            displayExpr = displayExpr.slice(0, -1)
            expression = expression.slice(0, -1)
            updateDisplay()
        }

        else if (value === "AC") {
            clearAll()
        }
    })
})

function calculate() {
    try {
        const result = Function("return " + expression)()
        display.value = result
        displayExpr = result.toString()
        expression = result.toString()
    } catch {
        display.value = "Error"
        displayExpr = ""
        expression = ""
    }
}

function updateDisplay() {
    display.value = displayExpr || "0"
}

function clearAll() {
    expression = ""
    displayExpr = ""
    display.value = "0"
}
