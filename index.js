const { generatePdf } = require('tea-school');

const getOptions = (template, data = null) => ({
  htmlTemplatePath: `./templates/${template}/template.pug`,
  styleOptions: { file: `./templates/${template}/styles.scss` },
  htmlTemplateOptions: data || require(`./templates/${template}/data.js`),
  pdfOptions: { path: `./templates/${template}/output.pdf`, format: 'A4' },
});

const template = process.argv[2];
if (template) {
  (async () => {
    console.log('Building pdf...');
    const options = getOptions(template);
    await generatePdf(options);
    console.log(`\n\nPDF built at: templates/${template}/output.pdf\n\n`);
  })();
} else {
  console.log('Please specify which template you want built.')
}
