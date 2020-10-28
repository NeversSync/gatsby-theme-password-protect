/* eslint-disable import/prefer-default-export, react/prop-types, consistent-return */
/**
 * Read-only the password from cookies
 */
import React from 'react';
import {
  getSessionPassword,
  getQueryPassword,
  isProtectedPage, getIsValidated
} from './src/utils/utils';
import PasswordProtect from './src/components/PasswordProtect';

export const wrapPageElement = ({ props }, THEME_OPTIONS) => {
  const { password, pagePaths, partialMatching } = THEME_OPTIONS;
  const { location } = props;

  // password protection disabled
  if (!password) {
    return;
  }

  // page-level protection
const isPageLevelProtectionOn = pagePaths && pagePaths.length > 0;
  if (isPageLevelProtectionOn) {
    // non-protected page
    if (!isProtectedPage(location, pagePaths, partialMatching)) {
      return;
    }
  }

  // correct password
  const passwordCandidate = getQueryPassword(location) || getSessionPassword();
  const isValidatedCookie = getIsValidated()
  if (passwordCandidate === password || isValidatedCookie === true) {
    return;
  }

  // check password
  return <PasswordProtect/>;
};
