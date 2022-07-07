import cookie from 'js-cookie'

function saveCookie(key, value){
    cookie.set(key, value);
}

function getCookie(key) {
    return cookie.get(key);
}

export default {
    saveCookie,
    getCookie,
}