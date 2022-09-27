import React, { useReducer, useRef } from 'react';

import './App.css';
import './i18n';
import MenuBar from './components/MenuBar/MenuBar';
import Area from './components/Area/Area';
import MiniMap from './components/MiniMap/MiniMap';
import Window from './components/Window/Window';
import { t } from 'i18next';
import Options from './components/Options/Options';
import TableForm from './components/TableForm/TableForm';
import { saveOptions } from './lib/options';

const initialState = {
  window: {
    options: false,
    edittable: false,
  },
};

const actions = {
  openOptions: 'openOptions',
  closeOptions: 'closeOptions',
};

const stateReducer = (state, action) => {
  switch (action.type) {
    case actions.openOptions: {
      const newState = { ...state };
      newState.window.options = true;
      return newState;
    }

    case actions.closeOptions: {
      const newState = { ...state };
      newState.window.options = false;
      if (action.payload) {
        const newOptions = action.ref.current.getOptions();
        saveOptions(newOptions);
      }
      return newState;
    }

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const optionsRef = useRef();

  return (
    <React.StrictMode>
      <Area />
      <div id="controls">
        <MenuBar openOptions={() => dispatch({ type: actions.openOptions })} />
        <MiniMap />
        {state.window.options &&
          <Window title={t('options')} onResult={(result) => dispatch({ type: actions.closeOptions, payload: result, ref: optionsRef })}>
            <Options ref={optionsRef} />
          </Window>
        }
        {state.window.edittable &&
          <Window title={t('edittable')}>
            <TableForm />
          </Window>
        }
      </div>
    </React.StrictMode>
  );
}

export default App;
