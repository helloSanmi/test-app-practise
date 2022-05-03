var fName = document.getElementById('fName');
var lName = document.getElementById('lName');
var submit = document.getElementById('submitMe');
var display = document.getElementById('display');
var sum;

submit.addEventListener('click', displayInput);

// lName.addEventListener('keypress', enterKey (event));

function displayInput () {
     var fInput = fName.value;
    var lInput = lName.value;
    display.innerHTML = 'Welcome <strong>' +fInput+ ' ' 
                                + lInput+ '</strong>';
    fName.value = "";
    lName.value = "";
}

function enterKey(event){
    if (event.which === 13){
        var fInput = fName.value;
        var lInput = lName.value;
        display.innerHTML = 'Welcome <strong>' +fInput+ ' ' 
                                    + lInput+ '</strong>';
        fName.value = "";
        lName.value = "";
    }
}

function addNumbers (){
     var fInput = parseFloat(fName.value);
    var lInput = parseFloat(lName.value);
    sum = fInput + lInput
    display.innerHTML = 'Sum of two numbers: ' +sum;
    fName.value = "";
    lName.value = "";
}