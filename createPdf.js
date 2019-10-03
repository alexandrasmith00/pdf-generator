const { generatePdf } = require('./index');

// gets the template name from CL args
const template = process.argv[2];

if (template) {
  (async () => {
    // let user know we've started process
    console.log('Building the PDF...');

    // generates a pdf and stores in the templates directory
    const options = { path: `./templates/${template}/_output.pdf`, format: 'A4' };
    const path = await generatePdf(template, null, options);

    // on success, let user know where to find output
    console.log(`\n\nPDF built at: ${path}\n\n`);
  })();
} else { console.log('Please specify a template.'); }
