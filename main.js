var xArray=[1,1,1]

var cArray=[2,2,2]


var myArrayA=[]
var myArrayB=[]
var myArray3=[]
var myArray4=[]
var myArray5=[]
var myArray6=[]
var myArray7=[]
var myArray8=[]

var one = ''
var two = ''
var three = ''
var four = ''
var five = ''
var six = ''
var seven = ''
var eight= ''
var nine=''


document.addEventListener('DOMContentLoaded',function(event) {



	



	var $change = $('.case')

	var $change 




	

	




	var $answer = $('#answer')

	console.log('hello')

	var $one= $('#one')
	var $two= $('#two')
	var $three= $('#three')
	var $four= $('#four')
	var $five= $('#five')
	var $six= $('#six')
	var $seven= $('#seven')
	var $eight= $('#eight')
	var $nine= $('#nine')


	


var a=false


	$change.click(function(event){




		


	


	if (a===false) {
	


	    
	 if ($answer.hasClass('o')===true) {

	 	

			
		
			// $(this).add('value',"X")
			$(this).removeClass('o')
			$answer.removeClass('o')

			$(this).addClass('x')
			$answer.addClass('x')

			if ($one.hasClass('x')===true && one!==1) {
				myArrayA.push(1)
				myArray4.push(1)
				myArray7.push(1)
				one=1
				console.log(myArrayA)
			} else if ($two.hasClass('x')===true && two!==2) {
				myArrayA.push(1)
				myArray5.push(1)
				two=2

				console.log(myArray5)

			} else if ($three.hasClass('x')===true && three!==3){

				myArrayA.push(1)
				myArray6.push(1)
				myArray8.push(1)
				three=3
			} else if ($four.hasClass('x')===true && four!==4) {
				myArrayB.push(1)
				myArray4.push(1)
				four=4
			} else if ($five.hasClass('x')===true && five!==5){
				myArrayB.push(1)
				myArray5.push(1)
				myArray7.push(1)
				myArray8.push(1)
				five=5
			} else if ($six.hasClass('x')===true && six!==6) {

				myArrayB.push(1)
				myArray6.push(1)
				six=6

			} else if ($seven.hasClass('x')===true && seven!==7) {
				myArray3.push(1)
				myArray4.push(1)
				myArray8.push(1)
				seven=7

			} else if ($eight.hasClass ('x')===true && eight!==8) {
				myArray3.push(1)
				myArray5.push(1)
				eight=8
			} else if ($nine.hasClass('x')===true && nine!==9) {
				myArray3.push(1)
				myArray6.push(1)
				myArray7.push(1)
				nine=9
			}


			if (myArrayA.toString() === xArray.toString() ||
			   myArrayB.toString() === xArray.toString() ||
			   myArray3.toString() ===xArray.toString() ||
			   myArray4.toString() === xArray.toString() ||
			   myArray5.toString() ===xArray.toString() ||
			   myArray6.toString() === xArray.toString() ||
			   myArray7.toString() ===xArray.toString() ||
			   myArray8.toString()=== xArray.toString() ) {

			   

			   console.log('Player 1 has won !!')
				
				
				myArrayA=0

				a=true

			}




		

		









		} else if ($answer.hasClass('x')===true ) {


			$(this).removeClass('x')
			$answer.removeClass('x')

			$(this).addClass('o')
			// $(this).add('value','O')
			$answer.addClass('o')




			if ($one.hasClass('o')===true && one!==1) {
				myArrayA.push(2)
				myArray4.push(2)
				myArray7.push(2)
				one=1

				console.log(myArrayA)
				

			} else if ($two.hasClass('o')===true && two!==2) {
				myArrayA.push(2)
				myArray5.push(2)
				two=2

			} else if ($three.hasClass('o')===true && three!==3){

				myArrayA.push(2)
				myArray6.push(2)
				myArray8.push(2)
				three=3
			} else if ($four.hasClass('o')===true && four!==4) {
				myArrayB.push(2)
				myArray4.push(2)
				four=4
			} else if ($five.hasClass('o')===true && five!==5){
				myArrayB.push(2)
				myArray5.push(2)
				myArray7.push(2)
				myArray8.push(2)
				five=5
			} else if ($six.hasClass('o')===true && six!==6) {
				myArrayB.push(2)
				myArray6.push(2)
				six=6

			} else if ($seven.hasClass('o')===true && seven!==7) {
				myArray3.push(2)
				myArray4.push(2)
				myArray8.push(2)
				seven=7

			} else if ($eight.hasClass ('o')===true && eight!==8) {
				myArray3.push(2)
				myArray5.push(2)
				eight=8
			} else if ($nine.hasClass('o')===true && nine!==9) {
				myArray3.push(2)
				myArray6.push(2)
				myArray7.push(2)
				nine=9
			}



				 if (myArrayA.toString()===cArray.toString() ||
		   myArrayB.toString()===cArray.toString() ||
		   myArray3.toString()===cArray.toString()  ||
		   myArray4.toString()===cArray.toString() ||
		   myArray5.toString()===cArray.toString()  ||
		   myArray6.toString()===cArray.toString()  ||
		   myArray7.toString()===cArray.toString()  ||
		   myArray8.toString()===cArray.toString() ) {	
			console.log('Player 2 has won !!')

			myArrayA=[]
			a=true

		


		

	} else {
		console.log('hello')

		$('h1').html('Game Over!')
	}	

}

}


	})
})



// debugger

