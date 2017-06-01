

window.jQuery = function(selector){
  var element = document.querySelector(selector)
  
  return {
    on:function(eventType, fn){
      element.addEventListener(eventType, fn); 
    },  
    addClass:function(className){
      element.classList.add(className);
    }, 
    removeClass:function(className){
      element.classList.remove(className);      
    }, 
     toggleClass:function(className){
      element.classList.toggle(className);  
    },  
    text:function(value){
      if (value === undefined) {
        return element.textContext
      }else{
        element.textContext = value;
      }
    },  
    html:function(value){
      if (value === undefined) {
        return element.innerHTML
      }else{
        element.innerHTML = value;
      }
    }  
  }
}

window.$ = window.jQuery

