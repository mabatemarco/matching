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
var positions=[];
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
// Save positions
$('img').each(function(index){
	positions[index]=$(this).position()
})
// Send all cards to center
$('img').each(function(index){
	$(this).animate({
		left: 390,
		top:230
	},600)
})
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
}
// Send cards back to their places
$('img').each(function(index){
	$(this).delay(delay).animate({
		left: positions[index].left,
		top: positions[index].top
	},600)
	delay+=100
})
// Cards show back side
$('img').attr('src','images/card.png')
// Main game
$('img').click(match);
function match(){
if($(this).hasClass('clicked')){
	}
else{
	$('#flip')[0].play()
	if(cardturned==true){
		turns+=1
		$('img').off('click')
		srcb=eval('src'+$(this).attr('id'));
		$(this).attr('src',srcb);
		selectedb=$(this);
		cardturned=false;
		console.log(cardturned)
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
		console.log(cardturned)
		$(selecteda).addClass('clicked')
	}
}
}
// When a pair is found
function pairget(){
	$('img').on('click', match)
	n-=1;
	$(selecteda).hide();
	$(selectedb).hide();
	if(n==0){
		$('.container').prepend('<h2>You won!</h2><br/><button type="button">New Game</button>');
	}
}
// When a pair is not found
function reset(){
	$('img').on('click', match)
	$('img').attr('src','images/card.png');
}
}
$(document).on('click','button',game)