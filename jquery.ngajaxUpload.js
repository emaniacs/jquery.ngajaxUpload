/*
 * jquery.ngajaxUpload.js
 * 
 * Copyright 2013 Ardi <noone.nu1@gmail.com>
 * 
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 * MA 02110-1301, USA.
 * 
 * 
 */

;(function($){
    $.fn.ngajaxUpload = function (opts) {
        var options = $.extend(true,
            {
                after: function(data) {}, // in after scope, "this" is iframe.
                before: function(event) {
                    // return true, so form submitted.
                    // in this scope (before), "this" is the form.
                    return true;
                }
            }
            , opts);

        return this.each(function(index, obj) {
            var iframe = document.createElement('iframe');
            iframe.id  = 'ngajax-upload-iframe';
            iframe.setAttribute('style', 'display:none !important');
            iframe.setAttribute('name', 'ngajax-upload-iframe');
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
