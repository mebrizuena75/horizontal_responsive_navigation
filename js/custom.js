$(document).ready(
        function() {

            //Determinando el ancho del slide
            var width = 100 * $('section').size();
            $('#wrapper').css('width', width + 'vw');



            //Navigacion (Links)
            $('nav a').click(
                    function() {
                        var index = $("nav a").index(this) + 1;
                        try {
                            $("nav a").removeClass('active');
                            $(this).addClass('active');
                            $('body').scrollTo($('section:nth-child(' + index + ')'), 300, {'axis': 'x'});

                            //var margin = (index -1) * (100);
                            //$('#wrapper').css('margin-left','-'+margin+'vw');	
                        }
                        catch (error) {
                            console.log(error);
                        }
                        return false;
                    }

            );

            //Navegación Swipe
            $('section').on("swipeleft", function(event) {
                var index = $("section").index(this) + 2;
                try {
                    $('nav ul li:nth-child(' + index + ') a').click();
                }
                catch (error) {
                    console.log(error);
                }
            });
            $('section').on("swiperight", function(event) {
                var index = $("section").index(this);
                try {
                    $('nav ul li:nth-child(' + index + ') a').click();
                }
                catch (error) {
                    console.log(error);
                }
            });

            //Arranco en la home (util para el reload)
            $('nav ul li:nth-child(1) a').click();


        }
);

//Prevengo el modelo por defecto para touchscreen.
function blockMove() {
    event.preventDefault();
}