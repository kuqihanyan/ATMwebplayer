function swapImage(t,e){
	var r=t.getAttribute("data-srcnm");
	t.removeAttribute("srcset"),r||t.setAttribute("data-srcnm",t.src),t.src=e
}

function setOriginal(t){
	var e="",r="";r=t.getAttribute("data-srcmd"),e=t.getAttribute("data-srcnm"),r?(t.src=r,t.removeAttribute("data-srcmd")):(t.src=e,t.removeAttribute("data-srcnm"))
}

function swapImageMD(t,e){
	t.setAttribute("data-srcmd",t.src),t.src=e
}

function jsready(t){
	/in/.test(document.readyState)?setTimeout("jsready("+t+")",9):t()
}

jsready(function(){
	var t=window.devicePixelRatio?window.devicePixelRatio:1;
	if(t>1)for(var e=document.getElementsByTagName("img"),r=0;
		r<e.length;
		r++)e[r].getAttribute("data-src2x")&&(e[r].setAttribute("data-src-orig",e[r].getAttribute("src")),e[r].setAttribute("src",e[r].getAttribute("data-src2x")))});