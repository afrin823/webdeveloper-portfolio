const form = document.querySelector("form");
const firstName = document.querySelector("#fistName");
const emailAddress = document.querySelector("#exampleInputEmail1");
const subject = document.querySelector("#exampleInputText");
const comments = document.querySelector("#comments");

form.addEventListener("submit", formHandler);


function formHandler(e){
    e.preventDefault();

    const formInfo = {
        FistName: firstName.value,
        Email: emailAddress.value,
        Subject: subject.value,
        Comments: comments.value
    }

    console.log(formInfo);

    firstName.vlue = "",
    emailAddress.value = "",
    subject.value = "",
    comments.value = ""
}