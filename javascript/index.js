
const display = document.getElementById("display")
const btn = document.querySelectorAll("button")

let curr = ""
let prev = ""
let operator = ""


btn.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.dataset.value
        if (!isNaN(value)) {
            curr += value
            updateDisplay()

        }
        else if (value === ".") {
            if (curr === "") {
                curr = "0."
            } else if (!curr.includes(".")) {
                curr += "."
            }
            updateDisplay()
        }

        else if (["+", "-", "x", "/"].includes(value)) {
            if (curr === "") return
            if (prev !== "") calculate()
            operator = value
            prev = curr
            curr = ""
            updateDisplay()

        }


        else if (value === "√") {
            if (curr === "") return

            const num = Number(curr)
            if (num < 0) {
                display.value = "Error"
                curr = ""
                prev = ""
                operator = ""
                return
            }
            const result = Math.sqrt(num)
            curr = result.toString()

            updateDisplay()
        }


        else if (value === "x2") {
            if (curr === "") return

            curr = (Number(curr) ** 2).toString()
            updateDisplay()
        }

        else if (value === "x3") {
            if (curr === "") return

            curr = (Number(curr) ** 3).toString()
            updateDisplay()
        }



        else if (value === "1/x") {
            if (curr === "") return

            const num = Number(curr)
            if (num === 0) {
                display.value = "Error"
                curr = ""
                prev = ""
                operator = ""
                return
            }

            curr = (1 / num).toString()
            updateDisplay()
        }

        
        else if (value === "%") {
            if (curr === "") return
            let percent
            if (prev !== "" && (operator === "+" || operator === "-")) {
                percent = Number(prev) * Number(curr) / 100
            } else {
                percent = Number(curr / 100)
            }
            curr = percent.toString()
            updateDisplay()
        }


        else if (value === "=") {
            calculate()
        }

        else if (value === "AC") {
            clearAll()
        }

        else if (value === "DE") {
            curr = curr.slice(0, -1)
            updateDisplay()

        }
    })

})



function calculate() {
    if (prev == "" || curr == "") return
    const a = Number(prev)
    const b = Number(curr)
    let result
    switch (operator) {
        case "+": result = a + b
            break;
        case "-": result = a - b
            break;
        case "x": result = a * b
            break;
        case "/": result = b === 0 ? "Error" : a / b
            break;

    }
    display.value = result
    curr = result.toString()
    prev = ""
    operator = ""
}

function updateDisplay() {
    if (operator && prev !== "") {
        display.value = prev + operator + curr
    } else {
        display.value = curr || "0"
    }
}

function clearAll() {
    curr = ""
    prev = ""
    operator = ""
    display.value = "0"

}


