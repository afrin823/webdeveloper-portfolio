function loadUser(){
     fetch('Data/project.json')
     .then(res => res.json())
     .then(data => console.log(data))
 }
 loadUser()