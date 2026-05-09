import type { TimelineState } from './types'

const initialState: TimelineState = {
  designers: [],
  entries: [],
}

function App() {
  return (
    <div style={{ backgroundColor: '#39FF14', minHeight: '100vh' }}>
      <h1>Timeline – Designer Hours Tracker</h1>
      <pre>{JSON.stringify(initialState, null, 2)}</pre>
    </div>
  )
}

export default App
