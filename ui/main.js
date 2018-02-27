var button = document.getElementById('counter');
var count=0;
button.onclick = function() {
    count=count+1;
    var span = documnet.getElementById('count');
   return( span.innerHTML = count.toString());
};


    
    