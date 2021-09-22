
import { tns } from 'tiny-slider/src/tiny-slider'

export default new class ReviewsSlider {
    constructor() {
        this.slider = '#reviews-slider'
        this.init()
    }
    init() {
        tns({
            container: this.slider,
            // items: 2,
            loop: false,
            navPosition: 'bottom',
            controlsText: [
                `
                <svg class="svg-icon angle-down-icon" width="11" height="18">
                    <use xlink:href="/themes/bizmark/assets/img/svg/sprite.svg#angle-left-icon"/>
                </svg>
                `,
                `
                <svg class="svg-icon angle-down-icon" width="11" height="18">
                    <use xlink:href="/themes/bizmark/assets/img/svg/sprite.svg#angle-right-icon"/>
                </svg>
                `
            ],
            responsive: {
                0: {
                    items: 1 
                },
                992: {
                    items: 2
                }
            }
        });
    }
}