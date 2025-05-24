import { createRoot } from 'react-dom/client';
import '../src/styles/index.css';
import App from './App.jsx';
import { ConfigProvider } from 'antd';

createRoot(document.getElementById('root')).render(
  <ConfigProvider>
    <App />
  </ConfigProvider>
);
