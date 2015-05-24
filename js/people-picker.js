    
HBS.UI.addModule('people-picker', function(context) {

    var require = context.getGlobal('require');
    var $ = context.getGlobal('jQuery');

    function autocompleteQuery(params, callback) {
        var data = {results:[]};
        context.autocomplete(params.term, function(results) {
        	data.results = results;
            callback(data);
        });
    }
    
    return {
        init: function() {

            /* jshint ignore:start */
            context.autocomplete = eval(context.getConfig('autocomplete'));
            /* jshint ignore:end */

            var libs = ['https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.0/js/select2.js',
                        'css!https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.0/css/select2.css'];

            require(libs, function() {
                $("select", context.element).each(function() {
                    var el = this;

                    $.fn.select2.amd.require(['select2/data/array', 'select2/utils'], function(ArrayData, Utils) {
                        function CustomData($element, options) {
                            CustomData.__super__.constructor.call(this, $element, options);
                        }

                        Utils.Extend(CustomData, ArrayData);

                        CustomData.prototype.query = autocompleteQuery;

                        var options = {};
                        if (context.autocomplete) options.dataAdapter = CustomData;
                        $(el).select2(options);
                    });

                });
            });
        }
    };

});

