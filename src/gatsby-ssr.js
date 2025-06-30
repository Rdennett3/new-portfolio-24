// gatsby-ssr.js
import React from "react";
import Layout from "./src/components/Layout";

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>;
};

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <link
            key="adobe-fonts"
            rel="stylesheet"
            href="https://use.typekit.net/cqb5tzz.css"
        />,
    ]);
};
