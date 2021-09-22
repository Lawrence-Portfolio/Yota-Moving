export default new class Dignity {
    constructor() {
        // this.dignityBlock = '.dignity-section'
        this.dignityContent = '.dignity-content'
        this.numberAnimation = '.number-animation'
        this.animationPlayed = false

        this.init()
    }
    init() {
        const _self = this
        this.checkScreenPosition()
        document.addEventListener('scroll', e => {
            _self.checkScreenPosition()
        })
    }
    animationInit() {
        const _self = this
        $(this.numberAnimation).each(function() {
            let elem = $(this)[0]
            let num = Number(elem.getAttribute('num-data'))
            let step = Number(elem.getAttribute('data-step'))
            let duration = Number(elem.getAttribute('data-duration'))
            let delay = Number(elem.getAttribute('data-delay'))
            setTimeout(() => {
                elem.classList.remove('hidden')
                elem.classList.add('show')
                _self.animationNum(elem, num, step, duration)
                _self.animationPlayed = true
            }, delay)
        })
    }
    animationNum(elem, num, step, duration) {
        let n = 0
        let t = Math.round(duration / (num / step))
        let interval = setInterval(() => {
            n = n + step
            if(n == num) {
                clearInterval(interval)
            }
            elem.innerHTML = n;
        }, t)
    }
    checkScreenPosition() {
        let yes = parseInt($(this.dignityContent).offset().top) - window.innerHeight
        let s_top = scrollY
        if(s_top > yes && !this.animationPlayed){
            this.animationInit()
        }
    }
}