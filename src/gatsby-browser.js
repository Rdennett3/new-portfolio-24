// gatsby-browser.js and gatsby-ssr.js
import React from "react";
import Layout from "./src/components/Layout";

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>;
};
