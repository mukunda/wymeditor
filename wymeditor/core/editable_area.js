Wymeditor.core.EditableArea = function (element) {
    this.element = $(element);
    
    this.init();
}
Wymeditor.core.EditableArea.prototype = Wymeditor.utils.extentPrototypeOf(Wymeditor.core.Observable, {
    commands: {
        wrap: function () {},
        unwrap: function () {}
    },
    
    init: function () {
        this.fireEvent('init');
        this.enable();
        this.fireEvent('postInit');
    },
    
    enable: function () {
        this.fireEvent('enable');
        this.element.attr('contentEditable', true);
    },
    disable: function () {
        this.fireEvent('disable');
        this.element.attr('contentEditable',false);
    },
    exec: function (command, options) {
        
    }
});