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



const attendeesChartSchema = new schema.Entity('attendeeChart', {
}, {
    idAttribute: attendee => attendee.items
})

const attendeesChartDataSchema = new schema.Entity('attendeeChartData', {
    chartData: [attendeesChartSchema]
}, {
    idAttribute: () => 'data'
})

export const Schema = {
    SESSIONS_DATA: [sessionsDataSchema],
    SESSIONS_CHART_DATA: [sessionsChartDataSchema],
    ATTENDEES_DATA: [attendeesDataSchema],
    ATTENDEES_CHART_DATA: [attendeesChartDataSchema],

}
