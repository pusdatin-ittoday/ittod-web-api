function getContentTypeFromKey(key) {
  const extension = key.split('.').pop().toLowerCase();
  const mimeTypes = {
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'png': 'image/png',
    'gif': 'image/gif',
    'pdf': 'application/pdf',
    // Add more as needed
  };
  return mimeTypes[extension] || null;
}

module.exports = {getContentTypeFromKey}