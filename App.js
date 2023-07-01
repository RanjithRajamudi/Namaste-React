/**
 * HMR- Hot module replacement
 * File Watcher Algorithm - written in C++
 * Bundling
 * Minification
 * Cleaning our code   
 * Dev and production build
 * Super fast build algorithm
 * Image Optimization
 * Caching while development
 * Compressiion
 * Compatibile with older version of browser
 * HTTPS on development
 * Manages port number 
 * Consistent Hashing Algorithm
 * Zero Config
 * Transitive Dependencies
 */

import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement("h1", { id: "title" }, "Heading 1 from parcel");

const heading2 = React.createElement("h2", { id: "title" }, "Heading 2");

const container = React.createElement("div", { id: "container" }, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root
root.render(container);
