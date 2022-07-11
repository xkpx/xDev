import preprocess from 'svelte-preprocess'; // seo opt
import adapter from '@sveltejs/adapter-node';
//import adapter from 'svelte-adapter-deno';
import adapter from 'svelte-adapter-bun';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
        preserve: ['ld+json'],
        sourceMap: false
    }),

	kit: {
		adapter: adapter({ 
            /*
            // NODE
            out: 'xbuild_node',
            precompress: true, // using gzip and brotli for assets and prerendered pages
                envPrefix: 'XKP_' // XKP_HOST , XKP_PORT ... etc
            
            // DENO
            out: 'xbuild_deno', // https://github.com/pluvial/svelte-adapter-deno
            precompress: true, // using gzip and brotli for assets and prerendered pages
            env: {
                path: 'xbuild-deno',
                host: '127.0.0.1',
                port: '8080',
            },
            deps: './xDENO.ts' // (relative to adapter-deno package) -- fix https://github.com/pluvial/svelte-adapter-deno/issues/3
            */

            // BUN
            out: "build",
            envPrefix: "MY_CUSTOM_",
            development: true,
            // precompress: true,
            precompress: {
                brotli: true,
                gzip: true,
                files: ["htm", "html"]
            },
            dynamic_origin: true,
            xff_depth: 1
         })
	},
    csp: {
        mode: 'auto',
        directives: {
          'default-src': undefined
          // ...
        }
    },
    compilerOptions: {
        // =====
        "sourcemap": "false", 
        "enableSourcemap": { js: 0, css: 0, },
        "dev": false, //"dev": process.env.NODE_ENV !== 'production',
        "css": false,
    },
};

export default config;
