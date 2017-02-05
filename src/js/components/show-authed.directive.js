function ShowAuthed(User) {
  'ngInject';


  return {
    // restricting this to just attributes ('A')
    restrict: 'A',
    // The 'link' element gives us the ability to manipulate the dom elements and make changes
    link: function(scope, element, attrs) {
      scope.User = User;

// watches the scope.user variable for changes
// When there is a change, the function(val) callback, provides the new value
      scope.$watch('User.current', function(val) {
          // If val (user) detected, it means they are logged in
          if (val) {
            // Display the attributes, if user detected
            if (attrs.showAuthed === 'true') {
              element.css({ display: 'inherit'})
            } else {
              element.css({ display: 'none'})
            }

          // If no val (user) detected, it means they are not logged in
          } else {
            if (attrs.showAuthed === 'true') {
              // hide the content if no val in the callback
              element.css({ display: 'none'})
            } else {
              element.css({ display: 'inherit'})
            }
          }
      });

    }
  };
}

export default ShowAuthed;
