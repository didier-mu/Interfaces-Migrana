$(document).ready(function () {

    /// HEADER

    $(".header--navegacion .btn").on("click", function () {
        $(this).toggleClass("nav-on");
    });


    $("#navbarNav li").on("click", function () {
        var nameLi = $(this).attr("class").replace("li-", "home--");
            nameSection = $("."+nameLi).offset().top - 100;
        
        $("html, body").animate({ scrollTop: nameSection }, 800);
        
        $(".header--navegacion .btn").removeClass("nav-on");
        $(".navbar-collapse").removeClass("show");
        
        $("#navbarNav li").removeClass("activo");
        $(this).addClass("activo");
    });


    // CARRUSEL ESTAR

    $('#carrusel-estar').owlCarousel({
        autoplay: false,
        nav: true,
        loop: false,
        responsive: {
            0: {
                items: 1,
                dots: true,
                onDragged: callback
            },
        
            996: {
                items: 2,
                dots: false,
                mouseDrag: false
            }
        }
    });

    function callback(event) {
        if ($('#carrusel-estar').find(".owl-item:nth-child(2)").hasClass("active")) {
            $("#carrusel-estar").addClass("carrusel-estar-2");
        }

        else {
            $("#carrusel-estar").removeClass("carrusel-estar-2");
        }
    };


    $('#carrusel-estigmas').owlCarousel({
        autoplay: false,
        dots: true,
        nav: true,
        items: 1,
        loop: false,
        responsive: {
            
            996: {
                items: 3,
                slideBy: 3
            }
        }
    });


    $('#carrusel-recorrido').owlCarousel({
        autoplay: false,
        dots: true,
        nav: true,
        items: 1,
        loop: false,
        responsive: {
            
            996: {
                items: 3,
                slideBy: 3
            }
        }

    });



    // FORMULARIO
    
    $(".home--busqueda--form label").on("click", function () {
        if ( $(this).find("input").attr("checked")) {
            $(this).find("input").removeAttr("checked");    
        }

        else {
            $(this).find("input").attr("checked","checked");
        }
        
    });


    $(".home--busqueda--form select").on("change", function () {
        $(".home--busqueda .btn-on").parent().attr({ "href": $(this).val(),"target":"_blank" });
    });

    $(".home--busqueda .btn-on").on("click", function () {

        
        if ($(".home--busqueda--form select").val() == null) {
            alert("Elige un estado ");
        }

        else {

            if ( $(".checkbox[checked]").length == 2 ) {
                return true;
            }
    
            else{
                alert("Acepta nuestros Términos y Aviso de Privacidad");
                return false;
            }
        }
        
    });

    
    /// ORDEN CADA DIA

    function ordenDia() {
        if ($(window).width() > 996) {
            $(".home--final--copy").append($(".home--final--col h4"));
        }
    
        else {
            $(".home--final--col").append($(".home--final--col h4"));
        }
    }

    ordenDia();

    $(window).on('resize', function() {
        ordenDia();
    });
    

    var posSection = $("section");

        $(document).scroll(function () {
            posSection.each(function () {
                var posRow = $(this).offset().top - 500;
                var scrolleo = $(window).scrollTop();
                var nameLi = $(this).attr("class").replace("home--", "li-");

                if (scrolleo > posRow) {
                    $("#navbarNav li").removeClass("activo");
                    $("."+nameLi).addClass("activo");
                }
        });
    });
  
    
});

    

