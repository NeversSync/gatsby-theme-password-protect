import React, { useState, useEffect} from 'react'
import Cookies from 'js-cookie';
import queryString from 'query-string';

const COOKIE_NAME = 'gatsby-theme-password-protect';

export const setSessionPassword = passwordCandidate => {
  Cookies.set(COOKIE_NAME, passwordCandidate);
};

export const getSessionPassword = () => {
  return Cookies.get(COOKIE_NAME);
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

export const withTwoPassRendering = (WrappedComponent) => ({
  children,
  ...rest
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, [setIsClient]);

  return (
    <WrappedComponent {...rest} key={isClient}>
      {children}
    </WrappedComponent>
  );
};
