const language = require("languagedetect");
const lngDetect = new language();

console.log(lngDetect.detect("Es macht gut", 1));
console.log(lngDetect.detect("Dobrá práce", 1));
console.log(lngDetect.detect("Gwaith da", 1));
