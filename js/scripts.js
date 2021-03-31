//BUSINESS LOGIC
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function celsiusConvert(temperature) {
  return (temperature * 9 / 5) + 32;
}

function fahrenheitConvert(temperature) {
  return (temperature - 32) * 5 / 9;
}

//USER INTERFACE LOGIC
$(document).ready(function () {
  $("form#add").submit(function (e) {
    e.preventDefault()
    const addNumber1 = parseInt($("#add1").val())
    const addNumber2 = parseInt($("#add2").val())
    const addResult = add(addNumber1, addNumber2)
    $("#add-output").text(addResult)
  })

  $("form#subtract").submit(function (e) {
    e.preventDefault()
    const subtractNumber1 = parseInt($("#subtract1").val())
    const subtractNumber2 = parseInt($("#subtract2").val())
    const subtractResult = subtract(subtractNumber1, subtractNumber2)
    $("#subtract-output").text(subtractResult)
  })

  $("form#multiply").submit(function (e) {
    e.preventDefault()
    const multiplyNumber1 = parseInt($("#multiply1").val())
    const multiplyNumber2 = parseInt($("#multiply2").val())
    const multiplyResult = multiply(multiplyNumber1, multiplyNumber2)
    $("#multiply-output").text(multiplyResult)
  })

  $("form#divide").submit(function (e) {
    e.preventDefault()
    const divideNumber1 = parseInt($("#divide1").val())
    const divideNumber2 = parseInt($("#divide2").val())
    const divideResult = divide(divideNumber1, divideNumber2)
    $("#divide-output").text(divideResult)
  })
})
