import React from 'react'
import { connect } from 'react-redux'
import NavLink from '../components/NavLink'
import { Button, Panel, Alert } from 'react-bootstrap'
import SimplePieChart from './SimplePieChart'
import { loadSessions, loadFoodGroupsChartData} from '../actions'


class Sessions extends React.Component {
	  
	 componentWillMount() {
			this.props.loadSessions();
	 }
	  
	 chartData() {
		 let chartData = Object.keys(this.props.entities.sessionsChart).map(key => this.props.entities.sessionsChart[key]);
		 return chartData;
	 }
	  
	render() {
		const { 
			entities
		} = this.props
		
		
		let content = null;
		if(entities.sessions){
			content = <NavLink to="/sessions/session list"><Button block bsStyle="success" bsSize="large">Total Count: {Object.keys(entities.sessions).length}</Button></NavLink>
		} 
		else {
			content = <Alert bsStyle='warning'> Loading data, Please wait....</Alert>
		}	
		return (
				<Panel id="sessions_panel" header={'Sessions'} bsStyle="success">
				<SimplePieChart data={this.chartData()}/>
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
	loadSessions, loadFoodGroupsChartData
}) (Sessions);