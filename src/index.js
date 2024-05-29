import { createRoot } from 'react-dom/client'
import App from './App'

import '@iqueue/ui-kit/lib/ui-kit.css'
import '@iqueue/ui-kit/lib/icons.css'
import '@iqueue/ui-kit/lib/roboto.css'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<App />)
