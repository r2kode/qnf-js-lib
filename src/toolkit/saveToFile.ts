export const saveToFile = (
  content: BlobPart,
  filename: string,
  type = 'text/plain'
): void => {
  const contentBlob = new Blob([content], { type });
  const dLink = document.createElement('a');
  dLink.download = filename;
  dLink.innerHTML = 'Download';
  dLink.href = window.URL.createObjectURL(contentBlob);
  document.body.append(dLink);
  dLink.click();
};
