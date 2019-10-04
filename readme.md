**This library allows you to easily template and generate foodstack-specific PDFs in Node.js**

# Table of Contents

- [Table of Contents](#table-of-contents)
- [Introduction - Please Read First](#introduction)
- [Creating New Templates](#creating-templates)
- [Generating PDFs](#generating-pdfs)
- [Contributing](#contributing)

<a name="introduction"></a>
# Introduction - Please Read First

This library is broken into two main components: building templates and generating PDFs for use.

- Building templates: This library provides a way to easily generate new templates, easily edit and style them, and generate test PDFs.

- Generating PDFs: This library is available as an npm module itself, where you can easily generate actual PDFs from the templates.

<a name="creating-templates"></a>
# Creating New Templates

This library provides command line tools for the following:
* [easily generate scaffolding for new templates](#creating-template-scaffolding)
* [template development using Pug + scss, with hot reloading](#running-dev-environment)
* [generate and preview actual PDF output](#build-test-pdf)

## Requirements
After cloning the repository, make sure you have the parcel bundler globally installed by running
```bash
> npm install -g parcel-bundler
```
and installing any other dependencies with `npm install`

<a name="creating-template-scaffolding"></a>
## Creating Template Scaffolding
This command creates scaffolding for a new template, with a command line argument for the template name.

```bash
> npm run create:template example
```  

The command will create a new folder called `example` in the templates folder. Inside this folder, we've generated several files to get you started.

> The boilerplate uses pug and scss to format and style PDFs. If you are not familiar with these libraries, you can find documentation below.
* [Pug](https://pugjs.org)
* [SCSS](https://sass-lang.com/documentation/syntax)

When the scaffolding is finished being created, you will see a parcel command to run your development environment.

```bash
> parcel templates/example/build/index.pug
```

### Template Scaffolding Components

The scaffolding provides a basic hello world message to introduce you to the three main files to customize your template.

* __template.pug__: The pug template for the pdf, similar to html.

* __styles.scss__: Styling to apply to the template in scss

* __data.js__: The example data object, using when rendering the template.  You can add to this file as additional data is required and use it to document what data is required to use the template.

The following files in the `build` folder are required as is. In order to keep development environment working, we recommend that you do not edit these files:
* __index.pug__
* __pug.config.js__
* __script.js__

<a name="running-dev-environment"></a>
## Running the Dev Environment
To run the development environment, you can run the parcel command:
```bash
> parcel templates/example/build/index.pug
```
where example is the `name` of the template. Alternatively, we provide an `npm` script to run this same command.  You must specify the template at the beginning of the command:

```bash
> template=example npm run dev
```

A server is created at `http://localhost:1234` which will automatically show the template you specified.  Any edits made to `template.pug` or `styles.scss` will automatically reflect in the browser.

### A note on the data.js file

> The data object is set when compiled and therefore, changes will not reflect in hot reload.  Instead, you must restart the command to see any changes reflected.  Additionally, parcel caches this data object on occasion.  If you are not seeing changes to the data object, run the parcel command with the `--no-cache` option.

<a name="build-test-pdf"></a>
## Build a Test PDF
Lastly, we provide a command line script to generate a test pdf.  You can generate a test pdf for any template by Running

```bash
> npm run create:pdf example
```
where example is the name of the template.  

The resulting pdf will be stored in the corresponding template folder under the name _output.pdf.


<a name="generating-pdfs"></a>
# Generating PDFs

## Install
Using `npm`

```bash
> npm install foodstack-pdf-generator
```

## Basic Usage
Use the `generatePdf` method for basic functionality.  The generate pdf method accepts three parameters:

* name: the template name
* data: the data to display
* options: options to overwrite the pdfOptions parameter in [tea-school](https://github.com/AmirTugi/tea-school)

```javascript
import { generatePdf } from 'foodstack-pdf-generator';

const result = await generatePdf('availability-list', data, {});
```

## Available Templates
The following is a comprehensive list of templates currently available for use, along with the expected data.

#### availability-list
Creates a basic table format of upcoming availability.  Given data object with array of items, where each item includes product name and price.

```javascript
const data = {
  items: [
    {
      name: 'Product Name',
      price: '$8.00/lb',
    },
  ]
}
```

## Additional Functions
The library also provides shorthand methods for generating PDFs. For example, the following commands are equivalent:

```
await generatePdf('availability-list', data);
await generateAvailabilityList(data);
```

We've detailed the extra function names and their corresponding template names below.

| Template | Function |
| -------- | -------- |
| availability-list | generateAvailabilityList |


<a name="contributing"></a>
# Contributing
The most common way to contribute to this library is by adding additional templates.  After following the instructions above, please make sure to:

1. Add your template to the list of available templates above.  Please include description of the expected data.

2. Make sure to create a named function for that template and document it in the Additional Functions table above.
