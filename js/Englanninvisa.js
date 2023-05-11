
let points = 0;
let radio1 = document.getElementsByName('q1');
let radio2 = document.getElementsByName('q2');
let radio3 = document.getElementsByName('q3');
let radio4 = document.getElementsByName('q4');
let radio5 = document.getElementsByName('q5');
let message = document.getElementById("message");


function testaus() {
    

   // for(i = 0; i < radio1.length; i++) {
    message = "";
   if(radio1.value === 1) {
        document.getElementById("q1");
        message = "correct";
        
        }
        
        
        points++;
        alert(radio1);
   // }
}

/*
function radiovalue1() {
    let radio1 = document.getElementsByName('q1');
    for(i = 0; i < radio1.length; i++) {
        if(radio1.value === 1)
        document.getElementById("result1").innerHTML = "Correct";
        points++;
        
    }
    
}

function radiovalue2() {
    let radio2 = document.getElementsByName('q2');
    for(i = 0; i < radio2.length; i++) {
        if(radio2[i].value ===1)
        points++;
        
    }
}

function radiovalue3() {
    let radio3 = document.getElementsByName('q3');
    for(i = 0; i < radio3.length; i++) {
        if(radio3[i].value === 1)
        points++;
    }
}

function radiovalue4() {
    let radio4 = document.getElementsByName('q4');
    for(i = 0; i < radio4.length; i++) {
        if(radio4[i].value === 0)
        points++;
    }
}

function radiovalue5() {
    let radio5 = document.getElementsByName('q5');
    for(i = 0; i < radio5.length; i++) {
        if(radio5[i].value === 2)
        points++
    }
}
*/