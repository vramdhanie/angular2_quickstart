(function(app){
    app.AppComponent =
        ng.core.Component({
            selector: 'my-app',
            template: '<h1>My Angular 2 Application</h1>'
        })
        .Class({
            constructor: function(){}
        });
})(window.app || (window.app = {}));