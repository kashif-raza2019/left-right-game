// function to pick left or right div
var pickedDiv=[];
var score=0;
var count=0;
var i;

function pickDiv()
{
	
	var num= Math.floor(Math.random()*100);
	
	if(num<50)
	{	console.log("left div picked");
		pickedDiv = $(".left");
		
	}
	else
		{	console.log("right div picked");
			pickedDiv = $(".right") ;
			
		}
	}

//function to show message on the selected div

function setMessage(){

	var num= Math.floor(Math.random()*5);
	if(num<2)
	{
		pickedDiv[0].textContent= "Left";
	}
	else
		pickedDiv[0] .textContent="Right";

  }

pickDiv();
setMessage();
var correct= pickedDiv[0].textContent;
console.log("Correct div "+correct);

$(".left").on("click",function(){
	clearInterval(i);
	if(count<=2){	count=0;
	i= setInterval(function(){
		count++;
		console.log("count is: "+count);
		
			},600);
	

	pickedDiv[0].textContent="";
	if(correct=="Left")
	{ score++;
		var sound = new Howl({
  	src: ['assets/sounds/suspension.mp3']
			});

	sound.play();
	 $("#score").text(score);

	pickDiv();
	setMessage();
	correct= pickedDiv[0].textContent;
	console.log("Now the correct div is: "+correct);
	}
	else{
		console.log("WRONGGGGGG");
		var sound = new Howl({
  	src: ['assets/sounds/piston-3.mp3']
			});

	sound.play();
		clearInterval(i);
		$("#GOspan").text("GAME OVER!!!")
		$(".left").css({
		 backgroundColor:"#ccc9bf"
		});
		$(".right").css({
			background:"#ccc9bf"
		});
		correct="";
		document.querySelector("#button").style.visibility="visible";
	}
	
}
else
{var sound = new Howl({
  	src: ['assets/sounds/piston-3.mp3']
			});

	sound.play();

		$("#GOspan").text("Time Out");
		clearInterval(i);
		$(".left").css({
			backgroundColor:"#ccc9bf"
		});
		$(".right").css({
			backgroundColor:"#ccc9bf"
		});
		document.querySelector("#button").style.visibility="visible";}
});

$(".right").on("click",function(){
	clearInterval(i);
	if(count<=2)
	{	count=0;
		 i= setInterval(function(){
		count++;
		console.log(count);
		
			},600);
	pickedDiv[0] .textContent="";
	if(correct=="Right")
	{	score++;
		var sound = new Howl({
  	src: ['assets/sounds/suspension.mp3']
			});

	sound.play();
	 $("#score").text(score);

	pickDiv();
	setMessage();
	correct= pickedDiv[0].textContent;
	console.log("Now the correct div is: "+correct);
	}
	else{
		console.log("WRONGGGGGG");
		correct="";
		var sound = new Howl({
  	src: ['assets/sounds/piston-3.mp3']
			});

	sound.play();
		clearInterval(i);
		$("#GOspan").text("GAME OVER!!!");
		$(".left").css({
			backgroundColor:"#ccc9bf"
		});
		$(".right").css({
			backgroundColor:"#ccc9bf"
		});
		document.querySelector("#button").style.visibility="visible";
	}

}
	else
	{ var sound = new Howl({
  	src: ['assets/sounds/piston-3.mp3']
			});

	sound.play();

		$("#GOspan").text("Time Out !!!");
		clearInterval(i);
		$(".left").css({
			backgroundColor:"#ccc9bf"
		});
		$(".right").css({
			backgroundColor:"#ccc9bf"
		});
		document.querySelector("#button").style.visibility="visible";
	}
});
$("button").click(function(){
	score=0; 
	count=0;
	$("#score").text(score);
	$("#GOspan").text("");
	$("#button").css("visibility","hidden");
	$(".left").css({
		backgroundColor: "#f44542"
	});
	$(".right").css({
		backgroundColor: "#a6f441"
	});
	$(".left").text("");
	$(".right").text("");
	pickDiv();
	setMessage();
	correct= pickedDiv[0].textContent;

});

