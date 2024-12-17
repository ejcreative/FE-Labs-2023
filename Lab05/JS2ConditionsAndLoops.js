
var loggedIn = false;
var attempts = 0;
var maxAttempts = 3;

while (!loggedIn) {

    var username = prompt('Username:');

    var password = prompt('Password:');

    if (username == 'samy123' && password == '12345') {

        alert('Welcome back, ' + username);

        loggedIn = true;

    } else {
        attempts++
        if(attempts < maxAttempts) {
            alert('Innacurate Information. You have ' + (maxAttempts - attempts) + ' attempts left.')
        }
    }
    if(!loggedIn) {
    alert('Too many log in attempts!')  
    }

}


// We could also add a login attempt count that would enable the user to only 
// enter the incorrect credentials a certain number of times before displaying a message like 
// "You are locked out" and ending the loop. 

// Challenge:  See if you can figure out how to implement this feature, using the above code as a starting point.
