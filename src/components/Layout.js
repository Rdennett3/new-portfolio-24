// src/components/Layout.js
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "@reach/router";

const Layout = ({ children }) => {
    const location = useLocation();

    const pageTransition = {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 100 },
    };

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={location.pathname} // Unique key for each route
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageTransition}
                transition={{ duration: 0.5 }}
                style={{ position: "absolute", width: "100%" }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default Layout;
