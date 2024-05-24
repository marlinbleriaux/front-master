export const urlToFile = async (url, filename, mimeType) => {
  try {
    const res = await fetch(url);
    const buf = await res.arrayBuffer();
    return new File([buf], filename, { type: mimeType });
  } catch (error) {
    throw error;
  }
};
  export default urlToFile;
