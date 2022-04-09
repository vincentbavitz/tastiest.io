const REGEX = {
  EMAIL: /^[\w.\-_]{1,64}@[\w\-_]{1,64}\.[a-zA-Z]{2,64}(\.[a-zA-Z]{2,64})?$/,
  WEBSITE: /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*(\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*)?$/,
  POSTCODE_UK: /^([Gg][Ii][Rr] ?0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) ?[0-9][A-Za-z]{2})$/,

  // Eg @username
  SOCIALS_USERNAME_TAG: /^@?[\w\-.]{2,32}$/,
  YOUTUBE_BASE_URL: /^((https?):\/\/)?(www.)?youtube\.com(\/.*)?/,
  FACEBOOK_BASE_URL: /^((https?):\/\/)?(www.)?facebook\.com(\/.*)?/,
};

export default REGEX;
