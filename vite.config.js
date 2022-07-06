import { sveltekit } from '@sveltejs/kit/vite'
import { obfuscator } from 'rollup-obfuscator'; // obfs

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
        sveltekit(),
        obfuscator({  // https://github.com/javascript-obfuscator/javascript-obfuscator
            // Check a11y first then crypt !
            compact: true,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            deadCodeInjection: true,
            deadCodeInjectionThreshold: 1,
            // debugProtection: true,
            // debugProtectionInterval: 4000,
            disableConsoleOutput: true,
            identifierNamesGenerator: 'hexadecimal',
            log: false,
            numbersToExpressions: true,
            renameGlobals: false,
                selfDefending: false,                 // Fatal JavaScript invalid size error 184071938
            simplify: true,
            splitStrings: true,
            splitStringsChunkLength: 5,
            stringArray: true,
            stringArrayCallsTransform: true,
            stringArrayEncoding: ['rc4'],
            stringArrayIndexShift: true,
            stringArrayRotate: true,
            stringArrayShuffle: true,
            stringArrayWrappersCount: 5,              //  High performance = 1  High obfuscation = 5 
            stringArrayWrappersChainedCalls: true,    
            stringArrayWrappersParametersMaxCount: 5,
            stringArrayWrappersType: 'function',
            stringArrayThreshold: 1,
            transformObjectKeys: true,
            unicodeEscapeSequence: false,
            
            include: [
                'src/routes/*.svelte' //''
            ],
            sourceMap: false,
            global: false
        }),
    ]
};

export default config;
