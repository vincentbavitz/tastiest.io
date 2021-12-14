const REGEX = {
  EMAIL: /^[\w.-_]{1,30}@[\w\-_]{1,30}\.[a-zA-Z]{2,10}(\.[a-zA-Z]{2,10})?$/,
  WEBSITE: /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*(\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*)?$/,
};

export default REGEX;
