# TS_Node-Express-quickstart

git clone https://github.com/DisAP332/TS_Node-Express-quickstart.git

npm i

touch .env

add your ports to your .env file respectivly! Template below!
HTTP_PORT = INSERT PORT HERE
HTTPS_PORT = INSERT PORT HERE

# What we did.

The following scripts have been added to package.json for your convience:

    "build": "rimraf dist && npx tsc",
    "prestart": "npm run build",
    "start": "node dist/index.js",
    "predev": "npm run build",
    "serve": "concurrently \"npx tsc -w\" \"nodemon ./dist/index.js\""

Here we use rimraf to delete the dist folder on every rebuild, and then TypeScript recompiles everything into a new dist folder.

- Nodemon is used to watch for any changes made to the files in your project, triggering a build.
- Concurrently allows you to asynchronously run both the NodeScript compiler and Nodemon simultaneously without
  the need to wait for one to finish before moving on.

The tsconfig.json file was edited to specify the outdir to be dist.

The env.d.ts file was added to add types to the .env package.
