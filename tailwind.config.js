import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
        './src/**/*.{html,js}', // Perbaikan jalur
        './public/**/*.blade.php', // Menggunakan ** untuk folder
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                satu: '#028174',
                dua: '#0ab68b',
                tiga: '#92de8b',
                empat: '#ffe3b3',  // Custom color definition
            },
            scrollBehavior: ['smooth'],
        },
    },
    plugins: [
        require('daisyui'),
    ],
    daisyui: {
        themes: ["light", "dark", "cupcake", "cyberpunk", "dim", "dracula"],  // Add your themes here
    },
};
