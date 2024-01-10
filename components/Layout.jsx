import React from "react";
import Head from "next/head";

const Layout = ({ title, content, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={content} />
                <link
                    rel="icon"
                    href="https://res.cloudinary.com/atharva7/image/upload/v1663181518/QuestWebsite/questlogo_xdierg.png"
                />
            </Head>
            <div className="">{children}</div>
        </>
    );
};

export default Layout;
