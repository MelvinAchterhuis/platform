Shopware.Component.register('sw-cms-preview-text-accordion', () => import('./preview'));
/**
 * @private
 * @package buyers-experience
 */
Shopware.Component.register('sw-cms-block-text-accordion', () => import('./component'));


/**
 * @private
 * @package buyers-experience
 */
Shopware.Service('cmsService').registerCmsBlock({
    name: 'text-accordion',
    label: 'Accordion',
    category: 'text',
    component: 'sw-cms-block-text-accordion',
    previewComponent: 'sw-cms-preview-text-accordion',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },
    slots: {
        content: 'accordion',
    },
});
