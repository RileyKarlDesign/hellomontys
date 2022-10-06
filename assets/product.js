console.log( 'connected ')


const atcBtn = document.querySelector('.js-atc')
const content = document.querySelector('#content')


console.log('product')

atcBtn.addEventListener('click', () => {
	
	document.body.classList.add('atc-animation')
	content.classList.add('content-animation')

})


// labels -----------------------------------------------------

const labels = document.querySelector('.label-draw');
const labelBtn = document.querySelector('.js-label-draw-btn');
const exitLabels = document.querySelector('.exit-labels')



labelBtn.addEventListener('click', () =>{

	if( labels.classList.contains('labels-open') ){
		labels.classList.remove('labels-open')
	}else{
		labels.classList.add('labels-open')
	}
	
});

exitLabels.addEventListener('click', () =>{

	if( labels.classList.contains('labels-open') ){
		labels.classList.remove('labels-open')
	}else{
		labels.classList.add('labels-open')
	}
	
});




