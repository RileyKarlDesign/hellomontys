

$(document).ready(function() {



    let 
      addToCartFormSelector = '#add-to-cart-form';
      productOptionsSelector = addToCartFormSelector + ' [name*=option]';
    
      
      
    
      let productForm = {
    
        onProductOptionChanged: function (event){
    
          let
            $form = $(this).closest(addToCartFormSelector),
            selectedVariant = productForm.getActiveVariant($form);

           

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
            canAddToCart = hasVariant && selectedVariant.inventory_quantity > 0
            $id = $form.find('.js-variant-id')
            $addToCartButton = $form.find('#add-to-cart-button')

        

            if(canAddToCart){
              $id.val(selectedVariant.id);
              $addToCartButton.prop('disabled', false );
            }else{
              $id.val('')
              $addToCartButton.prop('disabled', true );
            }

           
        },
    
        init: function(){
         
            
           $(document).on('change', productOptionsSelector, productForm.onProductOptionChanged);
           $(document).on('form:change', addToCartFormSelector, productForm.validate)
    
        }
    
      };
    
    
      productForm.init()


    

       

       //-------------------------------------------------------------------------------------------------------


      const filterBtn = document.getElementById('filter-btn')
       
      
if( filterBtn ){
      filterBtn.addEventListener('click', function(event) {

    
  
    
    if (this.hash !== "" ) {
    
      
      event.preventDefault();

      
      var hash = this.hash;

    
      
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 300, function(){

    
        
        window.location.hash = hash;
      });
    } 
    

  
  });

  }

    
    });


