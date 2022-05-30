import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess(),

    kit: {
        adapter: adapter({
            out: '.build/frontend',
        }),
        csp: {
            mode: 'auto',
            directives: {
                'default-src': ['self'],
                'img-src': ['self'],
                'script-src': ['self', 'unsafe-inline'],
                'style-src': [
                    'self',
                    'fonts.googleapis.com',
                    'fonts.gstatic.com',
                ],
                'style-src-elem': [
                    'self',
                    'fonts.googleapis.com',
                    'fonts.gstatic.com',
                ],
                'font-src': [
                    'self',
                    'fonts.googleapis.com',
                    'fonts.gstatic.com',
                ],
            },
        },
    },
};

export default config;
