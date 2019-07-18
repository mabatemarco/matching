var selecteda;
var selectedb;
var n=6;
var cardturned=false

var src1=$('#1').attr('src');
var src2=$('#2').attr('src');
var src3=$('#3').attr('src');
var src4=$('#4').attr('src');
var src5=$('#5').attr('src');
var src6=$('#6').attr('src');

$('img').attr('src','images/card.png')

$('img').click(match);

function match(){
	$('img').css('pointer-events', 'none');
	if(cardturned==true){
		var srcb=eval('src'+$(this).attr('id'));
		$(this).attr('src',srcb);
		selectedb=$(this);
		cardturned=false
		if($(this).attr('src')==$(selecteda).attr('src')){
			setTimeout(pairget,1200)
		}
		else{
			setTimeout(reset,1200)
		};
	}
	else{
		var srca=eval('src'+$(this).attr('id'));
		$(this).attr('src',srca);
		selecteda=(this);
		cardturned=true;
		$('img').css('pointer-events', 'auto');
	}
}

function pairget(){
	n-=1;
	$(selecteda).hide();
	$(selectedb).hide();
	$('img').css('pointer-events', 'auto');
	if(n==0){
		$('#win').html("You won!");
	}
}

function reset(){
	$('img').attr('src','images/card.png');
	$('img').css('pointer-events', 'auto');
}