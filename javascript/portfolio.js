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