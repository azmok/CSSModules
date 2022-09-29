import { _, create, setAttr, appendTo } from './../../js/autil-1.0.4.mod.js'



export const doPrismjs = () => {
   /* relative to '.html' file <script> attached */
   const url_prism_css = 
      "../lib/Prism.js/okaidia.css",
   url_prism_js = 
      "../lib/Prism.js/prism.min.js",
   url_prism_plugin_lineNumbers_css =  
      "../lib/Prism.js/plugins/line-numbers/line-numbers.min.css",
   url_prism_plugin_lineNumbers_js = 
      "../lib/Prism.js/plugins/line-numbers/line-numbers.min.js",
   url_prism_plugin_highlight_css = 
      "../lib/Prism.js/plugins/line-highlight/line-highlight.min.css",
   url_prism_plugin_highlight_js = 
      "../lib/Prism.js/plugins/line-highlight/line-highlight.min.js",
   
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
   
      
   // prismjs.plugin.line-numbers
   create('link')
      .setAttr({
         rel: "stylesheet",
         href: url_prism_plugin_lineNumbers_css,
      })
      .appendTo(head)
   
   // prismjs.plugin.line-numbers
   create('script')
      .setAttr({
         src: url_prism_plugin_lineNumbers_js,
      })
      .appendTo(body)
      
   
   // prismjs.plugin.line-highlight_css
   create('link')
      .setAttr({
         rel: "stylesheet",
         href: url_prism_plugin_highlight_css,
      })
      .appendTo(head)
   
   // prismjs.plugin.line-highlight_js
   create('script')
      .setAttr({
         src: url_prism_plugin_highlight_js,
      })
      .appendTo(body)
   
}
   
doPrismjs()