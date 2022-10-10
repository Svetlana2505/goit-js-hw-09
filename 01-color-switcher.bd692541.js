const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(){if(o)return;n=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),o=!0})),e.addEventListener("click",(function(){o=!1,clearInterval(n)}));let n=null,o=!1;
//# sourceMappingURL=01-color-switcher.bd692541.js.map
