import { _, create, setAttr, appendTo } from 
'/iCloud/azmtuts.blog/pkg/CSSModules@azmok/pkg/autil@azmok/autil-1.0.4.mod.js'

const doDarkModeSwitcher = () => {
   /* relative to `.html` file script attached */
   const body = document.querySelector('body'),
   head = document.head,
   url_dmSwitcher_js = `/iCloud/azmtuts.blog/pkg/CSSModules@azmok/modules/darkModeSwitcher.js/darkModeSwitcher.js`,
   url_dmSwitcher_css = `/iCloud/azmtuts.blog/pkg/CSSModules@azmok/modules/darkModeSwitcher.js/darkModeSwitcher.css`
   
   // js
   create('script')
      .setAttr({
         type: 'module',
         defer: true,
         src: url_dmSwitcher_js,
      })
      .appendTo(body)
   
   // css
   create('link')
      .setAttr({
         rel: "stylesheet",
         href: url_dmSwitcher_css,
      })
      .appendTo(head)
}
doDarkModeSwitcher()

export default doDarkModeSwitcher