#### GREAL JS
#  A Javascript Micro Framework for Building Web Interface/User Interface
it is structured to be simple and friendly... with simple syntax... and lightweight
## (8.33kb)
**[GET STARTED ->]("https://")**

## GREAL JS INSTALLATION

# Install via github then reference it in your html

```html
<script src="path/to/Greal.js"></script>
```

## GREALJS USAGE/STRUCTURE

add a script tag at the bottom of the body element and call a grealjs instance

```javascript
const app = new GrealComponent();
app.buildComponents(()=>{
    return ( `
    <h1 g-class="text">LOREM IPSUM DOLOR</h1>

    `)
})

```

this will build a template of html to the DOM...

## GREALJS METHODS
# buildComponents();
# bindEvent();
# mountComponent();
# Events();
# hooks();
# createStyleSheet


## USAGE
```javascript
//buildComponents method mounts template directly to body
const app = new GrealComponent();
app.buildComponents(()=>{
    return (`
<button @click="pop" g-id="btn">{{component}}</button>
    `)
});
app.hooks({
component: "click me",
btn: "button",
})
app.bindEvent("#btn", "click", {
    event: ()=>{
        document.write("LOREM IPSUM DOLOR AMIT");
    }
});
//the above method binds events to element as it prevents element from controlling other events
//you could use the Events method 

app.Events({
pop:()=>{
alert("hello world");
}
})

//you could use the mountedComponent() method to load elements to target parent element after document loads
const App = new GrealComponent();
App.mountComponent("#app", {
    template: `
<h1 id="text">Loren ipsum dolor Amit</h1>
<span></span>
    `
});

//using Events() method to handle events
const x = new GrealComponent();
x.buildComponents(()=>{
return (`
<button @click="pop">{{popper}}</button>
`)
});
x.Events({
pop: ()=>{
alert("popped");
}
})
//grealjs provides hooks to handle data states just like the react states
x.hooks({
popper: "i am a component"
})
//recent upgrade to grealjs is
//the createStylesheet method
//it gives you privillege to work with actual css in greal

x.createStyleSheet(()=>{
return(
`
button{
background: rgb(20,230,50);
color:white;
}
`
)

})
```
## ENJOY
