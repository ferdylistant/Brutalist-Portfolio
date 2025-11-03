export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.jsx",
        "./resources/**/*.js",
    ],
    theme: {
        extend: {
            fontFamily: {
                brutal: ['Anton', 'Impact', 'Arial Black', 'sans-serif'],
            },

            colors: {
                brutal: {
                    red: '#ff0044',
                    yellow: '#ffe600',
                    black: '#111',
                    white: '#f5f5f5',
                    blue: '#0011ff',
                },
            },
        },
    },
    extend: {
        textShadow: {
            brutal: '4px 4px 0 #000',
        },
        boxShadow: {
            brutal: '8px 8px 0 #000',
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.text-outline': {
                    '-webkit-text-stroke': '2px black',
                    'color': 'transparent',
                },
            });
        },
    ],
};
