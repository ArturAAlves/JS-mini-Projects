class calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperandTextElement=''
    this.previousOperandTextElement=''
    this.operation = undefined
  }
  delete() {}
  appendNumber(number) {
    this.currentoperand = number
  }
  chooseOperation(operation) {}
  compute() {}
  updateDisplay(){
    this.currentOperandTextElement.innerText = this.currentoperand

  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationsButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[ddata-current-operand]"
);

const calculator = new calculator(previousOperandTextElement, currentOperandTextElement)


numberButtons.forEach(button =>{
  button.addEventListener('click', ()=>{
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})