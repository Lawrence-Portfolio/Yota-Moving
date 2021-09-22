export default new class Scroller {
    constructor() {
        this.scroller = '.scroller'
        this.showChats = 'button#show-chats'
        this.chatsLinks = '.chats-links'

        this.init()
    }

    init() {
        const _self = this
        $(this.showChats).on('click', function() {
            $(_self.chatsLinks).toggleClass('show')
        })
        $(document).mouseup(function (e) {
            let scroller = $(_self.scroller)
            if (scroller.has(e.target).length === 0){
                scroller.find(_self.chatsLinks).removeClass('show')
                // self.checkStatus($(self.menu))
            }
        })
    }
}