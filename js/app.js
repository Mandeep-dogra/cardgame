var result = [];
var arr = [1 , 2, 3, 4, 5, 6, 7, 8, 1 , 2, 3, 4, 5, 6, 7, 8];
mycardsMain();

function mycardsMain() {



 if(arr.length>0){
    var  index= Math.floor(Math.random()*arr.length);
    result.push(arr[index]);
    arr.splice(index , 1);
    mycardsMain();
 }
else{    
//document.getElementById("oldarray").innerHTML= arr;
//document.getElementById("maincards").innerHTML= result;
var divstr="";

for(var i=0; i<result.length; i++)
      {
        
   // divstr =  divstr +  '<div class="mystyle" onclick="cardClick(\'' + result[i] + '\', \'' + i + '\')">' + result[i] + '</div>';
    divstr =  divstr +  '<section class="container"><div class="card" onclick="flip(\'' +i+ '\')" id="'+i+'"><div class="front"><img src="images/card-front.png" ></div><div class="back" id="cardValue">' + result[i] + '</div></div></section>';
      // resultstr = resultstr + listr;
      }

document.getElementById("cardcontainer").innerHTML=divstr;

}


}


function cardClick(z, y)
{
console.log(z, y);
}


function flip(id){

    if(document.getElementById(id).className=="card"){

      var element = document.getElementById(id);
     element.classList.add("flipped");

    }else{

      var element = document.getElementById(id);
     element.classList.remove("flipped");


    }
    
    
}