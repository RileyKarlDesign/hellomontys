




const filterWrap = document.querySelector('.scroll-wrap')

if(filterWrap){

	console.log( ' exists')
	filterWrap.addEventListener("wheel", (evt) => {
		evt.preventDefault();
		filterWrap.scrollLeft += evt.deltaY;
	});




const clearBtn = document.querySelector('.active-filters__clear')

if(filterWrap){
	console.log('yes')
}

if( filterWrap.childNodes.length === 1){

	clearBtn.style.display = "none";

}else{

	console.log( filterWrap.childNodes.length )
}
}

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


const spacer = document.querySelector('.spacer')


enterView({
	
	selector: '.ticker-top',

	enter: function(el) {
		headerTop.classList.add('header-top-fixed');
		
	},
	exit: function(el) {
		headerTop.classList.remove('header-top-fixed');
		
	},
	
	offset: 1, // enter at middle of viewport
	
});

enterView({
	
	selector: '#recommendations',

	
	enter: function(el) {
		el.classList.add('entered');
		
	}

	
	
	
	
	
});

enterView({
	
	selector: '.line',

	
	enter: function(el) {
		el.classList.add('entered');
		
	}

	
	
	
	
	
});

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





enterView({
	
	selector: '.product-card',

	enter: function(el) {
		el.classList.add('card-entered');
		
		
	},
	
	offset: 0.1,
	
	
});

//  cart--------------------------------------------




//  filters ----------------

const filterForm = document.querySelector('.filter-form')
const filterLabel = document.querySelector('.filter-label')

if(filterLabel){

	filterLabel.addEventListener('click', () => {
	
		if(filterForm.classList.contains('open') ){
			
			filterForm.classList.remove('open')
			// filterLabel.innerHTML=' Filters <i class="fa-solid fa-plus"></i> '
		} else{
			filterForm.classList.add('open')
			// filterLabel.innerHTML=' Filters <i class="fa-solid fa-minus"></i> '
		}
			
		})

}


// atc -------------------------------------------------






//----------------------------------------------------------
