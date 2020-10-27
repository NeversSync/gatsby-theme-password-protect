import Cookies from 'js-cookie';
import queryString from 'query-string';

const COOKIE_NAME = 'gatsby-theme-password-protect';

const VALID_COOKIE = 'is-valid';

export const getSessionPassword = () => {
  return Cookies.get(COOKIE_NAME);
};

export const getIsValidated = () => {
  return Cookies.get(VALID_COOKIE);
}

export const setSessionPassword = passwordCandidate => {
  let isValid = false
  Cookies.set(COOKIE_NAME, passwordCandidate);
  const password = getSessionPassword();

  if (password === passwordCandidate) {
    isValid = true
    Cookies.set(VALID_COOKIE, true);
  }
  return isValid
};

export const getQueryPassword = location => {
  const { secret } = queryString.parse(location.search);
  return secret;
};

export const isProtectedPage = ({ pathname }, pagePaths, partialMatching) => {
  const isProtected = pagePaths.find(path => {
    if (partialMatching) {
      return path.startsWith(pathname);
    }

    return path === pathname;
  });

  return isProtected;
};
