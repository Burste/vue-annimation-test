/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
export default {
    content: ['./index.html', './src/**/*.{js,vue}'],
    theme: {
        extend: {
            colors: {
                'portal-light-coffee': '#8f7052',
                'portal-coffee': '#211a1e',
                'portal-black': '#1a1a1a',
            },
        },
    },
    plugins: [
        plugin(({ matchUtilities, theme }) => {
            matchUtilities(
                {
                    'translate-z': (value) => ({
                        '--tw-translate-z': value,
                        transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
                    }), // this is actual CSS
                },
                { values: theme('translate'), supportsNegativeValues: true }
            );
        }),
    ],
};
