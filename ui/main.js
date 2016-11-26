function fun() {
    alert ("Created Sucessfully");
    alert ("Enter Username-user001, Password-12345");
}
var submit = document.getElementById('sub');
submit.onclick = function () {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                alert ('Login Sucessful');
                
            } else if (request.status === 403){
                alert('username password incorrect');
            }
        }
    }; 
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST', 'http://dgvenkatesh.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.strinfigy({username: username, password: password}));
};

