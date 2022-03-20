$(document).ready(function(){
    
    var player = 1;


    $('.square').on('click', function(event) {
        
        var squareSelected = $(this);

        //We are going to check if the player already added one of the class in the square
        //Jquery has a method of lcass

        if(squareSelected.hasClass('fa-solid fa-x') || squareSelected.hasClass('fa-regular fa fa-circle')){
           alert('This square has already been selected! Please select another.')
        }else{
            //all the rest of our logic 
            //clicked on the square whether they have element in the class or not
            if(player === 1){
                squareSelected.addClass('fa-solid fa-x');
                if(checkIfPlayerWon('fa-solid fa-x')){
                    alert('Congrats! Player' + player + 'has won!' );
                } else{
                    player = 2;
                }
               
            } else{
                squareSelected.addClass('fa-regular fa fa-circle');
                if(checkIfPlayerWon('fa-regular fa fa-circle')){
                    alert('Congrats! Player' + player + 'has won!' );
                } else{
                    player = 1;
                }
            }      
        }
    });

    function checkIfPlayerWon(symbol){

        if($('.sq1').hasClass(symbol) && $('.sq2').hasClass(symbol) && $('.sq3').hasClass(symbol)){
            return true;
        } else if($('.sq4').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq6').hasClass(symbol)){
            return true;
        } else if ($('.sq7').hasClass(symbol) && $('.sq8').hasClass(symbol) && $('.sq9').hasClass(symbol)){
            return true;
        }
        else if($('.sq1').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq7').hasClass(symbol)){
            return true;
        } else if ($('.sq2').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq8').hasClass(symbol)){
            return true;
        }
        else if($('.sq3').hasClass(symbol) && $('.sq6').hasClass(symbol) && $('.sq9').hasClass(symbol)){
            return true;
        } else if ($('.sq1').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq9').hasClass(symbol)){
            return true;
        }
        else if ($('.sq3').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq7').hasClass(symbol)){
            return true;
        }
        
        
        else{
            return false;
        }

       

    }
    
});