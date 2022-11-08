import { _, create, setAttr, appendTo } from 
'/iCloud/azmtuts.blog/pkg/CSSModules@azmok/pkg/autil@azmok/autil-1.0.4.mod.js'




import './toc.js/_ini.js'
import './annotation.js/_ini.js'
//import './darkModeSwitcher.js/_ini.js'

/* relative to `.html` file that <link rel="stylesheet" ...> tag will be added */
const url_label_css = '/iCloud/azmtuts.blog/pkg/CSSModules@azmok/modules/label.css/_ini.css',
head = document.head
// css
create('link')
   .setAttr({
      rel: "stylesheet",
      href: url_label_css,
   })
   .appendTo(head)
/**/



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
}
/*
const counter = counterStore(0)
_( counter.value() ) //
counter.increment()
_( counter.value() ) // 1
/**/
const counter = counterStore(0)



document.addEventListener('click', () => {
   if( counter.value() === 0 ){
      //_( counter.value() )
      import('./darkModeSwitcher.js/_ini.js')
   }
   counter.increment()
})
/**/