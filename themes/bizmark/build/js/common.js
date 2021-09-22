window.$ = window.jQuery = require('jquery');
require('popper.js');
require('bootstrap');

$(() => {
    "use strict";
    require('../../../../modules/system/assets/js/framework')
    require('../../../../modules/system/assets/js/framework.extras')
    require('../../partials/mobile/menu/menu')
    require('../../partials/block/scroller/scroller')
    require('../../partials/block/on-top/on-top')
    require('../../partials/element/mask/phone')
    require('../../partials/form/form-validation')
});
