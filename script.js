let string ="";  //string will be that inside input box
let buttons = document.querySelectorAll('.button'); //select all the elements which have class button 
Array.from(buttons).forEach((button)=>{
button.addEventListener('click',(e)=>{
    if(e.target.innerHTML== '='){  //if anyone clicked on '='
         string=eval(string);
         document.querySelector('input').value=string;
    }
   else if(e.target.innerHTML== 'C'){  //if anyone clicked on '='
        string="";
        document.querySelector('input').value=string;
   }
    else{
    console.log(e.target);  //returns where it was clicked(on which element)
    string=string+e.target.innerHTML;
    document.querySelector('input').value=string;
    }
})
})


