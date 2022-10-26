const fs = require('fs');

function dataUriParser(uri) {
  const [meta, data] = uri.split(',');
  const fileType = meta.match(':([^;]*);')[1].split('/');
  const encoding = meta.split(';')[1];

  return {
    meta: meta,
    data: data,
    type: fileType,
    fileFormat: fileType[1],
    encoding: encoding,
  };
}

module.exports = dataUriParser;
