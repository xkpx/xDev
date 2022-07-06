// ===================================================
// https://pnpm.io/npmrc 
// https://docs.npmjs.com/cli/v8/using-npm/config/
// =================================================== 06.07.2022 
const {execSync} = require('child_process');    
	execSync("set NODE_ENV=production", { stdio: "inherit" }); 
	execSync("pnpm env use --global latest", { stdio: "inherit" });  // nightly=19 nightly=18.4 	
	execSync("pnpm install -P --no-optional @sveltejs/kit@next vite@beta svelte svelte-preprocess @sveltejs/adapter-node@next svelte-adapter-deno javascript-obfuscator rollup-obfuscator express@next dotenv", { cwd: process.cwd(), detached: false, stdio: "inherit" });
	execSync("pnpm prune --no-optional --prod");
	execSync("pnpm store prune", 					{ cwd: process.cwd(), detached: false, stdio: "inherit" }); // Removes store unnecessary packages.
	execSync("pnpm install --fix-lockfile", 		{ cwd: process.cwd(), detached: false, stdio: "inherit" });

/*
	execSync("pnpm uninstall node-pre-gyp -r")				
	execSync("pnpm install @mapbox/node-pre-gyp esbuild-windows-64 chokidar");	// pnp+symlink/false
	execSync("pnpm prune --no-optional --prod");
	execSync("pnpm up --latest --interactive", 		{ cwd: process.cwd(), detached: false, stdio: "inherit" });
	execSync("pnpm outdated", 						{ cwd: process.cwd(), detached: false, stdio: "inherit" }); */
