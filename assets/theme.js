

console.log( "%c🫵🏻🤡"," font-size: 80px")
document.documentElement.style.setProperty('--animate-duration', '.8s');

const documentHeight = () => {
	const doc = document.documentElement
	doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
   }
   window.addEventListener('resize', documentHeight)
   documentHeight()
 
   
// Collections Page  filter Scrolling ---------------------------------------

const filterWrap = document.querySelector('.scroll-wrap')

if(filterWrap){

	
	filterWrap.addEventListener("wheel", (evt) => {
		evt.preventDefault();
		filterWrap.scrollLeft += evt.deltaY;
	});


}




const clearBtn = document.querySelector('.active-filters__clear');
const filterHead = document.querySelector('.filter-head');
const fadeL = document.querySelector('.fade-l')





let mobile = true;
let activeFilters = false;

if(filterWrap){



	if( filterWrap.childNodes.length === 1){
		
		clearBtn.style.display = "none";
		
		
		activeFilters = false;
		

	}else{

		
		activeFilters = true;
	}

}

//








// Footer / Header / Cart --------------------------------------

const footHeight = () => {

	const foot = document.querySelector('#shopify-section-footer').clientHeight
	

	const doc = document.documentElement
	doc.style.setProperty('--foot-height', `${foot}px`)

	

	
   }
   
   window.addEventListener('resize', footHeight)

   const LoadFootHeight = () => {
	
	const foot = document.querySelector('#shopify-section-footer').clientHeight
	

	const doc = document.documentElement
	doc.style.setProperty('--foot-height', `${foot}px`)

	

	
   }
   window.addEventListener('load', footHeight)
   
   footHeight()



const foot = document.querySelector('.footer')
const nav = document.querySelector('.nav-wrapper')
const cartBtn = document.querySelector('.cart-btn')
let cartExit = document.querySelector('.exit-cart')


const labels = document.querySelector('.label-draw');
const labelBtn = document.querySelector('.js-label-draw-btn');
const exitLabels = document.querySelector('.exit-labels')

let bottom = false;

if(nav){
	
}

nav.addEventListener('click', function(){

	if(nav.classList.contains('nav-open')){
		nav.classList.remove('nav-open')
		nav.classList.add('nav-open')
		labels.classList.remove('labels-open')
	}

})

cartExit.addEventListener( 'click', function (){

	nav.classList.remove('nav-open')
	nav.classList.remove('nav-bottom-open')
	labels.classList.remove('labels-open')
 })

 





function tidyclose (){

	if(!bottom){
		nav.classList.remove('cart-open')
  		nav.classList.remove('cart-close')
	}else{
		// nav.classList.add('nav-bottom-fixed')
		// nav.classList.remove('cart-open')
		nav.classList.remove('cart-bottom-close')
		 
		
  		
		
		
	}
  
}





 cartBtn.addEventListener('click', function (){




	

	if(!nav.classList.contains('nav-open') && bottom ){
	  
		nav.classList.add('nav-open')
		nav.classList.add('nav-bottom-open')
		
		

	} else if(!nav.classList.contains('nav-open')) {

		nav.classList.add('nav-open')

	} else if(nav.classList.contains('nav-open') && bottom ) {
		
		

		nav.classList.remove('nav-open')
		nav.classList.remove('nav-bottom-open')

	}else if( nav.classList.contains('nav-open') ){

		nav.classList.remove('nav-open')

	}
 })


 cartBtn.addEventListener('click', function (){

	

	
 })







enterView({
	selector: '.footer',
	enter: function(el) {

		bottom = true;

		nav.classList.add('nav-bottom-fixed');

		if(nav.classList.contains('nav-open')){
		 nav.classList.add('nav-bottom-open');
		}
		
		
   
	},

  exit: function(el) {
		bottom = false;
		nav.classList.remove('nav-bottom-fixed');
		
		
		if(nav.classList.contains('nav-open')){
			nav.classList.remove('nav-bottom-open');
		   }
	},
});



let headerTop = document.querySelector('.header-top');





enterView({
	
	selector: '.ticker-top',

	enter: function(el) {
		headerTop.classList.add('header-top-fixed');
		
	},
	exit: function(el) {
		headerTop.classList.remove('header-top-fixed');
		
	},
	
	offset: 1, 
	
});





enterView({
	
	selector: '.ticker-bottom',

	enter: function(el) {
		labels.classList.add('label-draw-bottom');
		
	},
	exit: function(el) {
		
		labels.classList.remove('label-draw-bottom');
		
	}
	
	
	
});



// recomenations animations ---------------------------------

if( document.querySelector('#recommendations') ){

	enterView({
	
		selector: '#recommendations',
	
		
		
		enter: function(el) {
			el.classList.add('entered');
			
		}
	
	});
	
}



// line animations ----------------------------------- 


if( document.querySelector('.line')){

	

	enterView({
	
		selector: '.line',
	
		
		enter: function(el) {
			el.classList.add('entered');
			
		}	
		
	});

}


const pc = document.querySelectorAll(".js-pc")



	
	function freeze(e) {
		
		

	 
	
	let tId = e.target.parentElement.id;
		
	let clicked = e.target.parentElement	

	if(clicked){
		
		clicked.classList.add('clicked')
	}


	for( let i of pc ){

		i.style.transitionDelay = "000ms";
		i.style.transitionDuration = "900ms";
		if (!i.classList.contains('clicked') ){
			
			i.classList.add('non-click')
			
						

		}
	}

	

	
}

//----------

function getId(e){

}


pc.forEach( i => {

	i.style.transitionDelay = i.attributes.number.value + "00ms";
	i.classList.add('card-entered')
	

	i.addEventListener( 'click', freeze )

	
})



let cards = document.querySelectorAll('.product-card')


if(cards.length > 0){
enterView({
	
	selector: '.product-card',

	enter: function(el) {
		
		
		el.classList.add('card-entered');
		
		
		
	},
	
	offset: 0.15,
	
	
});

}




//  filters ----------------

const filterForm = document.querySelector('.filter-form')
const filterLabel = document.querySelectorAll('.filter-title')



	for( const i of filterLabel ){

		 i.addEventListener('click', () => {

			
		if(filterForm.classList.contains('open') ){
			
			filterForm.classList.remove('open')
			filterWrap.style.opacity= ' 100 '
			filterWrap.style.height = ' 100% '
			// filterLabel.innerHTML=' Filters <i class="fa-solid fa-plus"></i> '
		} else{
			filterForm.classList.add('open')
			filterWrap.style.opacity = ' 0 '
			filterWrap.style.height = ' 0 '
			// filterLabel.innerHTML=' Filters <i class="fa-solid fa-minus"></i> '
		}
			
		})

}

    // labels -----------------------------------------------------
	

	enterView({
		selector: '#ticker-top-two',
		enter: function(el) {
		labels.classList.add('label-fixed')
		},
	
	  exit: function(el) {
		labels.classList.remove('label-fixed')
		},
	
		offset: 1, 
	});



	
	
	if(labelBtn){
	
	
	
	labelBtn.addEventListener('click', () =>{
	
		if( labels.classList.contains('labels-open') ){
			labels.classList.remove('labels-open')
		}else{
			labels.classList.add('labels-open')
			nav.classList.remove('nav-open')
			nav.classList.remove('nav-bottom-open')
		}
		
	})
	
	exitLabels.addEventListener('click', () =>{
	
		if( labels.classList.contains('labels-open') ){
			labels.classList.remove('labels-open')
		}else{
			labels.classList.add('labels-open')
		}
		
	})
	
	}


	






