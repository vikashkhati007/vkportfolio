"use client"
import { useEffect } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });

function useProgressBar() {
  useEffect(() => {
    const startProgressBar = () => {
      NProgress.start();
    };

    const stopProgressBar = () => {
      NProgress.done();
    };

    Router.events.on('routeChangeStart', startProgressBar);
    Router.events.on('routeChangeComplete', stopProgressBar);
    Router.events.on('routeChangeError', stopProgressBar);

    return () => {
      Router.events.off('routeChangeStart', startProgressBar);
      Router.events.off('routeChangeComplete', stopProgressBar);
      Router.events.off('routeChangeError', stopProgressBar);
    };
  }, []);

  return null;
}

export default useProgressBar;
