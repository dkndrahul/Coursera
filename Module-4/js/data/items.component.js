(function() {
'use strict';

angular.module('MenuApp')
  .component('items', {
    templateUrl: 'js/data/templates/itemscomponent.template.html',
    bindings: {
      items: '<'
    }
  });

})();
