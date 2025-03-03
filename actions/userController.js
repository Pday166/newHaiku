"use server"
export const register = async function(prevState, formData) {
    const errors = {

    }
     
    const ourUser = {
        username: formData.get('username'),
        password: formData.get('password')
    }

    if (typeof ourUser.username !== 'string') ourUser.username = ''
    if (typeof ourUser.password !== 'string') ourUser.password = ''

    ourUser.username = ourUser.username.trim()
    ourUser.password = ourUser.password.trim()

    if (ourUser.username.length < 3) errors.username = 'Username must be at least 3 characters';
    if (ourUser.username.length > 30) errors.username = 'Username must be less than 30 characters';
    // if (!isAlphaNumeric(ourUser.username)) {errors.username = 'Username must be alphanumeric'}
    if (!ourUser.username.length) errors.username = 'Please provide a Username';

    if (ourUser.password.length < 8) errors.password = 'Password must be at least 8characters';
        if (ourUser.password.length > 30) errors.password = 'Password must be less than 30 characters';
        if (!ourUser.password.length) errors.password = 'Please provide a Password';

    if (errors.username || errors.password) {
        return {
            errors: errors, 
            success: false
        }
        
    }
    // storing new user in database
    // log the user in by setting a cookie
return {
    success: true,
    name: ourUser.username,
    psswrd: ourUser.password
}

}