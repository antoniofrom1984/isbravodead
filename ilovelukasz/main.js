function on(){document.getElementById("overlay").style.display="block"}function off(){document.getElementById("overlay").style.display="none"}document.getElementById("info").onclick=on,document.getElementById("overlay").onclick=off;for(var btnContainer=document.getElementById("btncontainer"),btns=btnContainer.getElementsByClassName("btn"),i=0;i<btns.length;i++)btns[i].addEventListener("click",function(){var e=document.getElementsByClassName("active");e[0].className=e[0].className.replace(" active",""),this.className+=" active"});let mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)),squareArr=[-190,-160,-80,-40,40,80,160,190],squareArr2=[-170,-140,-60,-20,20,60,140,170],container=document.getElementById("thebox"),littleCircles=container.querySelectorAll("div.squares"),littleSquares=container.querySelectorAll("div.circles"),randomSizes=[5,10,15,20,25];function ndElements(e,t){for(let n=0;n<e.length;n++){let o=t[Math.floor(Math.random()*t.length)],r=randomSizes[Math.floor(Math.random()*randomSizes.length)];e[n].style.Top=o+"px",e[n].style.left=o+"px",e[n].style.zIndex="1000",e[n].style.width=r+"px",e[n].style.height=r+"px"}}ndElements(littleCircles,squareArr),ndElements(littleSquares,squareArr2),document.getElementById("reflective").addEventListener("click",reflective),document.getElementById("thinking").addEventListener("click",thinking),document.getElementById("overthinking").addEventListener("click",overthinking);let elementString="element",multiples=[90,180,270,360,450,540,630,720,810,900,990,1080],elementos=document.querySelectorAll("div.triangles"),enhancedElements=[],enhancedElementsclick=[],enhancedOverthinking=[],degree=90,initial=0,timeoutID=[];function reflective(){myStopFunction(),enhancedElements.forEach(e=>{e.element.removeEventListener("mouseenter",e.mouseenterHandler)}),enhancedElements.forEach(e=>{e.element.removeEventListener("touchmove",e.mouseenterHandler)}),enhancedElementsclick.forEach(e=>{e.element.addEventListener("click",e.clickHandler)})}function thinking(){myStopFunction(),mobile?(mobile=!0,enhancedElementsclick.forEach(e=>{e.element.removeEventListener("click",e.clickHandler)}),enhancedElements.forEach(e=>{e.element.addEventListener("touchmove",e.mouseenterHandler)})):(enhancedElementsclick.forEach(e=>{e.element.removeEventListener("click",e.clickHandler)}),enhancedElements.forEach(e=>{e.element.addEventListener("mouseenter",e.mouseenterHandler)}))}function overthinking(){enhancedOverthinking.forEach(e=>{over(e.element)}),enhancedElementsclick.forEach(e=>{e.element.removeEventListener("click",e.clickHandler)}),enhancedElements.forEach(e=>{e.element.removeEventListener("mouseenter",e.mouseenterHandler)})}function myStopFunction(){timeoutID.forEach(function(e){clearTimeout(e)})}function mouseenterHandler(e){ndElements(littleCircles,squareArr),ndElements(littleSquares,squareArr2);const t=enhancedElements.find(t=>t.element==e);t.rotation+=degree,e.style.webkitTransform="rotate("+t.rotation+"deg)",e.style.mozTransform="rotate("+t.rotation+"deg)",e.style.msTransform="rotate("+t.rotation+"deg)",e.style.oTransform="rotate("+t.rotation+"deg)",e.style.transform="rotate("+t.rotation+"deg)"}function clickHandler(e){ndElements(littleCircles,squareArr),ndElements(littleSquares,squareArr2);const t=enhancedElements.find(t=>t.element==e);t.rotation+=degree,e.style.webkitTransform="rotate("+t.rotation+"deg)",e.style.mozTransform="rotate("+t.rotation+"deg)",e.style.msTransform="rotate("+t.rotation+"deg)",e.style.oTransform="rotate("+t.rotation+"deg)",e.style.transform="rotate("+t.rotation+"deg)"}function over(e){const t=enhancedElements.find(t=>t.element==e);let n=[90,180,270,360];timeoutID.push(setInterval(function(){ndElements(littleCircles,squareArr),ndElements(littleSquares,squareArr2);let o=n[Math.floor(Math.random()*n.length)];t.rotation+=o,e.style.webkitTransform="rotate("+t.rotation+"deg)",e.style.mozTransform="rotate("+t.rotation+"deg)",e.style.msTransform="rotate("+t.rotation+"deg)",e.style.oTransform="rotate("+t.rotation+"deg)",e.style.transform="rotate("+t.rotation+"deg)",e.style.transitionDuration="1s"},2e3))}elementos.forEach(e=>{enhancedElements.push({element:e,rotation:0,mouseenterHandler(){mouseenterHandler(e)}}),enhancedElementsclick.push({element:e,rotation:0,clickHandler(){clickHandler(e)}}),enhancedOverthinking.push({element:e,rotation:0})}),reflective(),elementos.forEach((e,t)=>{const n=enhancedElements.find(t=>t.element==e);let o=[90,180,270,360,450,540,630,720,810,900,990,1080];setTimeout(function(){let t=o[Math.floor(Math.random()*o.length)];n.rotation+=t,e.style.webkitTransform="rotate("+n.rotation+"deg)",e.style.mozTransform="rotate("+n.rotation+"deg)",e.style.msTransform="rotate("+n.rotation+"deg)",e.style.oTransform="rotate("+n.rotation+"deg)",e.style.transform="rotate("+n.rotation+"deg)"},100*(t+1))});