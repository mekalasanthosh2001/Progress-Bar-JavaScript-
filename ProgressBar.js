
// background-color chenging using eventlisteners, mouseover, setinterverls, clearinterval, math objects ..MATH.FLOOR() , MATH.RANDAM(), TOSTRING()

// -----------------------------------------------------------------------------------------------------------------------

// COLOR CHENGE-----
let backgroundColor = document.getElementById("bgColors");

function moreColors(){
    const hexCodeColors = Math.floor(Math.random() * 788954656).toString(16);
    backgroundColor.style.backgroundColor="#"+hexCodeColors;
}

moreColors();


backgroundColor.addEventListener("mouseover", function(){

    beforeColorChange = setInterval(moreColors,1000);

});


backgroundColor.addEventListener("mouseout", function(){

    clearInterval(beforeColorChange);
});


// --------------------------------------------------------------------------------------------------------------------------------


// LINE BAR  CIRCLE- PROGRESS BARS ---------------------

function makeOrder() { 
   
    // line bar----




    var element = document.getElementById("bar-text");    
    var width = 1; 
    var identity =( setInterval(scene, 100)) ;

    function scene() { 
      
      if (width < 100) { 
        width++;  
        element.style.width = width + '%';  
        element.innerHTML = width * 1  + '%'; 
      }
      else { 
        clearInterval(identity); 
      } 

    } 


    // circle bar-----

    
    let btnn=document.getElementById("btn");
    let circleBox= document.querySelector('.circle-box');
    let circleTexvalue=document.querySelector('#cicle-text')
    let startcirclevalue=0;
    let endcirclevalue=100;

    let congratsmsg=document.querySelector('#wishses-text-box');

    let okk=document.getElementById('btn2');


    let progressbar= setInterval(()=>{
      startcirclevalue++; 
      circleBox.style.background=`conic-gradient(orange ${startcirclevalue *3.6}deg, white 0deg)`;
      circleTexvalue.textContent=`${startcirclevalue}%`;

    if(startcirclevalue == endcirclevalue ){
        clearInterval(progressbar);

        congratsmsg.style.display="block";
        btnn.style.display="none";
        okk.style.display="block";   
       

let stars=document.querySelector('#imges-star');
stars.style.display="flex";

    }
   
      },100)
}


// CANGRATS WISHES TEXT DISPLAY

function done(){
  document.getElementById('wishses-text-box').style.display='none';
  document.querySelector('.btncl').style.display='none';
  document.querySelector('#btn').style.display='block'; 

  let starssw=document.querySelector('#imges-star');
  starssw.style.display="none";
  
 }
 h()

