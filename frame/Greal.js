/****************************8
*       GREALJS              *
*         V1.5.2           *
*    BY UZODIMMA JOSEPH     *
*****************************/
var GrealComponent=(function(mp){
"use strict";
 this.temp = [];
 this.resources={
  currentHook : [],
   hookhold : [],
elemsw: [],
  optstatehold:{
    keyhook:[]
  } 
 }
 this.styleArr=[];
 //removing script tags from body and appending them to head
 this.parser=()=>{
   let scr = document.body.querySelectorAll("script");
   for(const i of scr){
   let parse = i;
   document.head.appendChild(parse);
i.remove();
    }
 }
 this.parser();
 


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
      for (var i=0;i<elements.length;i++) {
        for (const els of elements[i].getAttributeNames()) {
          for (const ev of arr) {
            if (els.startsWith("ev"))throw Error("TERM"+" "+ev+" "+"found as attribute in"+" "+elements[i].outerHTML+" "+"...remove to avoid pesistent errors");
          }
          if (els.startsWith("@click") && elements[i].getAttribute("@click") in funcs) {
            elements[i].onclick = funcs[elements[i].getAttribute("@click")];
          }
        
        //dblclick
       if (els.startsWith("@dblclick") && elements[i].getAttribute("@dblclick") in funcs) {
            element[i].ondblclick = funcs[elements[i].getAttribute("@dblclick")];
          }
   //mouseout  
       if (els.startsWith("@mouseout") && elements[i].getAttribute("@mouseout") in funcs) {
            elements[i].onmouseout = funcs[elements[i].getAttribute("@mouseout")];
          }      
    //mouseover      
          if (els.startsWith("@mouseover") && elements[i].getAttribute("@mouseover") in funcs) {
            elements[i].onmouseover = funcs[elements[i].getAttribute("@mouseover")];
          }
          
    //focus
      if (els.startsWith("@focus") && elements[i].getAttribute("@focus") in funcs) {
            elements[i].onfocus = funcs[elements[i].getAttribute("@focus")];
          }     
   //blur
   
  if (els.startsWith("@blur") && elements[i].getAttribute("@blur") in funcs) {
            elements[i].ondblclick = funcs[elements[i].getAttribute("@blur")];
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
 let state = document.body.querySelectorAll("*");
 for(var s=0;s<state.length;s++){
   const hooker = state[s].innerText;
const arr = [state[s]];
const hookexp = /{{/;
const hookexp2=/}}/;
try{
if(hooker.search(hookexp)===-1)console.warn("undefined hooker found"+" "+"'"+hooker+"'");
 if(hooker.search(hookexp) !==0)
throw Error("invalid hook found in"+" "+state[s]+" "+"enclose hooks in {{}} for hooks in GREALJS");

}catch(err){
  console.warn(err)
}
if(hooker.search(hookexp2)=== -1) throw Error("incomplete hook enclose found in"+" " + state[s].outerHTML);
const slicer = state[s].innerText.replace(/{{/, "");
const sliced=slicer.replace(/}}/g, "").trim();

   if(sliced  in optstates){
   this.resources.hookhold.push(sliced);
   
   const regexpn = new RegExp(/>/);
   console.log(regexpn.test(state[s].outerHTML));
   console.log(sliced)
   
   
   console.log(this.resources.hookhold);
  const _state = sliced;
   
   const key = Object.keys(optstates);
   for(var ik of key){
    
  ik = {
    hook:optstates[sliced]
  }
   
    this.resources.optstatehold.keyhook.push(ik) //optstates[state.innerText.slice(2)];
    
    state[s].innerText = optstates[_state];
  
  
   this.resources.currentHook.push(optstates);

}}

//checking for hooks as attribute values
 
 for(const attrhook of state[s].getAttributeNames()){
   if(attrhook.startsWith("g-href") && state[s].getAttribute("g-href") in optstates){
         state[s].href= optstates[state[s].getAttribute("g-href")]; 
   }
  
  //hook for classes
 if(attrhook.startsWith("g-class") && state[s].getAttribute("g-class") in optstates){
         state[s].className= optstates[state[s].getAttribute("g-class")];
     }
  
 //hook for ids
 
 if(attrhook.startsWith("g-id") && state[s].getAttribute("g-id") in optstates){
         state[s].id= optstates[state[s].getAttribute("g-id")]; 
  }
  
 }
 
 
 }
  }
}
/*switching hooks
* for state changing
*/
/*
this.switchHook=(hook)=>{
  if(!hook) throw Error("switchHook cant be empty... null given at switchHook");
  else{
    if(typeof hook !== "object") throw Error("unsupported switcher... hook switcher must be of type object");
    try{
      if(typeof hook == "function") throw Error("function cant be used as hook.. expected object");
    }catch(errs){
      throw Error("undefined hook switcher")
    }
    
  
    const elhooked = document.body.querySelectorAll('*');
   
   
   
   
  }
}
*/
/*  
*  styling
*/

this.createStyleSheet=(style)=>{
  if(!style) console.warn("empty styleSheet");
  else{
    if(typeof style !== "function") throw Error("unrecognized styleSheet type, must be function to return" + " " +style + " "+ "given");
    else{
    let regexp = /:/;
    this.styleArr.push(style());
    const styleHold = document.head;
    const sty = document.createElement("style");
    sty.type="text/css";
    sty.media = "all";
   
      for(const stytemp of this.styleArr){
        sty.innerText = stytemp;
      }
     styleHold.append(sty); 
    }
  }
}
});
