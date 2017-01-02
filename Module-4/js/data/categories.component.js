(function() {
'use strict';

angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'js/data/templates/categoriescomponent.template.html',
    bindings: {
      items: '<'
    }
  });

})();
