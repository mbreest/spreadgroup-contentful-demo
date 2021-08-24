const ENABLED = '1';

export const disablePreview = (url: string) => {
  const pattern = /preview=[^\\&]+&?/;
  return url.replace(pattern, '');
};

export const isPreviewEnabled = (query: Record<string, unknown>) => {
  const param = String(query?.preview).toLowerCase();
  // console.log('p', param === ENABLED);
  return true;
};

export const withPreviewParam = (url: string, isPreview: boolean) => {
  const query = isPreview ? `?preview=${ENABLED}` : '';
  return url + query;
};
