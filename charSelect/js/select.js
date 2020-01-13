function selectBtn(data){


   var col1 = document.getElementById("js-col1");
   console.log(col1);


 if (data === 1) {
     col1.innerHTML = "<img src='../assets/ch1.png' width=400px height=700px/>"
 }else if (data === 2)  {
    col1.innerHTML = "<img src='../assets/ch2.png' width=400px height=700px/>"
 } else if (data === 3) { 
    col1.innerHTML = "<img src='../assets/ch3.png' width=400px height=700px/>"
 } else if (data === 4) { 
    col1.innerHTML = "<img src='../assets/ch4.png' width=400px height=700px/>"
 } else if (data === 5) {
     col1.innerHTML = "<img src='../assets/ch5.png' width=400px height=700px/>"
 }
}









