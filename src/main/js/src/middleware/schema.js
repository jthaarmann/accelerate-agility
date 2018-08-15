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



export const Schema = {
    SESSIONS_DATA: [sessionsDataSchema],
    ATTENDEES_DATA: [attendeesDataSchema],

}
