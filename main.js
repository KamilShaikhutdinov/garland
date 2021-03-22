"use strict";




// огонек 1

document.getElementById("check1").onclick = function ()
 {
    let selind1 = document.getElementById("1").options.selectedIndex;

    let val1= document.getElementById("1").options[selind1].value;

      if (val1 ==1 ) {
      document.getElementsByClassName('circle')[0].style= "background: red";
   } else if (val1 == 2 ) {
      document.getElementsByClassName('circle')[0].style= "background: blue";  
   } else {
      document.getElementsByClassName('circle')[0].style= "background: green";  
   }


   let selind2 = document.getElementById("2").options.selectedIndex;

   let val2= document.getElementById("2").options[selind2].value;

     if (val2 == 1 ) {
     document.getElementsByClassName('circle')[1].style= "background: red";
  } else if (val2 == 2 ) {
     document.getElementsByClassName('circle')[1].style= "background: blue";  
  } else {
     document.getElementsByClassName('circle')[1].style= "background: green";  
  }

  let selind3 = document.getElementById("3").options.selectedIndex;

   let val3= document.getElementById("3").options[selind3].value;

     if (val3 == 1 ) {
     document.getElementsByClassName('circle')[2].style= "background: red";
  } else if (val3 == 2 ) {
     document.getElementsByClassName('circle')[2].style= "background: blue";  
  } else {
     document.getElementsByClassName('circle')[2].style= "background: green";  
  }
   
}

