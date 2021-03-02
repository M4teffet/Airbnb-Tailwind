const lineClamp = require('@tailwindcss/line-clamp')

module.exports = {
    purge: {
        node: 'layers',
        content: ['public/**/*.html'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            spacing: {
                '1/1': '100%',
                '3/4': '75%',
                '2/3': '66.666667%',
                '1/2': '50%',
                '1/4': '25%'
            },
            maxWidth: {
                'xxs': '15rem'
            },
            width: {
                '100': '24rem'
            }
        },
    },
    variants: {
        extend: {
            lineClamp: ["hover"]
        }
    },
    plugins: [require('@tailwindcss/line-clamp')],
}