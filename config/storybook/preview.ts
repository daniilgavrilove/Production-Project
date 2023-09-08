import type { Preview } from '@storybook/react';
import { ThemeDecorator } from '../../src/shared/config/storybook/decorators/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/decorators/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/decorators/StyleDecorator';

export const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },

    },
    decorators: [ThemeDecorator, RouterDecorator, StyleDecorator],

};

export const globalTypes = {
    scheme: {
        name: 'Scheme',
        description: 'Select dark or light scheme',
        defaultValue: 'both',
        toolbar: {
            icon: 'mirror',
            items: ['light', 'dark', 'both'],
            dynamicTitle: true,
        },
    },
};
