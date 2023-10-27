/**
 * @private
 * @package buyers-experience
 */
Shopware.Component.register('sw-cms-el-preview-accordion', () => import('./preview'));
/**
 * @private
 * @package buyers-experience
 */
Shopware.Component.register('sw-cms-el-config-accordion', () => import('./config'));
/**
 * @private
 * @package buyers-experience
 */
Shopware.Component.register('sw-cms-el-accordion', () => import('./component'));

Shopware.Service('cmsService').registerCmsElement({
    name: 'accordion',
    label: 'Accordion',
    component: 'sw-cms-el-accordion',
    configComponent: 'sw-cms-el-config-accordion',
    previewComponent: 'sw-cms-el-preview-accordion',
    defaultConfig: {
        accordion: {
            source: 'static',
            value: []
        },
        firstItemOpen: {
            source: 'static',
            value: false
        }
    }
});
