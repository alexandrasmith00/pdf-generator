const { generatePdf } = require('tea-school');

const createOptions = (name, data = null, pdfOptions) => ({
  htmlTemplatePath: `./templates/${name}/build/index.pug`,
  styleOptions: { file: `./templates/${name}/styles.scss` },
  htmlTemplateOptions: data || require(`./templates/${name}/data.js`),
  pdfOptions: { format: 'A4', ...pdfOptions },
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
