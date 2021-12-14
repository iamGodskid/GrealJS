****************************8
*       GREALJS              *
*         V1.5.0            *
*    BY UZODIMMA JOSEPH     *
*****************************/
class GrealComponents {
  constructor() {
    this.temps = "";
  }
  buildComponents(t, opt) {
   if(!t || !opt) throw Error("cant mount template on void, specify parent node to mount template... either first/second parameter missing");
   if(!opt) throw Error("null template... provide second parameter in buildComponents()");
    if (typeof t == "undefined" && typeof opt == "undefined") throw "parameters are undefined";
    if (typeof t != "string") throw "first parameter must be a string";
    if (typeof opt != "object") throw "typeof parameter 2 must be object";

    else {
      let elmnt = document.querySelector(t);
      let UI = opt.template;
      let UI_amaze = document.getElementsByTagName("div");
      let amaze_hold = [UI_amaze];

      elmnt.style.padding = "5px";
      elmnt.style.borderRadius = "5px";
      //create childNodes
      if (UI) {
        elmnt.innerHTML = opt.template;
        this.temps += opt.template;
      }
    }

  }
  /*mounting buildComponents
  ************000000000*/
  
 mountComponent(tt, optt){
  if(typeof tt == "undefined" && typeof optt == "undefined") throw "parameters are undefined";
 if(typeof tt != "string") throw "first parameter must be a string";
 if(typeof optt != "object") throw "typeof parameter 2 must be object";
   
 else{
   let elmn = document.querySelector(tt);
   let UI = optt.template;
   
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

  bindEvent(el, t, handle) {
    if (!el && !t && !handle)
      throw Error("zero handlers");

    if (!el && t && handle) {} else {
  const arrevents = [
        "onclick",
        "ondblclick",
        "onmouseout",
        "onmouseover",
        "onfocus",
        "onblur"];
     
     
      let handle_el = document.querySelector(el);
      if (el === undefined || t === undefined || handle === undefined) throw Error("undefined expressions in bindEvent parameter");
      if (typeof el != "string" || typeof t != "string") throw Error("typeof params 1 & 2 bindEvent must be strings denoting elements id and type of event handler");
for(const eventsarr of arrevents){
      if (handle_el.hasAttribute(eventsarr)) throw Error("remove events from templates to avoid errors... use id's to handle event in framejs");

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
  Events(funcs) {
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
}
