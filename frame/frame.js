/****************************8
 *       FRAME JS            *      
 *    BY UZODIMMA JOSEPH     *
 *******************************************
 */
class Frame {
  constructor(){
   this.temps = "";
  }
  buildFrame(t, opt){
     if(typeof t == "undefined" && typeof opt == "undefined") throw "parameters are undefined";
    if(typeof t != "string") throw "first parameter must be a string";
    if(typeof opt != "object") throw "typeof parameter 2 must be object";
      
    else{
      let elmnt = document.querySelector(t);
      let UI = opt.template;
      let UI_amaze = document.getElementsByTagName("div");
      let amaze_hold = [UI_amaze];

      elmnt.style.padding = "8px";
      elmnt.style.borderRadius = "8px";
   //create childNodes
   if(UI){
     elmnt.innerHTML = opt.template;
     this.temps += opt.template;
 } 
  }  
    
  }


  /*****************
   *Event Handler  *
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
      
      if(handle_el.hasAttribute("onclick") || handle_el.hasAttribute("ondbclick")) throw Error("remove events from templates to avoid errors... use id's to handle event in framejs");
      else{
      let param = document.querySelector(el);
   if(t == "click"){
    param.onclick = handle.event;
   }
   if(t == "dbclick"){
     param.ondbclick = handle.event;
   }
    
    }
    
    } 
  }



}
