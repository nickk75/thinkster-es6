/*
Interpretors, allow you to edit the data before it's displayed on the DOM
You can access it and edit the json straight from the server
*/
function authInterceptor(JWT, AppConstants, $window, $q) {
    'ngInject';

// returning an object with the interceptor
    return {
        // automatically attach Authorization header
        request: function(config) {
            // We check if the config passed through the function matches
            // the api value in our constants
            // then we see if there is a token
            if(config.url.indexOf(AppConstants.api) === 0 && JWT.get()) {
                // if that's true then we add those values to the config json
                config.headers.Authorization = 'Token ' + JWT.get();
            }
            return config;
        },

        //handle 401 errors
        responseError: function(rejection){
            // this logs out the user
            if (rejection.status === 401) {
                // clear any JWT token being stored
                JWT.destory();
                // do a hard page refresh
                $window.location.reload();
            }
            // reject the promise
            return $q.reject(rejection);
        }
    }
}

export default authInterceptor;