/**
 * @ngdoc event
 * @name <%= slugifiedModuleName %>.config.route
 * @eventOf <%= slugifiedModuleName %>.config
 * @description
 *
 * Define routes and the associated paths
 *
 * - When the state is `'<%= slugifiedName %>'`, route to <%= slugifiedRoutePath %>
 *
 */
var <%= slugifiedName %> = {
    name: '<%= slugifiedName %>',
    url: '/<%= slugifiedRoutePath %>',
    templateUrl: 'modules/<%= slugifiedModuleName %>/views/<%= slugifiedViewName %>.html',
    controller: '<%= classifiedControllerName %>'
};

$stateProvider
    .state(<%= slugifiedName %>).
