var button = document.getElementById('counter');
var counting=0;
button.onclick = function() {
    counting=counting+1;
    var span=documnet.getElementById('count');
span.innerHTML = counting.toString();
};


    
    