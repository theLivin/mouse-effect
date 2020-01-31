var cursor = document.querySelector('.cursor');
var cursorStyle = cursor.style;

window.document.onmousemove = function(e){
	//console.log(e)
	//console.log(e.pageX);
	cursorStyle.left = (e.x - 10)+"px";
	cursorStyle.top = (e.y - 10)+"px";
};

window.document.onclick = function(e){
	// Get current height and width of div.cursor
	var height = 0;
	var width = 0;


	// Peroform animation
	var animateCursor = setInterval(function(){
		height ++ ;
		width ++;
		cursorStyle.height = ( height ) + "px";
		cursorStyle.width = ( width ) + "px";

		cursorStyle.left = (e.x - (width/2) )+"px";
		cursorStyle.top = (e.y - (height/2) )+"px";

		cursorStyle.backgroundColor = "blue";
	}, 10);

	setTimeout(function(){
		clearInterval(animateCursor);
		cursorStyle.backgroundColor = "rgba(249, 0, 0, 0.82)";
	},200);
};
