window.onload = function set(){
    
    //DOM Elements
    var convert = document.getElementById('convert');
    var degrees_input = document.getElementById('a_input');
    var radian_value = document.getElementById('x_value_one');
   
    
    //Variables
    var pi = Math.PI;
    
    convert.addEventListener('click', function(){
        //Local Variables
        var degrees = degrees_input.value;
        
        //Equation: Radians = Degrees*Pi/180
        var degrees_pi = degrees * pi;
        var degrees_pi_division = degrees_pi / 180;
        var result = degrees_pi_division;
        var radians = (Math.round(result*100000000))/100000000;
        
        //Append result to box
        radian_value.innerHTML = radians;
    });
    
    var button = document.getElementById('change');
    button.addEventListener('click', function(){
        location.assign("radians.html");
    });
};
