import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/app';
import 'zmp-ui/zaui.css';
import './css/app.css';

const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container);
root.render(React.createElement(App));
