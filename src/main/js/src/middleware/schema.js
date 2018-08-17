import { schema } from 'normalizr'
///////////////////////////////////////////////////////////////////////////////
// Sessions API data
const sessionsDataSchema = new schema.Entity('sessions', {}, {
    idAttribute: 'id'
})
///////////////////////////////////////////////////////////////////////////////
// Attendees API data
const attendeesDataSchema = new schema.Entity('attendees', {}, {
    idAttribute: 'id'
})
///////////////////////////////////////////////////////////////////////////////

const sessionsChartSchema = new schema.Entity('sessionChart', {
}, {
    idAttribute: session => session.items
})

const sessionsChartDataSchema = new schema.Entity('sessionChartData', {
    chartData: [sessionsChartSchema]
}, {
    idAttribute: () => 'data'
})

export const Schema = {
    SESSIONS_DATA: [sessionsDataSchema],
    SESSIONS_CHART_DATA: [sessionsChartDataSchema],
    ATTENDEES_DATA: [attendeesDataSchema],

}
