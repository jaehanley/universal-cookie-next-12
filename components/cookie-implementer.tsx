import React, { useEffect } from 'react';
import Cookies from 'universal-cookie';

export default function CookieImplementer() {
  useEffect(() => {
    // @ts-ignore:next-line
    const cookie: Cookie = new Cookies();
    const testCookie = cookie.get('cookie-string');
    console.log(testCookie);
  });

  return <div>I am a component that uses cookies</div>;
}
