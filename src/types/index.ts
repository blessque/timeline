export interface Designer {
  id: string
  name: string
  color: string
}

export interface HoursEntry {
  id: string
  designerId: string
  date: string        // ISO date string: YYYY-MM-DD
  hours: number
  projectName: string
  notes?: string
}

export interface TimelineState {
  designers: Designer[]
  entries: HoursEntry[]
}
