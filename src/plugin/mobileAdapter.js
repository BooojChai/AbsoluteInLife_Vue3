import { ref } from 'vue'

let isMobile = ref(false)
let mobileSize = 820

function init() {
    if (document.documentElement.clientWidth <= mobileSize) {
        isMobile.value = true
    } else {
        isMobile.value = false
    }
}

function checkWidth() {
    if (document.documentElement.clientWidth <= mobileSize && isMobile.value == false) {
        isMobile.value = true
    } else if (document.documentElement.clientWidth >= mobileSize && isMobile.value == true) {
        isMobile.value = false
    }
}

export default {
    install() {
        init()

        window.onresize = function () {
            checkWidth()
        }
    },
    isMobile
}