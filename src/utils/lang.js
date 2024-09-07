export const changeLangs = (lang) => {
    if (lang) {
        localStorage.setItem('lang', lang)
    }
}

export const getLang = () => {
    return localStorage.getItem('lang') || 'eng'
}

export const getChangeLanguage = () => {
    switch (localStorage.getItem('lang')) {
        case 'uz':
            return 'Uzbek';
        case 'eng':
            return 'English';
        default:
            return 'Русский';
    }
}
