import eventbus from './eventbus';

let isMobile = false

function init() {
    if (document.documentElement.clientWidth < 750) {
        isMobile = true
        eventbus.emit('switchToMobile')
    } else {
        isMobile = false
        eventbus.emit('switchToPC')
    }
}

function checkWidth() {
    if (document.documentElement.clientWidth < 750 && isMobile == false) {
        isMobile = true
        console.log('switchToMobile')
        eventbus.emit('switchToMobile')
    } else if (document.documentElement.clientWidth > 750 && isMobile == true) {
        isMobile = false
        console.log('switchToPC')
        eventbus.emit('switchToPC')
    }
}

export default {
    install(app) {
        init()

        window.onresize = function () {
            checkWidth()
        }             
    }
}