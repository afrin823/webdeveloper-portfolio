// ---------- portfolio project start ------------
function loadProject(){
    fetch('../Data/project.json')
    .then(res => res.json())
    .then(data => displayProject(data))
}
loadProject();

function displayProject(data) {
    const allProject = document.getElementById('project')

    for(const protfolio of data){
        const div = document.createElement('div');
        div.innerHTML = `
    
        
          <div class="item">
          <img src="${protfolio.images}" class="img-fluid mb-4 shadow" alt="">
          <span><i class="fa-solid fa-plus"></i></span>
        </div>
   
    
    

  
        `;
        allProject.appendChild(div);
    }
}
// ---------- portfolio project End ------------
//===============================================
// ---------- contact from start -----------------
const form = document.querySelector('form');
const firstName = document.querySelector('#fistName');
const emailAddress = document.querySelector('#exampleInputEmail1');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');

form.addEventListener('submit', formHandler);


function formHandler(e){
    e.preventDefault();

    const formInfo = {
        FistName: firstName.value,
        Email: emailAddress.value,
        Subject: subject.value,
        Message: message.value
    }

    console.log(formInfo);

    firstName.value = '',
    emailAddress.value = '',
    subject.value = '',
    message.value = ''
}
// ---------- contact from end ------------