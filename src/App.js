import React from 'react';

import './App.css';
import './i18n';
import MenuBar from './components/MenuBar/MenuBar';
import Area from './components/Area/Area';
import MiniMap from './components/MiniMap/MiniMap';
import Window from './components/Window/Window';
import { t } from 'i18next';
import Options from './components/Options/Options';
import TableForm from './components/TableForm/TableForm';

function App() {
  return (
    <React.StrictMode>
      <Area />
      <div id="controls">
        <MenuBar />
        <MiniMap />
        <Window title={t('options')}>
          <Options />
        </Window>
        <Window title={t('edittable')}>
          <TableForm />
        </Window>
      </div>
    </React.StrictMode>
  );
}

export default App;
