import { _, create, setAttr, appendTo } from 
   '/iCloud/azmtuts.blog/pkg/CSSModules@azmok/pkg/autil@azmok/autil-1.0.4.mod.js'




/* relative to '.html' file <script> attached */
const url_prism_css = 
   '/iCloud/azmtuts.blog/pkg/CSSModules@azmok/libs/Prism.js/prism.css',
url_prism_js = 
   '/iCloud/azmtuts.blog/pkg/CSSModules@azmok/libs/Prism.js/prism.js',

head = document.head,
body = document.body
   
   

// prism_css
create('link')
   .setAttr({
      rel: "stylesheet",
      href: url_prism_css,
   })
   .appendTo(head)

// prism_js
create('script')
   .setAttr({
      src: url_prism_js,
   })
   .appendTo(body)