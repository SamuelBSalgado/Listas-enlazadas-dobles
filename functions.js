function timedSuccessMessage(){
    return setTimeout(deleteTimedMessage, 1000);
}
function deleteTimedMessage(){
    showSection.innerHTML = '';
}