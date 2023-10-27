import template from './sw-cms-el-config-accordion.html.twig';
import './sw-cms-el-config-accordion.scss';

const { Mixin } = Shopware;

/**
 * @private
 * @package buyers-experience
 */
export default {
    template,

    mixins: [
        Mixin.getByName('cms-element'),
    ],

    created() {
        this.createdComponent();
    },

    computed: {
        items() {
            return this.element.config.accordion.value.sort((a,b) => (a.position > b.position) ? 1 : ((b.position > a.position) ? -1 : 0))
        },

        highestPosition() {
            if (!this.element.config.accordion.value.length) {
                return 0;
            }
            return Math.max(...this.element.config.accordion.value.map((item) => item.position))
        }
    },

    methods: {
        createdComponent() {
            this.initElementConfig('accordion');
        },

        addItem() {
            let position = this.highestPosition + 1;
            this.element.config.accordion.value.push({
                header: "Lorem ipsum" + " " + position,
                body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore",
                position: position
            });
        },

        move(item, direction) {
            let newPosition = item.position + direction;

            this.element.config.accordion.value.filter((item) => item.position === newPosition).forEach((item) => {
                item.position = item.position - direction;
            });
            item.position = newPosition;
        },

        moveUp(item) {
            this.move(item, -1);
        },

        moveDown(item) {
            this.move(item, 1);
        },

        removeItem(item) {
            this.element.config.accordion.value.forEach((item) => {
                if (item.position > item.position) {
                    item.position -= 1;
                }
            });
            this.element.config.accordion.value.splice(this.element.config.accordion.value.indexOf(item), 1)[0];
        }
    }
};
