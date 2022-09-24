const _ = console.log,
elm = document.querySelector("p"),
elm2 = document.querySelectorAll("p")[1],
cstyle = getComputedStyle(elm),
cstyle2 = getComputedStyle(elm2)

_( cstyle.getPropertyValue("font-family") )
_( elm.className )

_( cstyle2.getPropertyValue("font-family") )
_( elm2.className )