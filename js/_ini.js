import { _, create, setAttr, appendTo } from './autil-1.0.4.mod.js'



const body = document.querySelector('body')
const script_url1 = "../lib/Prism.js/prism.min.js",
script_url2 = "../js/darkSwitcher.js",
script_url3 = "../lib/Prism.js/plugins/line-numbers/line-numbers.min.js",
script_url4 = "../lib/Prism.js/plugins/line-highlight/line-highlight.min.js"


// prismjs
create('script')
   .setAttr({
      src: script_url1,
   })
   .appendTo(body)

// dadkSwitcher
create('script')
   .setAttr({
      type: 'module',
      defer: true,
      src: script_url2,
   })
   .appendTo(body)

// prismjs.plugin.line-numners
create('script')
   .setAttr({
      src: script_url3,
   })
   .appendTo(body)

// prismjs.plugin.line-highlight
create('script')
   .setAttr({
      src: script_url4,
   })
   .appendTo(body)
   
   
   