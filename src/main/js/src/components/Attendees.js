import React from 'react'
import { connect } from 'react-redux'
import NavLink from '../components/NavLink'
import { Button, Panel } from 'react-bootstrap'
import ErrorMessage from './ErrorMessage'
import SimpleBarChart from './SimpleBarChart'
import { loadAttendees, loadAttendeesChartData} from '../actions'

class Attendees extends React.Component {
	  
	componentWillMount() {
		 this.props.loadAttendees();
		 this.props.loadAttendeesChartData();
	}
	  
	chartData() {
			let chartData = Object.keys(this.props.entities.attendeeChartData.data).map(key => this.props.entities.attendeeChartData.data[key]);
			return chartData;
	}
	
	render() {
		
		 const { 
				entities
			} = this.props
			
		let content = null;
		if(entities.attendees){
			content = <NavLink to="/attendees/attendee list"><Button block bsStyle="success" bsSize="large">Total Attendees: {Object.keys(entities.attendees).length}</Button></NavLink>
		} 
		else {
			content =  <ErrorMessage/> 
		}		

		return (
				<Panel id="attendees_panel" header={'Registrations by Attendees'} bsStyle="success">
					<SimpleBarChart data={this.chartData()}/>
					{content}	
				</Panel>
		);
	} 
} 

const mapStateToProps = (state, ownProps) => {
	const { entities } = state
	return { entities }
}

export default connect(mapStateToProps, { 
	loadAttendees, loadAttendeesChartData
}) (Attendees);