import { defineComponent } from 'vue'

let isScrolling = false
let timer: number

export default defineComponent({
    scrollTo: function(end = 0) {
        if (!isScrolling) {
            isScrolling = true

            timer = setInterval(() => {
                let curTop = document.documentElement.scrollTop || document.body.scrollTop
                curTop -= (curTop - end) / 16.7

                document.documentElement.scrollTop = document.body.scrollTop = curTop

                if (curTop <= end) {
                    clearInterval(timer)
                    isScrolling = false
                }
            }, 16.7);
        }
    },

    cancelScroll: function() {
        if (isScrolling) {
            clearInterval(timer)
            isScrolling = false
        }
    }
})