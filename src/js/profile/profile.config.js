function ProfileConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.profile', {
    url: '/@:username',
    controller: 'ProfileCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'profile/profile.html',
    /*
    It makes a lot of sense in using resolve here, as we only load the
    user data ones, as if they want to edit their profile,
    they have to go to another page.
    */
    resolve: {
        profile: function(Profile, $state, $stateParams) {
            // stateParams is the way we access the different users after @
            return Profile.get($stateParams.username).then(
                // if it's successful we return profile
                // with arrow functions es6, we don't need to even write return
                (profile) => profile,
                // if it's an incorrect handle, we redirect to the homepage
                (err) => $state.go('app.home')
                );
            }
        }
    });

};

export default ProfileConfig;
