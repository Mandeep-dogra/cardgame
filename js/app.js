var result = [];
var arr = [1 , 2, 3, 4, 5, 6, 7, 8, 1 , 2, 3, 4, 5, 6, 7, 8];
var matchedCards = []; 

var firstSelectedId = "";
var firstCardValue= "";
var secondCardId = ""
var secondCardValue = ""

var firstClicked="";
var secClick="";


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

console.log(result);

for(var i=0; i<result.length; i++)
      {
        
   // divstr =  divstr +  '<div class="mystyle" onclick="cardClick(\'' + result[i] + '\', \'' + i + '\')">' + result[i] + '</div>';
    divstr =  divstr +  '<section class="container"><div class="card" onclick="swap(\'' +i+ '\',\'' +result[i]+ '\')" id="'+i+'"><div class="front"><img src="images/card-front.png" ></div><div class="back" id="cardValue">' + result[i] + '</div></div></section>';
      // resultstr = resultstr + listr;
      }

document.getElementById("cardcontainer").innerHTML=divstr;

}


}

function swap(id , value){

//console.log(matchedCards);

if(matchedCards.length>0){
console.log(matchedCards.find(element => element == id));
}
  if(firstSelectedId==""){
    firstSelectedId = id;
    firstCardValue = value;
    cardOperation(id);
  }
  else{
    if(firstSelectedId!=id){
      secondCardValue = value;
      secondCardId = id;
      cardOperation(id);
      setTimeout(function (){
        if(firstCardValue==secondCardValue){
          console.log("match");
          matchedCards.push(firstSelectedId);
          matchedCards.push(secondCardId);
          reset();
        }
        else{
          cardOperation(firstSelectedId);
          cardOperation(secondCardId);
          reset();
            
          // console.log("not match");
        }
      },2000);
      
     
    }
    
  }
  
  
//console.log(id,value);
}

function reset(){
  firstSelectedId = "";
  firstCardValue= "";
  secondCardId = ""
  secondCardValue = ""

}











// function flip(id,value){
//   //  console.log(currentSelectedId);
//     if(currentSelectedId == id){
//      console.log("already inside");
//      alert("debugging");
//     }else{  
      
//         if(firstClicked==""){
//           currentSelectedId = id;
//           firstClicked=currentSelectedId;
//           console.log(currentSelectedId);
//           cardOperation(id);
         
//         }else{
//           secClick=id;
//           alert("here");
//           cardOperation(id);

//           console.log(result[firstClicked], result[secClick]);
//           if(result[firstClicked]==result[secClick]){
//               console.log("Matched");
//           }else{
//             console.log("Not Matched");

//             setTimeout(function(){
//               cardOperation(firstClicked);
//               cardOperation(secClick);
//               firstClicked="";
//               secClick="";
//               currentSelectedId="";
              

              

              


//             },2000)
          


//           }



//         }     
       
//     }
    
    
    
// }

function cardOperation(id){
  if(document.getElementById(id).className=="card"){
      
    var element = document.getElementById(id);
   element.classList.add("flipped");

  }else{

    var element = document.getElementById(id);
   element.classList.remove("flipped");


  }
}