window.onload = function set(){
    
    //DOM Elements
    var convert = document.getElementById('convert');
    var radian_input = document.getElementById('a_input');
    var degree_value = document.getElementById('x_value_one');
   
    
    //Variables
    var pi = Math.PI;
    
    convert.addEventListener('click', function(){
        //Local Variables
        var radian_value = radian_input.value;
        
        //Equation: Degrees = Radians*180 / Pi
        var radian_180 = radian_value * 180;
        var radian_division = radian_180 / pi;
        var result = radian_division;
        var degrees = (Math.round(result*100000000))/100000000;
        
        //Append result to box
        degree_value.innerHTML = degrees;
    });
    
    var button = document.getElementById('change');
    button.addEventListener('click', function(){
        window.open("index.html");
        window.close("radians.html");
    });
    
};