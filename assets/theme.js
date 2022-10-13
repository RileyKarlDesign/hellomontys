



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
		fadeL.style.opacity = "0";
		
		activeFilters = false;
		

	}else{

		
		activeFilters = true;
	}

}

//








// Footer / Header / Cart --------------------------------------

const footHeight = () => {

	const foot = document.querySelector('#shopify-section-footer').clientHeight
	console.log( foot )

	const doc = document.documentElement
	doc.style.setProperty('--foot-height', `${foot}px`)

	

	
   }
   
   window.addEventListener('resize', footHeight)

   const LoadFootHeight = () => {
	
	const foot = document.querySelector('#shopify-section-footer').clientHeight
	console.log( foot )

	const doc = document.documentElement
	doc.style.setProperty('--foot-height', `${foot}px`)

	

	
   }
   window.addEventListener('load', footHeight)
   
   footHeight()



const foot = document.querySelector('.footer')
const nav = document.querySelector('.nav-wrapper')
const cartBtn = document.querySelector('.cart-btn')
let cartExit = document.querySelector('.exit-cart')


let bottom = false;

if(nav){
	console.log('.exit-cart')
}

nav.addEventListener('click', function(){

	if(nav.classList.contains('nav-open')){
		nav.classList.remove('nav-open')
		nav.classList.add('nav-open')
	}

})

cartExit.addEventListener( 'click', function (){

	nav.classList.remove('nav-open')
	nav.classList.remove('nav-bottom-open')

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

	console.log('click')

	console.log(bottom)
	

	if(!nav.classList.contains('nav-open') && bottom ){
	  
		nav.classList.add('nav-open')
		nav.classList.add('nav-bottom-open')
		
		

	} else if(!nav.classList.contains('nav-open')) {

		nav.classList.add('nav-open')

	} else if(nav.classList.contains('nav-open') && bottom ) {
		
		console.log('here')

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


const pc = document.querySelectorAll(".product-card")


	
	function freeze(e) {
	//  e.preventDefault();
	console.log( e.target.id );
	
	let tId = e.target.id ;
		console.log( tId )
		
		
	for( i of pc ){
		
		if ( i.id != tId ){
			console.log(i)

		
			i.classList.remove('card-entered')
						

		}
	}

	e.target.classList.add('card-clicked')

	
}



pc.forEach( i => {
	i.style.transitionDelay = i.attributes.number.value + "00ms";
	i.classList.add('card-entered')

	i.addEventListener( 'click', freeze )

	
})



let Cards = document.querySelectorAll('.product-card')


if(Cards){
enterView({
	
	selector: '.product-card',

	enter: function(el) {
		
		el.classList.add('card-entered');
		
		
		
	},
	
	offset: 0.1,
	
	
});

}




//  filters ----------------

const filterForm = document.querySelector('.filter-form')
const filterLabel = document.querySelectorAll('.filter-title')



	for( const i of filterLabel ){

		 i.addEventListener('click', () => {

			
		if(filterForm.classList.contains('open') ){
			
			filterForm.classList.remove('open')
			// filterLabel.innerHTML=' Filters <i class="fa-solid fa-plus"></i> '
		} else{
			filterForm.classList.add('open')
			// filterLabel.innerHTML=' Filters <i class="fa-solid fa-minus"></i> '
		}
			
		})

}






