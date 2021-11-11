
function valx()
{
	var x = event.clientX;
	var x = x - 5;	
	return (x);
}
function valy()
{
	var y = event.clientY;
	var y = y - 5;	
	return (y);
}
			
var E_click;
var $Click_X;
var $rotX =0;

var $Click_Y;
var $rotY =0;
var $sesibilidade=0.1;

$("#visao").mousedown(
	function()
	{
		E_click=true;
		$Click_X = valx();
		$Click_Y = valy();
	}
);
$("#visao").mouseup(
	function()
	{
		E_click=false;
	}
);
$("#visao").mousemove(
	function()
	{
		if(E_click)
		{
			var $x = valx() - $Click_X ;
			$Click_X = valx();
			var $y = valy() - $Click_Y ;
			$Click_Y = valy();
			rodar($x * -1,$y);
		}
	}
	
);
$("#p300").click(
	function ()
	{
		$("#visao").css({"perspective":"338px"});
	}
);
$("#p1000").click(
	function ()
	{
		$("#visao").css({"perspective":"1000px"});
	}
);

function rodar(x,y){//negativo esquerda, positivo direita
	console.log(x + " ");
	
	$rotX = $rotX + (x * $sesibilidade);
	$rotY = $rotY + (y * $sesibilidade);
		
	
		
	$("#ponto1").css({
		"position": "fixed",
		"height": "100%",
		"width":"100%",
		"top": "10px",
		"perspective-origin": "50% 60%",
		"transform-style":"preserve-3d",
		"transform": "rotateZ(0deg) rotateX("+$rotY+"deg) rotateY(" + $rotX + "deg)"

	});
}
	