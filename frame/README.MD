#### GREAL JS
#  A Javascript Micro Framework for Building Web Interface/User Interface
it is structured to be simple and friendly... with simple syntax...

**[GET STARTED ->]("https://")**

## GREAL JS INSTALLATION

# Install via github then reference it in your html

```html
<script src="path/to/greal.js"></script>
```

## GREALJS USAGE/STRUCTURE

add a script tag at the bottom of the body element and call a framejs instance

```javascript

const app = new GrealComponents();
app.buildComponents("body", {
    template: `
    <h1>LOREM IPSUM DOLOR</h1>

    `
})

```

this will build a template of html to the DOM...

## GREALJS METHODS
# buildComponents();
# bindEvent();
# mountComponent();
# Events();


## USAGE
```javascript
const app = new GrealComponents();
app.buildComponents("#app", {
    template: `
<button id="btn">CLICK ME</button>
    `
});
app.bindEvent("#btn", "click", {
    event: ()=>{
        document.write("LOREM IPSUM DOLOR AMIT");
    }
});

//you could use the mountedComponent() method to load eelemnts after document loads
const App = new Greal();
App.mountComponent("#app", {
    template: `
<h1 id="text">Loren ipsum dolor Amit</h1>
<span></span>
    `
});

//using Events() method to handle events
const x = new GrealComponents();
x.buildComponents("body", {
template: `
<button @click="pop">popper</button>
`
});
x.Events({
pop: ()=>{
alert("popped");
}
})

```
