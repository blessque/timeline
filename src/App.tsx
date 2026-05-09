import type { TimelineState } from './types'

const initialState: TimelineState = {
  designers: [],
  entries: [],
}

function App() {
  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', padding: '21px 8px' }}>
      <h1 style={{ color: '#ff449e', fontFamily: 'Times New Roman, serif', fontSize: 32, fontWeight: 'bold', margin: 0 }}>
        Timeline – Designer Hours Tracker
      </h1>
      <pre style={{ color: '#fff', fontFamily: 'Cousine, Courier New, monospace', fontSize: 13, marginTop: 21 }}>
        {JSON.stringify(initialState, null, 2)}
      </pre>
    </div>
  )
}

export default App
