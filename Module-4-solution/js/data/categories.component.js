(function() {
'use strict';

angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'js/data/categoriescomponent.template.html',
    bindings: {
      items: '<'
    }
  });

})();
