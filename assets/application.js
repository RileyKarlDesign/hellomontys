

$(document).ready(function() {



    let 
      addToCartFormSelector = '#add-to-cart-form';
      productOptionsSelector = addToCartFormSelector + ' [name*=option]';
    
      
      
    
      let productForm = {
    
        onProductOptionChanged: function (event){
    
          let
            $form = $(this).closest(addToCartFormSelector),
            selectedVariant = productForm.getActiveVariant($form);

            console.log( selectedVariant );

            $form.trigger('form:change',[ selectedVariant ])
    
        },
    
        getActiveVariant: function($form){
    
          let 
            variants = JSON.parse(decodeURIComponent($form.attr('data-variants')));
            formData = $form.serializeArray();
            formOptions= {
              option1: null,
              option2: null,
              option3: null
            },
            selectedVariant = null;

            console.log(' getting variant')

            console.log('form')

            $.each(formData, function(index, item) {
              if(item.name.indexOf('option') !== -1 ){
                formOptions[item.name]= item.value;
              }
            });

            $.each(variants, function(index, variant){
                if( variant.option1 === formOptions.option1 && variant.option2 === formOptions.option2 && variant.option3 === formOptions.option3 ){
                  selectedVariant = variant;
                  return false;
                }
            });

            return selectedVariant;

           

        }, 
    
        validate: function(event, selectedVariant ){
          let   
            $form = $(this),
            hasVariant = selectedVariant !== null,
            canAddToCart =hasVariant && selectedVariant.inventory_quantity > 0
            $id = $form.find('.js-variant-id')
            $addToCartButton = $form.find('#add-to-cart-button')

        

            if(canAddToCart){
              $id.val(selectedVariant.id);
              $addToCartButton.prop('disabled', false );
            }else{
              $id.val('')
              $addToCartButton.prop('disabled', true );
            }

            console.log( canAddToCart )
        },
    
        init: function(){
         
            
           $(document).on('change', productOptionsSelector, productForm.onProductOptionChanged);
           $(document).on('form:change', addToCartFormSelector, productForm.validate)
    
        }
    
      };
    
    
      productForm.init()


    

       

       //-------------------------------------------------------------------------------------------------------


  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "" ) {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 300, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if

  
  });



    
    });

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
	
})

exitLabels.addEventListener('click', () =>{

	if( labels.classList.contains('labels-open') ){
		labels.classList.remove('labels-open')
	}else{
		labels.classList.add('labels-open')
	}
	
})

enterView({
	selector: '.ticker-top-two',
	enter: function(el) {
    labels.classList.add('label-fixed')
	},

  exit: function(el) {
    labels.classList.remove('label-fixed')
	},

	offset: 1, 
});
