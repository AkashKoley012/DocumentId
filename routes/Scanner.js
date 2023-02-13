var tesseract = require("node-tesseract-ocr");

const config = {
  lang: "eng",
  oem: 3,
  psm: 3,
};

const card = async (fileName) => {
  try {
    const text = await tesseract.recognize(fileName, config);
    const panId = text.match(
      /(\b[A-Z][A-Z][A-Z][A-Z][A-Z][0-9][0-9][0-9][0-9][A-Z]\b)/g
    );
    const aadharId = text.match(
      /(\b[0-9][0-9][0-9][0-9][" "][0-9][0-9][0-9][0-9][" "][0-9][0-9][0-9][0-9]\b)/g
    );
    return [panId, aadharId];
  } catch (error) {
    return error.message;
  }
};

module.exports = { card };
