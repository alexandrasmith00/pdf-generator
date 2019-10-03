const fs = require('fs');
const directory = `templates/${process.argv[2]}`;

const pugFile =
`doctype html
html
  head
    style
      include styles.scss
  body
    include template.pug
    script(src='/script.js')
`;

const dataFile =
`module.exports = {
  // data goes here...
};`;

const configFile =
`const data = require('./data');

module.exports = {
  locals: data
};`;

const stylesFile =
`h1 {
  color: red
}`;

const templateFile =
`//- Keep this line for correctly building PDFs
style(type="text/css") !{compiledStyle}

h1 Edit template here...`;

if (!fs.existsSync(directory)){
  fs.mkdirSync(directory);

  fs.writeFile(`${directory}/index.pug`, pugFile, () => {
    console.log(`Successfully wrote ${directory}/index.pug`);
    fs.writeFile(`${directory}/data.js`, dataFile, () => {
      console.log(`Successfully wrote ${directory}/data.js`);
      fs.writeFile(`${directory}/pug.config.js`, configFile, () => {
        console.log(`Successfully wrote ${directory}/pug.config.js`);
        fs.writeFile(`${directory}/script.js`, '', () => {
          console.log(`Successfully wrote ${directory}/script.js`);
          fs.writeFile(`${directory}/styles.scss`, stylesFile, () => {
            console.log(`Successfully wrote ${directory}/styles.scss`);
            fs.writeFile(`${directory}/template.pug`, templateFile, () => {
              console.log(`Successfully wrote ${directory}/template.pug`);
              console.log('\n\n To view your template, run the following command:')
              console.log(`\n\n parcel ${directory}/index.pug \n\n`);
            });
          });
        });
      });
    });
  });
} else {
  console.warn(`${directory} already exists`);
}
