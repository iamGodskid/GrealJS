/****************************8
*       GREALJS              *
*         V1.5.0            *
*    BY UZODIMMA JOSEPH     *
*****************************/
var GrealComponent=(function(){
"use strict";
 this.temp = [];
  this.currentHook = [];
   this.hookhold = [];
  
  
  this.buildComponents=(opt)=>{
   if(!opt) throw Error("null template... provide second parameter in buildComponents()");
    if (typeof opt == "undefined") throw Error("parameters are undefined");
   if (typeof opt != "function") throw Error("typeof buildComponents param must be function" +" "+ opt + " "+"given");

    else {
      this.temp.push(opt());
      for(const dom of this.temp){
        document.write(dom);
      }
    }
  }
  /*mounting buildComponents
  ************000000000*/
  
 this.mountComponent=(tt, optt)=>{
  if(typeof tt == "undefined" && typeof optt == "undefined") throw "parameters are undefined";
 if(typeof tt != "string") throw "first parameter must be a string";
 if(typeof optt != "object") throw "typeof parameter 2 must be object";
   
 else{
   let elmn = document.querySelector(tt);
   let UII = optt.template;
   
   elmn.style.padding = "3px";
   //create childNodes
if(UII){

  elmn.innerHTML = optt.template;
  this.temps += optt.template;
  
} 
}  

 
}

  /*****************
  *bindEvent Handler  *
  *               *
  * ***************/

  this.bindEvent=(el, t, handle)=>{
    if (!el && !t && !handle)
      throw Error("zero handlers");

    if (!el && t && handle) {} else {
  const arrevents = [
        "onclick",
        "ondblclick",
        "onmouseout",
        "onmouseover",
        "onfocus",
        "onblur",
        ];
     
     
      let handle_el = document.querySelector(el);
      if (el === undefined || t === undefined || handle === undefined) throw Error("undefined expressions in bindEvent parameter");
      if (typeof el != "string" || typeof t != "string") throw Error("typeof params 1 & 2 bindEvent must be strings denoting elements id and type of event handler");
for(const eventsarr of arrevents){
      if (handle_el.hasAttribute(eventsarr)) throw Error("remove events from templates to avoid errors... use id's/classnames to bind event in grealjs>>>"+" "+eventsarr+" "+"found on element");

      else {
        let param = document.querySelector(el);
        if (t === "click") {
          param.onclick = handle.event;
        }
        if (t === "dblclick") {
          param.ondblclick = handle.event;
        }
        if (t === "mouseover") {
          param.onmouseover = handle.event;
        }
        if (t === "mouseout") {
          param.onmouseout = handle.event;
        }
        if (t === "focus") {
          param.onfocus = handle.event;
        }

      }

    }
  }
}
  this.Events=(funcs)=>{
    if (!funcs) throw "empty Events()";
    else {
      try {
        if (typeof funcs === "undefined" || typeof funcs !== "object") throw Error("typeof Events param must be object"+" "+funcs + " "+"given");
      }catch(err) {
        throw Error("undefined Events() parameter");
      }
      const arr = [
        "onclick",
        "ondblclick",
        "onmouseout",
        "onmouseover",
        "onfocus",
        "onblur"];
      let elements = document.querySelectorAll("*");
      for (const el of elements) {
        for (const els of el.getAttributeNames()) {
          for (const ev of arr) {
            if (els.startsWith("ev"))throw Error("TERM"+" "+ev+" "+"found as attribute in"+" "+el.outerHTML+" "+"...remove to avoid pesistent errors");
          }
          if (els.startsWith("@click") && el.getAttribute("@click") in funcs) {
            el.onclick = funcs[el.getAttribute("@click")];
          }
        
        //dblclick
       if (els.startsWith("@dblclick") && el.getAttribute("@dblclick") in funcs) {
            el.ondblclick = funcs[el.getAttribute("@dblclick")];
          }
   //mouseout  
       if (els.startsWith("@mouseout") && el.getAttribute("@mouseout") in funcs) {
            el.onmouseout = funcs[el.getAttribute("@mouseout")];
          }      
    //mouseover      
          if (els.startsWith("@mouseover") && el.getAttribute("@mouseover") in funcs) {
            el.on = funcs[el.getAttribute("@mouseover")];
          }
          
    //focus
      if (els.startsWith("@focus") && el.getAttribute("@focus") in funcs) {
            el.onfocus = funcs[el.getAttribute("@focus")];
          }     
   //blur
   
  if (els.startsWith("@blur") && el.getAttribute("@blur") in funcs) {
            el.ondblclick = funcs[el.getAttribute("@blur")];
          }
          
          
        }
      }

    }
  }

this.hooks=(optstates)=>{
  if(!optstates) throw "hooks() method expects atleast 1 parameter, null given";
  else{
    if(typeof optstates !== "object") throw Error("hooks requires object parameter..."+" "+"'"+optstates+"'"+" "+"given");
 try{
   if(typeof optstates == "function") throw Error("function is not supportted as a hook in GREALJS");
 }catch(err){
   throw Error("undefined"+" "+"'"+optstates+"'"+" "+"not supportted");
 }
 let findstates = document.body.querySelectorAll("*");
 for(const state of findstates){
 const hooker = state.innerText;
 if(hooker.indexOf("@") !== 0 && hooker.lastIndexOf("@") !== 2) console.warn("invalid hook");
 else{
  
   if(state.innerText.slice(2) in optstates){
   this.hookhold.push(state.innerText.slice(2))
   
   console.log(this.hookhold);
     const $$state = state.innerText = optstates[state.innerText.slice(2)];
  
  
   this.currentHook.push(optstates);
}
}

//checking for hooks as attribute values
 
 for(const attrhook of state.getAttributeNames()){
   if(attrhook.startsWith("g-href") && state.getAttribute("g-href") in optstates){
         state.href= optstates[state.getAttribute("g-href")]; 
   }
  
  //hook for classes
 if(attrhook.startsWith("g-class") && state.getAttribute("g-class") in optstates){
         state.className= optstates[state.getAttribute("g-class")];
     }
  
 //hook for ids
 
 if(attrhook.startsWith("g-id") && state.getAttribute("g-id") in optstates){
         state.id= optstates[state.getAttribute("g-id")]; 
  }
  
 }
 
 
 }
  }
}
/*switching hooks
* for state changing

this.switchHook=(hook)=>{
  if(!hook) throw Error("switchHook cant be empty... null given at switchHook");
  else{
    if(typeof hook !== "object") throw Error("unsupported switcher... hook switcher must be of type object");
    try{
      if(typeof hook == "function") throw Error("function cant be used as hook.. expected object");
    }catch(errs){
      throw Error("undefined hook switcher")
    }
    
  console.log(this.currentHook)
    const elhooked = document.body.querySelectorAll('*');
   
   
   
   
  }
}*/

})
