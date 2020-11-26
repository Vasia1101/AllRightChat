export const camelToKebab = string => typeof string === 'string' &&
  string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();