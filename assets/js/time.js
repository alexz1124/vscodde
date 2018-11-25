function ShowTimes() {
    var now = new Date();
   
   var hrs = 23-now.getHours();
   
   var mins = 59-now.getMinutes();
   
   var secs = 59-now.getSeconds();
   
   //   ถึงเที่ยงคืนแล้วจะให้ทำอะไรก็เชคไป บลาๆๆ
   
   
   
   var str = '';
   
  
    str += ''+''+mins+':'+secs
    
    document.getElementById("time1").innerHTML = str;
    document.getElementById("time2").innerHTML = str;
    document.getElementById("time3").innerHTML = str;
    document.getElementById("time4").innerHTML = str;
    document.getElementById("time5").innerHTML = str;
    document.getElementById("time6").innerHTML = str;
    document.getElementById("time7").innerHTML = str;
    document.getElementById("time8").innerHTML = str;
    document.getElementById("time9").innerHTML = str;
    document.getElementById("time10").innerHTML = str;
    document.getElementById("time11").innerHTML = str;
    document.getElementById("time12").innerHTML = str;
    document.getElementById("time13").innerHTML = str;
    document.getElementById("time14").innerHTML = str;
    document.getElementById("time16").innerHTML = str;
    document.getElementById("time17").innerHTML = str;
    document.getElementById("time18").innerHTML = str;
    document.getElementById("time19").innerHTML = str;
    document.getElementById("time20").innerHTML = str;
    document.getElementById("time15").innerHTML = str;
    

    
}
    
