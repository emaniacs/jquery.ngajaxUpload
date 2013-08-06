;(function($){
    $.fn.ngajaxUpload = function (opts) {
        var options = $.extend(true, {
                callback: function(data) {
                    console.log(data);
                }
            }, opts);

        return this.each(function(index, obj) {
            var iframe = document.createElement('iframe');
            iframe.id  = 'ngajax-upload-iframe';
            iframe.setAttribute('style', 'display:none !important');
            document.body.appendChild(iframe);

            obj.target = 'ngajax-upload-iframe';
            $('#ngajax-upload-iframe').on('load', function(a,b,c){
                var res = $(this).contents().text();

                if (typeof(options['callback']) == 'function') {
                    options['callback'].call(this, res);
                }
            })
        })
    }
})(jQuery)
