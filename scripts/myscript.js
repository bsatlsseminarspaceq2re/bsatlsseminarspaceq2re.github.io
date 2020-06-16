function change() {
    console.log('change');
    document.body.style = "background-color: red";
    document.getElementsByTagName('h3')[0].innerText = 'PWNED';
}

setTimeout(change, 500);
