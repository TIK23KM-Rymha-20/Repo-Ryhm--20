
let points = 0;
let radio1 = document.getElementsByName('q1');
let radio2 = document.getElementsByName('q2');
let radio3 = document.getElementsByName('q3');
let radio4 = document.getElementsByName('q4');
let radio5 = document.getElementsByName('q5');


function testaus() {
    
   if(radio1[1].checked) {
    document.getElementById("message").innerHTML = "correct";
    points++;
    
        

        }  
        if(radio2[0].checked) {
            points++;
         }

         if(radio3[1].checked) {
            points++;
         }
            if(radio4[0].checked) {
                points++;
            } 
                if(radio5[2].checked) {
                    points++;
                } 
                
                if(points === 5) {
                    document.getElementById("message").innerHTML = "<h2>Perfect!</h2>";
                    document.getElementById("total").innerHTML = "<h2>Your total points:"+" "+points+"/"+"5</h2>";
                    
                }
                else {
                    document.getElementById("total").innerHTML = "<h2>Your total points:"+" "+points+"/"+"5</h2>";
                    document.getElementById("message").innerHTML = "<h2>Almost! Here are the right answers:</h2>"
                    +"Q1: Montako jalkaa hämähäkeillä on? = 8"+"<br>"+"Q2: Jos vettä jäädyttää, mitä sitä tulee? = Ice"+"<br>"+"Q3: Vanha hokema = In a while crocodile"+"<br>"+"Q4: Mitä toukista tulee? = Butterflies"+"<br>"+"Q5: Mitä mehiläiset valmistavat = Honey";
                }
                
        }   
       