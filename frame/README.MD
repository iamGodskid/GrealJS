#### FRAMEJS
#  A Javascript Micro Framework for Building Web Interface/User Interface
it is structured to be simple and friendly... with simple syntax...

**[GET STARTED ->]("https://")**

## FrameJS INSTALLATION

# Install via github then reference it in your html

```html
<script src="path/to/frame.js"></script>
```

## FRAMEJS USAGE/STRUCTURE

add a script tag at the bottom of the body element and call a framejs instance

```javascript

const app = new Frame();
app.buildFrame("body", {
    template: `
    <h1>LOREM IPSUM DOLOR</h1>

    `
})

```

this will build a template of html to the DOM...

## FRAMEJS METHODS
# buildFrame();
# bindEvent();

## USAGE
```javascript
const app = new Frame();
app.buildFrame("#app", {
    template: `
<button id="btn">CLICK ME</button>
    `
});
app.bindEvent("#btn", "click", {
    event: ()=>{
        document.write("LOREM IPSUM DOLOR AMIT");
    }
})
```