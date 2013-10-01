(function($) {
    $.fn.pypi = function(options) {
        if(typeof(options) == 'undefined')
            options = {}
    
        var settings = $.extend({
            // These are the defaults.
            containerClass: "",
        }, options);

        containerClass = settings.containerClass;
        var parent = this;

        function received(data)
        {
            var name = data.info.name
            var counts = data.info.downloads;
            last_month = counts.last_month * 1;
            last_week = counts.last_week * 1;
            last_day = counts.last_day * 1;

            var html = "<div class=\"pypi-container " + containerClass + "\">" +
                         "<div class=\"pypi-title\">" +
                            "<em>" + name + "</em><br />usage" +
                         "</div>" +
                         "<div class=\"pypi-row\">" + 
                           "<div class=\"pypi-label\">" +
                             "Last Day:" +
                           "</div>" +
                           "<div class=\"pypi-count\">" +
                             last_day +
                           "</div>" +
                           "<div class=\"pypi-float-stop\"></div>" +
                         "</div>" +
                         "<div class=\"pypi-row\">" + 
                           "<div class=\"pypi-label\">" +
                             "Last Week:" +
                           "</div>" +
                           "<div class=\"pypi-count\">" +
                             last_week +
                           "</div>" +
                           "<div class=\"pypi-float-stop\"></div>" +
                         "</div>" +
                         "<div class=\"pypi-row\">" + 
                           "<div class=\"pypi-label\">" +
                             "Last Month:" +
                           "</div>" +
                           "<div class=\"pypi-count\">" +
                             last_month +
                           "</div>" +
                           "<div class=\"pypi-float-stop\"></div>" +
                         "</div>" +
                       "</div>";

            parent.html(html);
        }

        var url = settings.url;
        if(typeof(url) == 'undefined')
            url = this.attr("data-url");

        if(typeof(url) == 'undefined')
            throw "A URL has not been provided.";

        url += "/json?callback=?";
        $.getJSON(url, received) .done(function( json ) {
console.log( "JSON Data: " + json.users[ 3 ].name );
})
.fail(function( jqxhr, textStatus, error ) {
var err = textStatus + ", " + error;
console.log( "Request Failed: " + err );
});

        return this;
    };
}(jQuery));

