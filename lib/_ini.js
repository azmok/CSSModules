/* _ini.js in Prism.js */
import { _, create, setAttr, appendTo } from 
   '/iCloud/azmtuts.youtube/pkg/CSSModules/pkg/autil/autil-1.0.4.mod.js'




/* relative to '.html' file <script> attached */
const url_prism_css = 
   '/iCloud/azmtuts.youtube/pkg/CSSModules/lib/Prism.js/prism.css',
url_prism_js = 
   '/iCloud/azmtuts.youtube/pkg/CSSModules/lib/Prism.js/prism.js',

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