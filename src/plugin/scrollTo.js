var isScrolling = false
var timer

export default{
    scrollTo: function(end = 0, cb) {
        if (!isScrolling) {
            isScrolling = true

            timer = setInterval(() => {
                let curTop = document.documentElement.scrollTop || document.body.scrollTop
                curTop -= (curTop - end) / 16.7

                document.documentElement.scrollTop = document.body.scrollTop = curTop

                if (curTop <= end) {
                    clearInterval(timer)
                    isScrolling = false
                    cb? cb() : null
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
}