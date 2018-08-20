import { CALL_API } from '../middleware/api'
import { Schema } from '../middleware/schema'

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

// Resets the currently visible error message.
export const resetErrorMessage = () => ({
    type: RESET_ERROR_MESSAGE
})

export const FEATURE_FLAGS_REQUEST = 'FEATURE_FLAGS_REQUEST'
export const FEATURE_FLAGS_SUCCESS = 'FEATURE_FLAGS_SUCCESS'
export const FEATURE_FLAGS_FAILURE = 'FEATURE_FLAGS_FAILURE'

// Middleware meta
const fetchFeatureFlags = (endpoint) => ({
    [CALL_API]: {
        types: [ FEATURE_FLAGS_REQUEST, FEATURE_FLAGS_SUCCESS, FEATURE_FLAGS_FAILURE ],
        endpoint: endpoint,
        schema: Schema.FEATURE_FLAGS_DATA
    }
})

// Dispatch action
export const loadFeatureFlags = () => (dispatch, getState) => {
    return dispatch(fetchFeatureFlags('featureflags'))
}

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
  return dispatch(fetchSessions('entities/session'))
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
  return dispatch(fetchAttendees('entities/attendee'))
}

export const SESSIONS_CHART_REQUEST = 'SESSIONS_CHART_REQUEST'
export const SESSIONS_CHART_SUCCESS = 'SESSIONS_CHART_SUCCESS'
export const SESSIONS_CHART_FAILURE = 'SESSIONS_CHART_FAILURE'

const fetchSessionsChartData = (endpoint) => ({
    [CALL_API]: {
        types: [ SESSIONS_CHART_REQUEST, SESSIONS_CHART_SUCCESS, SESSIONS_CHART_FAILURE ],
        endpoint: endpoint,
        schema: Schema.SESSIONS_CHART_DATA
    }
})

export const loadSessionsChartData = () => (dispatch, getState) => {
    return dispatch(fetchSessionsChartData('sessions/chartDataByAttendees'))
}


export const ATTENDEES_CHART_REQUEST = 'ATTENDEES_CHART_REQUEST'
export const ATTENDEES_CHART_SUCCESS = 'ATTENDEES_CHART_SUCCESS'
export const ATTENDEES_CHART_FAILURE = 'ATTENDEES_CHART_FAILURE'

const fetchAttendeesChartData = (endpoint) => ({
    [CALL_API]: {
        types: [ ATTENDEES_CHART_REQUEST, ATTENDEES_CHART_SUCCESS, ATTENDEES_CHART_FAILURE ],
        endpoint: endpoint,
        schema: Schema.ATTENDEES_CHART_DATA
    }
})

export const loadAttendeesChartData = () => (dispatch, getState) => {
    return dispatch(fetchAttendeesChartData('attendees/chartDataByAttendees'))
}
