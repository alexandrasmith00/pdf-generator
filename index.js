const { generatePdf } = require('tea-school');

const createOptions = (name, data = null, pdfOptions) => ({
  htmlTemplatePath: `./templates/${name}/template.pug`,
  styleOptions: { file: `./templates/${name}/styles.scss` },
  htmlTemplateOptions: data || require(`./templates/${name}/data.js`),
  pdfOptions: { format: 'A4', ...pdfOptions },
})

const generatePdf = async (name, data, pdfOptions = {}) => {
  const options = createOptions(name, data, pdfOptions);
  const result = await generatePdf(options);
  return pdfOptions.path || Buffer.from(result).toString('base64');
};

module.exports = {
  generatePdf,
  generateAvailabilityListPdf: data => {
    return generatePdf('availability-list', data);
  },
};
