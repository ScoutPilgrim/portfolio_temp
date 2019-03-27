$(document).ready(function(){
  let timer;
  $('.projectElem').click(function(){
    var elemHeight = $(this).find('div.dropDown').height();
    var currElem = $(this);
    console.log(elemHeight);
    clearInterval(timer);
    toggleDropDown(currElem, elemHeight);

  });
  function toggleDropDown(className, myHeight){
      console.log("toggleDropDown call success");
      var startTime = Date.now();
      var maxTime = 400;
      var inter = maxTime/100;
      var newHeight = myHeight;
      var maxHeight = 100;
      var minHeight = 0;
      timer = setInterval(function(){
        let timePassed =  Date.now() - startTime;
        if(myHeight === 0){
          if(timePassed > maxTime){
            if(newHeight != maxHeight){
              updateDropDown(className, maxHeight);
            }
            clearInterval(timer);
            return;
          }
          newHeight += maxHeight/(maxTime/inter);
          updateDropDown(className, newHeight);
        }else{
          if(timePassed > maxTime){
            if(newHeight != minHeight){
              updateDropDown(className, minHeight);
            }
            clearInterval(timer);
            return;
          }
          newHeight -= calcToggle(myHeight, maxTime, inter);
          updateDropDown(className, newHeight);
        }
      },inter);
  }
  function updateDropDown(className, newHeight){
    console.log(newHeight+"px");
    $(className).find('div.dropDown').height(newHeight);
  }
  function calcToggle(myHeight, maxTime, inter){
    var myAmt = myHeight/(maxTime/inter);
    return myAmt;
  }
});
