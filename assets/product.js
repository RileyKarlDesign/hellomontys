


const atcBtn = document.querySelector('.js-atc')
const content = document.querySelector('#content')

const headLogo = document.querySelector('.logo')
const footNav = document.querySelector('.nav-wrapper')



atcBtn.addEventListener('click', () => {
	
	document.body.classList.add('atc-animation')
	headLogo.classList.add('inviz')
	footNav.classList.add('inviz-foot')
	//content.classList.add('content-animation')

	atcBtn.innerHTML='Adding to cart...'
	 atcBtn.classList.add('atc-click')
	
	setTimeout(function() {
		document.body.classList.remove('atc-animation')
		atcBtn.classList.remove('atc-click')
		atcBtn.innerHTML='Add to cart'
	  }, 1000);
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
  
		const recoSwiper = new Swiper('.reco-swiper', {
			effect: 'slide',
			slidesPerView: 1.8,
			spaceBetween: 10,
			dragable: true,
			freeMode: true,

			pagination: {
			el: '.swiper-pagination',
			},
    
			navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
			},

			scrollbar: {
			el: '.swiper-scrollbar',
			}
		  });
  
	}



	
  


 
  



	

	






