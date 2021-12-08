/*****************************
 *       GREAL JS            *        
 	V1.3.2Alph
 *    BY UZODIMMA JOSEPH     *
 *******************************************
 */
class Greal {
  constructor(){
   this.temps = "";
   if(!('DOMParser' in window)) warn("FrameJS is not supportted");
   
  }
  data(obj){

  }
  buildComponents(t, opt){
     if(typeof t == "undefined" && typeof opt == "undefined") throw "parameters are undefined";
    if(typeof t != "string") throw "first parameter must be a string";
    if(typeof opt != "object") throw "typeof parameter 2 must be object";
      
    else{
      let elmnt = document.querySelector(t);
      let UI = opt.template;
      let UI_amaze = document.getElementsByTagName("div");
      let amaze_hold = [UI_amaze];

      elmnt.style.padding = "8px";
      elmnt.style.height = "100%";
      elmnt.style.maxWidth = "100%";
      elmnt.style.borderRadius = "8px";
      elmnt.style.position = "absolute";
      elmnt.style.top = "0px";
      elmnt.style.right = "0px";
      elmnt.style.left = "0px";
      elmnt.style.bottom = "0px";
   //create childNodes
   if(UI){
     elmnt.innerHTML = opt.template;
     this.temps += opt.template;
 } 
  }  
    
  }


  /*****************
   *Event Handlers  *
   *               *
   * ***************/

  bindEvent(el, t, handle){
    if(!el && !t && !handle)
     throw Error("zero handlers");
    
    if(!el && t && handle){
      
      
    }
    else{
      let handle_el = document.querySelector(el);
      if(el === undefined || t === undefined || handle === undefined) throw Error("undefined expressions in bindEvent parameter");
      if(typeof el != "string" || typeof t != "string") throw Error("typeof params 1 & 2 bindEvent must be strings denoting elements id and type of event handler");
      
      if(handle_el.hasAttribute("onclick") || handle_el.hasAttribute("ondblclick")) throw Error("element with id/class"+" " + el + " "+ "has an assigned event in template, please remove events from templates to avoid errors... use id's to handle event in framejs");
      else{
      let param = document.querySelector(el);
   if(t === "click"){
    param.onclick = handle.event;
   }
   if(t === "dblclick"){
     param.ondblclick = handle.event;
   }
   if(t === "mouseover"){
     param.onmouseover = handle.event;
   }
   if(t === "mouseout"){
    param.onmouseout = handle.event;
  }
  if(t === "focus"){
    param.onfocus = handle.event;
  }
 
    
    }
    
    } 
  }
/***************
****HANDLE ALL**
*EVENTS REGARDLESS****
OF HANDLERS**************
************************* */
events(func){
  if(!func) throw Error("empty params");
  else{
    if(typeof func != "object") throw Error("type of parameter must be string in events method");
    else{
      const els = document.querySelectorAll();
      
    }
  }
}

/********************
 * Frame display  ***
 * *****************/
show(el){
  let el_show = document.querySelector(el);
  el_show.style.display = "block";
}

hide(el){
  let el_hide = document.querySelector(el);
  el_hide.style.display = "none";
}

/**********************************************
 * 
 * ***MOUNTING ELEMENTS *********
 * *****************************/

 mounted(t, opts){
  if(typeof t == "undefined" && typeof opts == "undefined") throw "parameters are undefined";
 if(typeof t != "string") throw "first parameter must be a string";
 if(typeof opts != "object") throw "typeof parameter 2 must be object";
   
 else{
   let elmnt = document.querySelector(t);
   let UI = opts.template;
   
   elmnt.style.padding = "8px";
   elmnt.style.height = "100%";
   elmnt.style.maxWidth = "100%";
   elmnt.style.borderRadius = "8px";
   elmnt.style.position = "absolute";
   elmnt.style.top = "0px";
   elmnt.style.right = "0px";
   elmnt.style.left = "0px";
   elmnt.style.bottom = "0px";
//create childNodes
if(UI){

  elmnt.innerHTML = opts.template;
  this.temps += opts.template;
  
} 
}  

 
}



mountComponent(t, opts){
  if(typeof t == "undefined" && typeof opts == "undefined") throw "parameters are undefined";
 if(typeof t != "string") throw "first parameter must be a string";
 if(typeof opts != "object") throw "typeof parameter 2 must be object";
   
 else{
   let elmnt = document.querySelector(t);
   let UI = opts.template;
   

//create childNodes
if(UI){

  elmnt.insertAdjacentHTML('beforeend', opts.template);
  this.temps += opts.template;
  
} 
}  
 
}

/***********************
 * frameJS router
 */

route(option){
let head = document.head;
const child = document.createElement("script");
child.src = "route/router.js";

if(!head.child){
  console.log(false);
  head.appendChild(child);

return option;
}else{
  return option;
}

}


/*
  bindStyle(el, styles){
    if(!el || !styles) throw Error("bindStyle requires atleast 2 parameters, one or null given");
    if(typeof el != "string") throw Error("undefined target element in params 1 of 'bindStyle'");
    if(typeof styles != "object") throw Error("params 2 of bindStyle must be object");
    else{
      let el_style = document.querySelector(el);
      let checker = el_style.getAttribute("@style");
      console.log(checker);
      if(el_style.hasAttribute("@style") && el_style.getAttribute("@style") in styles){
console.log("present", styles);
        el_style.style.styles[checker] = styles.checker;
}else{
  console.log("absent");
}
    }
  }

*/



}
