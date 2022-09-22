
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




enterView({
	selector: '.ticker-bottom',
	enter: function(el) {
		 nav.classList.add('nav-bottom-fixed');
   
	},

  exit: function(el) {
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

//  cart--------------------------------------------




//  filters ----------------

const filterForm = document.querySelector('.filter-form')
const filterLabel = document.querySelector('.filter-label')

if(filterLabel){

	filterLabel.addEventListener('click', () => {
	
		if(filterForm.classList.contains('open') ){
			
			filterForm.classList.remove('open')
			filterLabel.innerHTML=' Filters <i class="fa-solid fa-plus"></i> '
		} else{
			filterForm.classList.add('open')
			filterLabel.innerHTML=' Filters <i class="fa-solid fa-minus"></i> '
		}
			
		})

}


// atc -------------------------------------------------






//----------------------------------------------------------
