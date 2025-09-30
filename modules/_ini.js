import { _, create, setAttr, appendTo } from '../lib/autil-1.0.4.mod.js'
import './toc.js/_ini.js'
import renderToc from './toc.js/toc-1.0.5.mod.js'


/* relative CSS file path from .html file to append */
const url_label_css = '../modules/label.css/_ini.css'

// css
create('link')
   .setAttr({
      rel: "stylesheet",
      href: url_label_css,
   })
   .appendTo(document.head)


// darkModeSwitcher
const counterStore = (initVal) => {
   let count = initVal
   
   return({
      increment(){
         return count++
      },
      value(){
         return count
      }
   })
},
counter = counterStore(0)




Promise.resolve( renderToc() )
   .then(val => {
      import('./annotation.js/_ini.js')
      import('./darkModeSwitcher.js/_ini.js')
   })
   
   
   