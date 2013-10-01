(function($) {
    $.fn.pypi = function(options) {
        if(typeof(options) == 'undefined')
            options = {}

        var package_ = options.package;
        if(typeof(package_) == 'undefined')
            package_ = this.attr("data-package");

        if(typeof(package_) == 'undefined')
            throw "A package-name has not been provided.";

        var package_url = "https://pypi.python.org/pypi/" + package_;
        var parent = this;

        function received(data)
        {
            var name = data.info.name
            var counts = data.info.downloads;
            last_month = counts.last_month * 1;
            last_week = counts.last_week * 1;
            last_day = counts.last_day * 1;

            var html = "<div class=\"pypi-container\">" +
                         "<div class=\"pypi-title\">" +
                            "<em><a href=\"" + package_url + "\" target=\"_blank\">" + name + "</a></em><br />usage" +
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

        var url = package_url + "/json?callback=?";
        $.getJSON(url, received);

        return this;
    };
}(jQuery));

