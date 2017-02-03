class SettingsCtrl {
  constructor(User, $state) {
    'ngInject';

    this._User = User;
    this._$state = $state;

// We are connecting the users data in the back end with
// whats been displayed on the form
    this.formData = {
       email: User.current.email,
       bio: User.current.bio,
       image: User.current.image,
       username: User.current.username
    }

// We have that functionality in user.logout()
// we are binding it because, this logout button needs
// to have access to the user, it needs to know where the user
// actually is, to invoke it.

/* We could have also done this by creating a logout() {
 this._User.logout}*/
    this.logout = User.logout.bind(User);

  }

// We are doing a put request to the server back end to update the fields
// that we are targeting for the update
    submitForm() {
    this.isSubmitting = true;
    this._User.update(this.formData).then(
      (user) => {
        // Redirect them to their profile after the profile update is complete
        this._$state.go('app.profile', {username:user.username});
      },
      (err) => {
        this.isSubmitting = false;
        this.errors = err.data.errors;
      }
    )
  }

}


export default SettingsCtrl;