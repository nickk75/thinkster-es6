export default class JWT {
    constructor(AppConstants, $window) {
        'ngInject';

// we have the JWT token we want to access in the AppConstants
        this._AppConstants = AppConstants;
// Access to the angular window access point
        this._$window = $window;
    }

/*
LocalStorage is a variable that follows the window element, so even if the
page is refereshed the data in the localStorage is persisted.
*/

// We save the jwt token in our constants
    save(token) {
        this._$window.localStorage[this._AppConstants.jwtKey] = token;
    }

// return that key if we want to get the token
    get() {
        return this._$window.localStorage[this._AppConstants.jwtKey];
    }

// get rid of the token if we no longer need it
    destroy() {
        this._$window.localStorage.removeItem(this._AppConstants.jwtKey);
    }
}