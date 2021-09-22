export default new class MoblieMenu {
    constructor() {
        this.mobileMenu = '.mobile-menu'
        this.burgerBtn = '.btn-burger'
        this.closeMenuBtn = '.btn-close-mobile-menu'
        this.dropdown = '.has-dropdown'

        this.mobileBottomStrip = '.mobile-bottom-strip'
        this.mobileLinksStrip = '.mobile-links-strip'
        this.mobileLangsMenu = '.mobile-langs-menu'

        this.questionBtn = '.btn-question'
        this.chatBtn = '.btn-chat'
        this.langBtn = '.btn-lang'

        this.mobileMenuInit()
        this.mobileMenuCellsInit()

        this.mobileQuestionInit()
        this.mobileChatsIconInit()
        this.mobileLangsInit()

        this.clickOutsideInit()
    }

    mobileMenuInit() {
        const _self = this
        let mobileMenuSelector = document.querySelector(this.mobileMenu),
            burgerSelector = document.querySelector(this.burgerBtn),
            btnCloseSelector = document.querySelector(this.closeMenuBtn)

        burgerSelector.addEventListener('click', (e) => {
            e.preventDefault()

            mobileMenuSelector.classList.toggle('show')
            if(mobileMenuSelector.classList.contains('show')) {
                document.querySelector('body').classList.add('no-scroll')
            } else {
                document.querySelector('body').classList.remove('no-scroll')
            }
        })
        btnCloseSelector.addEventListener('click', (e) => {
            e.preventDefault()
            document.querySelector(_self.mobileMenu).classList.remove('show')
            document.querySelector('body').classList.remove('no-scroll')
        })

    }

    mobileMenuCellsInit() {
        let dropdownSelector = document.querySelectorAll(this.dropdown)
        dropdownSelector.forEach((dropdown) => {
            let cellOpen = dropdown.querySelector('.cell-open')
            let cellClose = dropdown.querySelector('.back-cell')
            let cell = dropdown.querySelector('.dropdown-menu-cell')

            cellOpen.addEventListener('click', (e) => {
                e.preventDefault()
                cell.classList.add('show')
            })

            cellClose.addEventListener('click', (e) => {
                e.preventDefault()
                cell.classList.remove('show')
            })
        })
    }

    mobileChatsIconInit() {
        let chatBtn = document.querySelector(this.mobileBottomStrip + ' ' + this.chatBtn)
        let mobileLinksStrip = document.querySelector(this.mobileLinksStrip)

        chatBtn.addEventListener('click', () => {
            mobileLinksStrip.classList.toggle('show')
            document.querySelector('body').classList.remove('no-scroll')
        })
    }

    mobileQuestionInit() {
        let questionBtn = document.querySelector(this.mobileBottomStrip + ' ' + this.questionBtn)
        questionBtn.addEventListener('click', () => {
            $('#modal-free-quote').modal('show')
            document.querySelector('body').classList.remove('no-scroll')
        })
    }

    mobileLangsInit() {
        let mobileLangsMenu = document.querySelector(this.mobileLangsMenu)
        let langBtn = document.querySelector(this.mobileBottomStrip + ' ' + this.langBtn)

        if (mobileLangsMenu) {
            let btnClose = mobileLangsMenu.querySelector('.btn-close')
            btnClose.addEventListener('click', () => {
                mobileLangsMenu.classList.remove('show')
                document.querySelector('body').classList.remove('no-scroll')
            })
        }

        if (langBtn) {
            langBtn.addEventListener('click', () => {
                mobileLangsMenu.classList.toggle('show')
                if (mobileLangsMenu.classList.contains('show')) {
                    document.querySelector('body').classList.add('no-scroll')
                } else {
                    document.querySelector('body').classList.remove('no-scroll')
                }
            })
        }
    }

    clickOutsideInit() {
        const _self = this
        $(document).mouseup(function (e){ // событие клика по веб-документу
            _self.clickOutside(e, $(_self.mobileLinksStrip), $(_self.mobileBottomStrip + ' ' + _self.chatBtn))
            _self.clickOutside(e, $(_self.mobileMenu), $(_self.mobileBottomStrip + ' ' + _self.burgerBtn))
            _self.clickOutside(e, $(_self.mobileLangsMenu), $(_self.mobileBottomStrip + ' ' + _self.langBtn))
        });
    }

    clickOutside(e, elem, elemBtn) {
        if(!elem.is(e.target) && (elem.has(e.target).length == 0 && elemBtn.has(e.target).length == 0)) {
            elem.removeClass('show')
        }
    }
}