;(function($){
    $.fn.ngajaxUpload = function (opts) {
        var options = $.extend(true, {
                after: function(data) {},
                before: function(event) {
                    return true;
                }
            }
            , opts);

        return this.each(function(index, obj) {
            var iframe = document.createElement('iframe');
            iframe.id  = 'ngajax-upload-iframe';
            iframe.setAttribute('style', 'display:none !important');
            document.body.appendChild(iframe);

            obj.target = 'ngajax-upload-iframe';
            $(obj).submit(function(event){
                return options['before'].call(this, event);
            })
            
            $('#ngajax-upload-iframe').on('load', function(a,b,c){
                var res = $(this).contents().text();

                if (typeof(options['after']) == 'function') {
                    options['after'].call(this, res);
                }
            })
        })
    }
})(jQuery)
