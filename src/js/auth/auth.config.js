function AuthConfig($stateProvider, $httpProvider) {
  'ngInject';

  // Define the routes
  $stateProvider

  .state('app.login', {
    url: '/login',
    templateUrl: 'auth/auth.html',
    controller: 'AuthCtrl as $ctrl',
    title: 'Sign in',
    resolve : {
      auth: function(User) {
        // they can only access this route if they are not logged in
        // we ensure that they are not logged in
        return User.ensureAuthIs(false);
      }
    }
  })

  .state('app.register', {
    url: '/register',
    templateUrl: 'auth/auth.html',
    controller: 'AuthCtrl as $ctrl',
    title: 'Sign up',
    resolve : {
      auth: function(User) {
        // they can only access this route if they are not logged in
        // we ensure that they are not logged in
        return User.ensureAuthIs(false);
      }
    }
  });

};

export default AuthConfig;