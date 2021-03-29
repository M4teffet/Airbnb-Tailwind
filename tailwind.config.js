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
                '2/2': '90%',
                '3/4': '75%',
                '2/3': '66.666667%',
                '3/5': '60%',
                '1/2': '50%',
                '2/5': '40%',
                '1/3': '33.333334%',
                '1/4': '25%'
            },
            maxWidth: {
                'xxs': '15rem'
            },
            width: {
                '100': '24rem'
            },
            height: {
                '100': '26.5rem'
            },
            fontSize: {
                '4xlp': '2.7rem'
            }
        },
    },
    variants: {
        extend: {
            lineClamp: ['hover'],
            display: ['group-hover'],
            backgroundColor: ['checked'],
            borderColor: ['checked'],
        }
    },
    plugins: [require('@tailwindcss/line-clamp')],
}