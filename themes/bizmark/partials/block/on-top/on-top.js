export default new class OnTop {
    constructor() {
        this.button = 'button.on-top'
        this.init()
    }
    init() {
        const self = this
        if(pageYOffset > 300) {
            $(self.button).addClass('show')
        } else {
            $(self.button).removeClass('show')
        }
        $(window).on('scroll', function() {
            if(pageYOffset > 300) {
                $(self.button).addClass('show')
            } else {
                $(self.button).removeClass('show')
            }

        })
        $(this.button).on('click', function() {
            $('html, body').animate({scrollTop:0}, '300');
        })
    }

}