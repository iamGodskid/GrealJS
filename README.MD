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

const app = new Greal();
app.buildComponent("body", {
    template: `
    <h1>LOREM IPSUM DOLOR</h1>

    `
})

```

this will build a template of html to the DOM...

## GREALJS METHODS
# buildComponent();
# bindEvent();
# mounted();
# mountComponent();
# event();
# show();
# hide()

## USAGE
```javascript
const app = new Greal();
app.buildComponent("#app", {
    template: `
<button id="btn">CLICK ME</button>
    `
});
app.bindEvent("#btn", "click", {
    event: ()=>{
        document.write("LOREM IPSUM DOLOR AMIT");
    }
});

//you could use the mounted() method to load eelemnts after document loads
const App = new Greal();
App.mounted("#app", {
    template: `
<h1 id="text">Loren ipsum dolor Amit</h1>
<span></span>
    `
});
//using the show and hide methods to display elements
App.hide("#text);
App.show("span");

//using events() method to handle events
App.events(()=>{
    App.hide("#text");
    App.mountComponent("span", {
        template: `
<strong>mounted text</strong>
        `
    })
})
//the mount method is used to insert elements 
```
