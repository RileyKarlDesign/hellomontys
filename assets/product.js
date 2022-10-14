


const atcBtn = document.querySelector('.js-atc')
const content = document.querySelector('#content')



atcBtn.addEventListener('click', () => {
	
	document.body.classList.add('atc-animation')
	content.classList.add('content-animation')

})


// labels -----------------------------------------------------

// const elLabels = document.querySelector('.label-draw');
// const labelBtn = document.querySelector('.js-label-draw-btn');
// const exitLabels = document.querySelector('.exit-labels')



// labelBtn.addEventListener('click', () =>{

// 	if( elLabels.classList.contains('labels-open') ){
// 		elLabels.classList.remove('labels-open')
// 	}else{
// 		elLabels.classList.add('labels-open')
// 	}
	
// });

// exitLabels.addEventListener('click', () =>{

// 	if( elLabels.classList.contains('labels-open') ){
// 		elLabels.classList.remove('labels-open')
// 	}else{
// 		elLabels.classList.add('labels-open')
// 	}
	
// });

// related products scroll -------------------------------------


function addScroll() {
  
	const recoScroll = document.querySelector('.recomended-product')
	  
	
	
	  recoScroll.addEventListener("wheel", (evt) => {
		  evt.preventDefault();
		  recoScroll.scrollLeft += evt.deltaY;
	  })
	



	
  }


 
  



	

	






