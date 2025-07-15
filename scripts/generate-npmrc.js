const fs = require('fs');

const npmrcContent = `\
# Default registry for public npm packages
registry=https://registry.npmjs.org/

# Use GitHub Packages for the scoped organization
@tabski-organization:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${process.env.GH_TOKEN}
`;

fs.writeFileSync('.npmrc', npmrcContent);
console.log('.npmrc file written for Vercel build');
