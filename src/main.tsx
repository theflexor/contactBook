import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { persistor, store } from '@store/store'

import { App } from './App'

import './global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <PersistGate loading={false} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
)
