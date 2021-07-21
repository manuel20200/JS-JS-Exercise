

function isDuoDigit(number) {
    let input1 = document.getElementById("input").value;

    let checkInput1 = input1.match(/[a-zA-Z]/g);
    let checkInput = input1.match(/[0-9]/g);
    console.log(checkInput, input1.length, typeof(input1));

    if (input1 == null || checkInput == null) {
        document.getElementById("duodigit").innerHTML = "The number Is INVALID";
        document.getElementById("duodigit1").innerHTML = "--------------";
        return -1;
    }

    if (input1.length !== checkInput.length) {
        document.getElementById("duodigit").innerHTML = "The number Is INVALID";
        document.getElementById("duodigit1").innerHTML = "--------------";
        return -1;
    }

    let array = [];
    let valueFounded = false;
 
    // Get every digit in the input (string)
    for (let x of input1) {
        valueFounded = false;
        // Compare every digit in the input with the result array
        for (let i = 0; i < array.length; i++) {
            if (x === array[i]) {
                valueFounded = true;
            }
        }
        if (!valueFounded) {
            array.push(x);
        }
    }
    //console.log(array);
    if (array.length <= 2) {
        document.getElementById("duodigit").innerHTML = "The number Is a duodigit";
        document.getElementById("duodigit1").innerHTML = array;
    } else {
        document.getElementById("duodigit").innerHTML = "The number Is Not a duodigit";   
        document.getElementById("duodigit1").innerHTML = array;
    }
}

function multiples() {
    multiplesArray = [];

    let temp = document.getElementById("multiple").value;
    console.log("aaa: " + temp + typeof(temp));
    if (temp == null || temp.length == 0) {
        document.getElementById("multipleRes").innerHTML = "Number not Valid";
        document.getElementById("multipleRes1").innerHTML = "---------------";
        return -1;
    }

    if ( (temp.match(/[0-9]/g)).length !== temp.length || parseInt(temp) >= 1000 ) {
        document.getElementById("multipleRes").innerHTML = "Number not Valid";
        document.getElementById("multipleRes1").innerHTML = "---------------";
        return -1;
    }

    let input = parseInt(temp);
    console.log(typeof(input), input);
    // Check multiples of 3
    for (let i = 3; i < input; i += 3) {
        console.log(i);
        multiplesArray.push(i);
    }
    // Check multiples of 5
    for (let i = 5; i < input; i += 5) {
        //console.log(i);
        if (i % 3 !== 0) {
            multiplesArray.push(i);
        }   
    }
    // Check multiples of 7
    for (let i = 7; i < input; i += 7) {
        //console.log(i);
        if (i % 3 !== 0 && i % 5 !== 0) {
            multiplesArray.push(i);
        }   
    }

    if (multiplesArray.length === 0) {
        document.getElementById("multipleRes").innerHTML = "Not Result Found!!";
        document.getElementById("multipleRes1").innerHTML = "-------------";
        return -1;   
    }

    let result = multiplesArray.reduce(suma);

    function suma(total, value, index, array) {
        return total + value;
    }

    document.getElementById("multipleRes").innerHTML = multiplesArray;
    document.getElementById("multipleRes1").innerHTML = result;
    console.log('array: ' + multiplesArray);

}


function creditCardCheck() {
    let input = document.getElementById("cc").value;
    let cardType = '';
    let search = input.match(/[0-9]/g);

    if (search == null || search.length !== input.length) {
        document.getElementById("creditCardRes").innerHTML = "Text a valid number!";
        document.getElementById("creditCardRes1").innerHTML = "-------------";
        return -1;
    }

    if (input.startsWith("34") == true || input.startsWith("37") == true) {
        if (input.length === 15) {
            cardType = 'American Express';
        }
    }

    if (input.startsWith("51") || input.startsWith("52") || input.startsWith("53") || input.startsWith("54") || input.startsWith("55")) {
        if (input.length === 16) {
            cardType = 'MasterCard';
        }
    }

    if (input.startsWith("4")) {
        if (input.length >= 13 && input.length <= 16) {
            cardType = 'VISA';    
        }
    }

    let creditCardNumber = parseInt(input);
    let digit = sumEven = sumOdd = digitG10 = 0;
    let even_odd = false;
    let = suma = 0;

    while (creditCardNumber > 0) {

        digit = creditCardNumber % 10;
        creditCardNumber = parseInt(creditCardNumber / 10);
        
        if (!even_odd) {
            sumEven += digit;
            even_odd = true;
        } else {
            if ((digit * 2) >= 10) {
                digitG10 = (digit * 2) % 10;
                digitG10 += parseInt((digit * 2) / 10);
                sumOdd += digitG10;
                even_odd = false;
            } else {
                sumOdd += (digit * 2);
                even_odd = false;   
            }
        }
    }
    
    suma = sumEven + sumOdd;
    console.log(suma, sumEven, sumOdd);

    if (suma % 10 == 0 && cardType !== '') {
        document.getElementById("creditCardRes").innerHTML = "The number is a valid credit card with brand: " + cardType;
        document.getElementById("creditCardRes1").innerHTML = "Result of Luhn Algoryth is: " + (suma % 10);
    } else {
        document.getElementById("creditCardRes").innerHTML = "The number is not a valid credit card";
        document.getElementById("creditCardRes1").innerHTML = "Sorry :)";   
    }

}



function alerta1() {
  let tempno = Number(document.getElementById("tempc").value);
  let invisible1 = document.getElementById("aviso1");
  if (tempno > 100){
      alert(document.getElementById("tempc").value + '°C' + ' ' + ' it is too hot!');
      document.querySelector("#aviso1").innerHTML = 'It is too hot!!';
      invisible1.className = 'alert alert-danger';
      
  } else if (tempno > 30){
      document.querySelector("#aviso1").innerHTML = 'Es ist heib';
      invisible1.className = 'alert alert-warning';	
      
  } else if (tempno > 0){
      document.querySelector("#aviso1").innerHTML = 'Il fait beau';
      invisible1.className = 'alert alert-success';
      
  } else {
      document.querySelector("#aviso1").innerHTML = 'Fa troppo freddo qui';
      invisible1.className = 'alert alert-primary';
      
  }
}