import template from './sw-cms-el-accordion.html.twig';
import './sw-cms-el-accordion.scss';

const { Mixin } = Shopware;

/**
 * @private
 * @package buyers-experience
 */
export default {
    template,

    mixins: [
        Shopware.Mixin.getByName('cms-element'),
    ],

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('accordion');
        }
    }
};
