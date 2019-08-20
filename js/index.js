var selecteda;
var selectedb;
var n=6;
var cardturned=false;
var pics=['images/koda1.jpg','images/koda1.jpg','images/koda2.jpg','images/koda2.jpg','images/koda3.jpg','images/koda3.jpg','images/koda4.jpg','images/koda4.jpg','images/koda5.jpg','images/koda5.jpg','images/koda6.jpg','images/koda6.jpg',];
var used=[];
var positions=[];
var cscore=0;
var delay=0;
var srca;
var srcb;
var bscore=0;
var src1;
var src2;
var src3;
var src4;
var src5;
var src6;
var src7;
var src8;
var src9;
var src10;
var src11;
var src12;
$(document).ready(game)
function game(){
$('h2').remove();
$('button').remove();
$('img').show();
cscore=0;
delay=0;
$('#cscore').html(cscore);
n=6;
used=[];
positions=[];
srca=undefined;
srcb=undefined;
// Saves all sources
for(i=0;used.length<12;){
	var x=Math.ceil(Math.random() * 12);
	if(jQuery.inArray(x,used)==-1){
		$('#'+x).attr('src',pics[i]);
		used[i]=x;
		++i;
	}
	else{}
};
src1=$('#1').attr('src');
src2=$('#2').attr('src');
src3=$('#3').attr('src');
src4=$('#4').attr('src');
src5=$('#5').attr('src');
src6=$('#6').attr('src');
src7=$('#7').attr('src');
src8=$('#8').attr('src');
src9=$('#9').attr('src');
src10=$('#10').attr('src');
src11=$('#11').attr('src');
src12=$('#12').attr('src');
// Save positions
$('img').each(function(index){
	positions[index]=$(this).position()
});
// Send all cards to center
$('img').each(function(index){
	$(this).animate({
		left: 390,
		top:230
	},600)
});
// Shuffle
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
		$('#shuffle')[0].play()
	})
};
// Send cards back to their places
$('img').each(function(index){
	$(this).delay(delay).animate({
		left: positions[index].left,
		top: positions[index].top
	},600)
	delay+=100
});
// Cards show back side
$('img').attr('src','images/card.png');
// Main game
$('img').unbind('click').on('click',match);
function match(){
if($(this).hasClass('clicked')){
	}
else{
	var currentThisWhenClicked = $(this);
	console.log();
	$('#flip')[0].play();
	if(cardturned==true){
		cscore+=1
		$('#cscore').html(cscore)
		$('img').off('click')
		srcb=eval('src'+$(this).attr('id'));
		$(this).attr('src',srcb);
		selectedb=$(this);
		cardturned=false;
		console.log(cardturned)
		$('img').removeClass('clicked');
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
		console.log(cardturned)
		$(selecteda).addClass('clicked')
	}
}
}
// When a pair is found
function pairget(){
	$('img').unbind('click').on('click', match)
	n-=1;
	$(selecteda).hide();
	$(selectedb).hide();
	if(n==0){
		$('.container').prepend('<h2>You won!</h2><br/><button type="button">New Game</button>');
		
		if (bscore==0){
			bscore=cscore
		}
		else{
			bscore=Math.min(bscore,cscore)
		}
		$('#bscore').html(bscore)
	}
}
// When a pair is not found
function reset(){
	$('img').unbind('click').on('click', match)
	$('img').attr('src','images/card.png');
}
}

$(document).unbind('click').on('click','button',game)