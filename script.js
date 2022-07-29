function confirmPassword() {
    const password = document.querySelector('input[name=pwd]');
    const confirm = document.querySelector('input[name=pwd_confirm]');

    const confirmText = document.getElementById('pwd_match');
    const style = password.value === confirm.value ? "2px solid green" : "2px solid red";
    const matchMsg = password.value === confirm.value ? "Passwords match" : "*Passwords do not match";
    const msgColour = password.value === confirm.value ? "green" : "red";

    password.style.border = style;
    confirm.style.border = style;
    confirmText.textContent = matchMsg;
    confirmText.style.color = msgColour;
}