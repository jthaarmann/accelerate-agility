import { CALL_API } from '../middleware/api'
import { Schema } from '../middleware/schema'

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

// Resets the currently visible error message.
export const resetErrorMessage = () => ({
    type: RESET_ERROR_MESSAGE
})

// SESSIONS actions ////////////////////////
export const SESSIONS_REQUEST = 'SESSIONS_REQUEST'
export const SESSIONS_SUCCESS = 'SESSIONS_SUCCESS'
export const SESSIONS_FAILURE = 'SESSIONS_FAILURE'
	
// Middleware meta
const fetchSessions = (endpoint) => ({
  [CALL_API]: {
    types: [ SESSIONS_REQUEST, SESSIONS_SUCCESS, SESSIONS_FAILURE ],
    endpoint: endpoint,
    schema: Schema.SESSIONS_DATA
  }
})

// Dispatch action
export const loadSessions = () => (dispatch, getState) => {
  return dispatch(fetchSessions('session'))
}

// ATTENDEES actions ////////////////////////
export const ATTENDEES_REQUEST = 'ATTENDEES_REQUEST'
export const ATTENDEES_SUCCESS = 'ATTENDEES_SUCCESS'
export const ATTENDEES_FAILURE = 'ATTENDEES_FAILURE'
	
// Middleware meta
const fetchAttendees = (endpoint) => ({
  [CALL_API]: {
    types: [ ATTENDEES_REQUEST, ATTENDEES_SUCCESS, ATTENDEES_FAILURE ],
    endpoint: endpoint,
    schema: Schema.ATTENDEES_DATA
  }
})

// Dispatch action
export const loadAttendees = () => (dispatch, getState) => {
  return dispatch(fetchAttendees('attendee'))
}

