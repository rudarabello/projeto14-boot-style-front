
import "../src/style/reset.css";
import { createRoot } from 'react-dom/client';
import App from "../src/App";
import React from 'react'

const container = document.querySelector(".root");
const root = createRoot(container); 
root.render(<App tab="home" />);