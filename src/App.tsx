import type { TimelineState } from './types'

const initialState: TimelineState = {
  designers: [],
  entries: [],
}

function App() {
  return (
    <div>
      <h1>Timeline – Designer Hours Tracker</h1>
      <pre>{JSON.stringify(initialState, null, 2)}</pre>
    </div>
  )
}

export default App
