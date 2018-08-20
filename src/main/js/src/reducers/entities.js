import merge from 'lodash/merge'
import assign from 'lodash/assign'

const defaultState = {
  featureFlags: {},
  sessions: {},
  sessionChartData: { data: {} },
  attendees: {},
  attendeeChartData: { data: {} }
}



// Updates an entity cache in response to any action with response.entities.

const entities = (state = defaultState , action) => {

  if (action.response && action.response.entities) {
		  return merge({}, state, action.response.entities)
  }
  return state
}

export default entities