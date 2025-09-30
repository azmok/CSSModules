import { _, create, setAttr, setCss, setText, appendTo, $$ } from './../../lib/autil-1.0.4.mod.js'


/* <!--
<div class="switcher-container">

   <input type="checkbox" id="switcher-xxx"></input>
   <label class="switcher-label" for="switcher-xxx">
      <span class="label-wrapper">
         <span class="switcher-label-off">&emsp";Off</span>
         <span class="switcher-label-on">On&emsp";</span>
      </span>
      <span class="switcher-button"></span>
   </label>

</div>
-->
*/

//_(1)


const createSwitcher = (target) => {
   let _counter = 0;
   
   const switcherId = "switcher"+ _counter++,
   switcherContainer = create("div")
      .setAttr({
         class: 'switcher-container'
      })
      .setCss({
         position: 'fixed',
         top: 0,
         right: 0,
         display: 'table',
         background: 'transparent',
         'transform-origin': '100% 0%',
         transform: 'rotate(90deg) translate(100%, 0%)',
      })
      .setText("DarkMode")
      .appendTo(target),
   
   inp = create("input")
      .setAttr({
         type: 'checkbox',
         id: switcherId
      })
      .appendTo(switcherContainer),
      
   switcherLabel = create("label")
      .setAttr({
         "class": "switcher-label",
         "for": switcherId
      })
      .appendTo(switcherContainer),
   
   labelWrapper = create("span")
      .setAttr({
         class: "label-wrapper"
      })
      .appendTo(switcherLabel),
      
   off = create("span")
      .setAttr({
         class: "switcher-label-off"
      })
      .setText("Off")
      .appendTo(labelWrapper),
      
   on = create("span")
      .setAttr({
         class: "switcher-label-on"
      })
      .setText("On")
      .appendTo(labelWrapper),
   
   button = create("span")
      .setAttr({
         class: "switcher-button"
      })
      .appendTo(switcherLabel)
      
   //o return inp
   return { switcherContainer, switcherLabel }
   // x return switcherContainer
   
},
addTransition = (elm) => {
   elm.setCss({
      transition: 'all 0.11s ease',
   })
   
   elm.hasTransition = true
}

document.addEventListener("DOMContentLoaded", ()=> {
   const { switcherContainer, switcherLabel } =  createSwitcher(document.body),
   html = document.documentElement,
   checkbox = switcherContainer.children[0]
   //_( checkbox.tagName )
   
   
   switcherLabel.addEventListener('click', (e) => {
      e.preventDefault()
      //_(999)
      switcherContainer.hasTransition ? true : addTransition(html)
      
      checkbox.checked = !checkbox.checked
      html.classList.toggle('dark')
   })
   
   
   // apppend <link> of CSS
   const headElement = $$('head'),
   linkTag = create('link')
      .setAttr({
         rel: "stylesheet",
         href: "darkModeSwitcher.css"
      })
      .appendTo(headElement)
   
   
   
});
