// scripts/generate-npmrc.mjs
import { writeFile } from 'fs/promises';

const npmrcContent = `\
# Default registry for public npm packages
registry=https://registry.npmjs.org/

# Use GitHub Packages for the scoped organization
@tabski-organization:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${process.env.GH_TOKEN}
`;

await writeFile('.npmrc', npmrcContent);
console.log('.npmrc file written for Vercel build');
