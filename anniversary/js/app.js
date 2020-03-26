;(function($){
    var createClouds = function() {
        var clouds = [
                {top: 100, offset: 252, css_class: "cloud-1", delay: .8},
                {top: 100, offset: -352, css_class: "cloud-3", delay: 1},
                {top: 880, offset: -400, css_class: "cloud-4", delay: .6},
                {top: 1040, offset: 370, css_class: "cloud-6", delay: .9},
                ];
        $.each(clouds, function(index, cloud) {
            var $cloud = $("<div>").addClass("clouding").
            addClass(cloud.css_class).
            addClass("cloud").
            attr("id", "cloud-" + index).
            css("top", "" + cloud.top + "px").
            css("margin-left", "" + cloud.offset + "px");
            $("body").append($cloud);
    
            $(window).scroll(function() {
                $cloud.css({
                    top: function(index, value) {
                             return (cloud.top - $(window).scrollTop() * cloud.delay);
                         }
                });
            });
        });
    }
    var setNavItem = function() {
        var scrollTop = $(window).scrollTop();     
        var scenarioIndex = Math.floor(scrollTop / 750);
        if (scenarioIndex < 0) scenarioIndex = 0;
        if (scenarioIndex > 6) scenarioIndex = 6;

        $('#navigator li').removeClass("selected");
        $('#navigator li').eq(scenarioIndex).addClass("selected");
    };
    var selectNavItem = function() {
        $("#navigator li").click(function(e) {
            var scenarioId = $(this).find('a').attr('href');
            var $scenario = $(scenarioId);
            var scenarioHeight = 0;
            if (scenarioId == '#scenario-marriage') scenarioHeight = $scenario.height();
            $('html, body').animate({
                scrollTop: $scenario.offset().top + scenarioHeight
            }, 1000);

            e.preventDefault();
            return false;
        });
    };
    var land = function() {
        var scrollTop = $(window).scrollTop();
        var height = $(document).height();
        if(height - scrollTop < 700) {
            $('#protagonists').removeClass('soaring');
            $('#balloons').removeClass('swinging');
            
        } else {
            $('#protagonists').addClass('soaring');
            $('#balloons').addClass('swinging');
        }
    };
    $(window).scroll(function(){
        setNavItem();    
        land();
    });
    createClouds();
    selectNavItem();
})(jQuery);
