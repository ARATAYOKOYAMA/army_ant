// This is a JavaScript file

function waist_front(height, height_px, waist_front_px){
    var waist_front = 0; 
    waist_front = waist_front_px * height / height_px; 
//hp:wp =  h:w 
//wp * h = hp * w 
//w = wp * h / hp 
    return waist_front; 
}; 

function waist_side(height, height_px, waist_side_px){ 
    var waist_side = 0; 
    waist_side = waist_side_px * height / height_px; 
//hp:wp =  h:w 
//wp * h = hp * w 
//w = wp * h / hp 
    return waist_side; 
}; 

function waist(waist_front, waist_side){ 
    var waist = 0; 
    for(var i = 0; i <= Math.PI/2; i += 0.1){ 
        waist = Math.sqrt(Math.pow(waist_front/2, 2) * Math.pow(Math.cos(i), 2) +  
        Math.pow(waist_side/2, 2) * Math.pow(Math.sin(i), 2)); 
    }
    waist = waist * 4; 
    //return waist; 
    alert(waist);
    //document.getElementById("person_waist").value = waist;
};