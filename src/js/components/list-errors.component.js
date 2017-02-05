let ListErrors = {
    // we make a binding with the errors (we have already defined errors in the auth and the list-errors.html template pages)
    bindings: {
        //the = sign, means that the bindining is a two way one
        errors: '='
    },
    templateUrl : 'components/list-errors.html'
}

export default ListErrors;