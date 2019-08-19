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
var middle;
var positions=[];
var left;
var top;
var turns=0;
var delay=0;
var srca;
var srcb;



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

$('img').each(function(index){
	positions[index]=$(this).position()
})

$('img').each(function(index){
	$(this).animate({
		left: 360,
		top:200
	},600)
})

for(i=0;i<5;++i){
	$('img').delay(50).each(function(index){
		if(index<6){
			$(this).animate({
				left:'-=150',
			},150).animate({
				left:'+=150'
			},150)
		}
		else{
			$(this).animate({
				left:'+=150',
			},150).animate({
				left:'-=150'
			},150)
		}
	})
}

$('img').each(function(index){
	$(this).delay(delay).animate({
		left: positions[index].left,
		top: positions[index].top
	},600)
	delay+=100
})

$('img').attr('src','images/card.png')

$('img').click(match);

function match(){
if($(this).hasClass('clicked')){
	}
else{
	if(cardturned==true){
		turns+=1
		$('img').off('click')
		srcb=eval('src'+$(this).attr('id'));
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
		srca=eval('src'+$(this).attr('id'));
		$(this).attr('src',srca);
		selecteda=$(this);
		cardturned=true;
		$(this).addClass('clicked')
	}
}
}

function pairget(){
	$('img').on('click', match)
	n-=1;
	$(selecteda).hide();
	$(selectedb).hide();
	if(n==0){
		$('#win').append('<h2>You won!</h2><br/><button type="button">New Game</button>');
	}
}

function reset(){
	$('img').on('click', match)
	$('img').attr('src','images/card.png');
}
}
$(document).on('click','button',game)