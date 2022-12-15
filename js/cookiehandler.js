function setCookie(name, value) {
    const d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();

    document.cookie = name + "=" + value + ";" + expires + "; SameSite=Strict";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieList = decodedCookie.split(';');
    for (let i = 0; i < cookieList.length; i++) {
        let c = cookieList[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
// HEAVILY HEAVILY LEARNT AND COPIED FROM https://www.w3schools.com/js/js_cookies.asp


document.addEventListener("DOMContentLoaded", function() {
    if(getCookie("cookiesApproved")){
        return;
    }
    // Check if cookies have already been approved, if so return so code below DOESN'T RUN.

    const modal = new bootstrap.Modal(document.getElementById('cookiesModal'));
    modal.show();
    // Simply bring up the cookies modal popup.

    const modalQuery = document.querySelector('#cookiesModal')
    modalQuery.addEventListener('hidden.bs.modal', event => {
        setCookie('cookiesApproved', "Told you we didn't have trackers.");
        setCookie('theme', "default");
    })
    // Check for the modal to be closed, only possible through the accept button, and add the cookiesApproved cookie.
      
      
});