$(document).ready(game)
function game(){
	$('h2').remove();
	$('button').remove();
	$('img').show();
var selecteda;
var selectedb;
var n=6;
var cardturned=false;
var pics=['images/koda1.jpg','images/koda1.jpg','images/koda2.jpg','images/koda2.jpg','images/koda3.jpg','images/koda3.jpg','images/koda4.jpg','images/koda4.jpg','images/koda5.jpg','images/koda5.jpg','images/koda6.jpg','images/koda6.jpg',];
var used=[];

for(i=0;used.length<12;){
	var x=Math.ceil(Math.random() * 12);
	if(jQuery.inArray(x,used)==-1){
		$('#'+x).attr('src',pics[i]);
		used[i]=x;
		++i;
	}
	else{}
}

var src1=$('#1').attr('src');
var src2=$('#2').attr('src');
var src3=$('#3').attr('src');
var src4=$('#4').attr('src');
var src5=$('#5').attr('src');
var src6=$('#6').attr('src');
var src7=$('#7').attr('src');
var src8=$('#8').attr('src');
var src9=$('#9').attr('src');
var src10=$('#10').attr('src');
var src11=$('#11').attr('src');
var src12=$('#12').attr('src');

$('img').attr('src','images/card.png')

$('img').click(match);

function match(){
if($(this).attr('class')=='clicked'){
	}
else{
	if(cardturned==true){
		var srcb=eval('src'+$(this).attr('id'));
		$(this).attr('src',srcb);
		selectedb=$(this);
		cardturned=false;
		$(selecteda).removeClass('clicked');
		if($(this).attr('src')==$(selecteda).attr('src')){
			setTimeout(pairget,800)
		}
		else{
			setTimeout(reset,1200)
		};
	}
	else{
		var srca=eval('src'+$(this).attr('id'));
		$(this).attr('src',srca);
		selecteda=$(this);
		cardturned=true;
		$(this).addClass('clicked')
	}
}
}

function pairget(){
	n-=1;
	$(selecteda).hide();
	$(selectedb).hide();
	if(n==0){
		$('#win').append('<h2>You won!</h2><br/><button type="button">New Game</button>');
	}
}

function reset(){
	$('img').attr('src','images/card.png');
}
}
$(document).on('click','button',game)