const t={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]")};let e=null;t.start.addEventListener("click",(function(){t.start.setAttribute("disabled","disabled"),t.stop.removeAttribute("disabled","disabled"),e=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.stop.addEventListener("click",(function(){clearInterval(e),t.start.removeAttribute("disabled","disabled"),t.stop.setAttribute("disabled","disabled")}));
//# sourceMappingURL=01-color-switcher.41fec75b.js.map