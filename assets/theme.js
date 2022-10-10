// window.addEventListener('load', function(event) {
// 	let vh = window.innerHeight * 0.01;
// 	document.documentElement.style.setProperty('--vh', `${vh}px`);

	
//   }, true);

// window.addEventListener('resize', function(event) {
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);

  
// }, true);

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

const foot = document.querySelector('.footer')
const nav = document.querySelector('.nav-wrapper')
const cartBtn = document.querySelector('.cart-btn')

let bottom = false;

function tidyclose (){

	if(!bottom){
		nav.classList.remove('cart-open')
  		nav.classList.remove('cart-close')
	}else{
		nav.classList.remove('cart-open')
  		nav.classList.remove('cart-close-bottom')
		nav.classList.add('nav-bottom-fixed')
		
		
	}
  
}


 cartBtn.addEventListener('click', function (){

	console.log('click')

	if(nav.classList.contains('cart-open')){
	  	if(!bottom){
		
		nav.classList.add('cart-close')
	  	setTimeout(tidyclose,300)
		} else{
			
			nav.classList.remove('cart-open')
  		
		nav.classList.add('nav-bottom-fixed')
	  		

			
		}

	}else{
	  nav.classList.add('cart-open')
	  nav.classList.remove('nav-bottom-fixed')
		
	}
	
 })








enterView({
	selector: '.ticker-bottom',
	enter: function(el) {

		bottom = true;

		if(!nav.classList.contains('cart-open')){
		 nav.classList.add('nav-bottom-fixed');
		}
		
		
   
	},

  exit: function(el) {
		bottom = false;
		nav.classList.remove('nav-bottom-fixed');
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

if(filterLabel){

	for(  i of filterLabel ){

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
}





