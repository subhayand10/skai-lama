// Create a Providers component to wrap your application with all the components requiring 'use client', such as next-nprogress-bar or your different contexts...
"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const TestingProvider = ({ children }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#6d28d9"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default TestingProvider;
