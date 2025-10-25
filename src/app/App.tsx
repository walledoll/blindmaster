import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { TypingArea } from '../components/TypingArea/TypingArea';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <MantineProvider>
      <Provider store={store}>
        <TypingArea/>
      </Provider>
    </MantineProvider>
  )
}

export default App
