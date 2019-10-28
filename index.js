const { generatePdf } = require('tea-school');
const path = require('path');

const createOptions = (name, data = null, pdfOptions) => ({
   // path.resolve(__dirname, 'pdf-template.pug'),
  htmlTemplatePath: path.resolve(__dirname, `templates/${name}/build/index.pug`),
  styleOptions: { file: path.resolve(__dirname, `templates/${name}/styles.scss`) },
  htmlTemplateOptions: data || require(path.resolve(__dirname, `templates/${name}/data.js`)),
  pdfOptions: { { args: ['--no-sandbox'] }, ...pdfOptions },
})

const PDF = async (name, data, pdfOptions = {}) => {
  const options = createOptions(name, data, pdfOptions);
  const result = await generatePdf(options);
  return pdfOptions.path || Buffer.from(result).toString('base64');
};

module.exports = {
  generatePdf: PDF,
  generateAvailabilityList: data => {
    return PDF('availability-list', data);
  },
};
