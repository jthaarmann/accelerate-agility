import React from 'react'
import { connect } from 'react-redux'
import NavLink from '../components/NavLink'
import { Button, Panel, Alert } from 'react-bootstrap'
import SimplePieChart from './SimplePieChart'
import { loadSessions, loadSessionsChartData} from '../actions'


class Sessions extends React.Component {
	  
	 componentWillMount() {
			this.props.loadSessions();
			this.props.loadSessionsChartData();
	 }
	  
	 chartData() {
         console.log("stuff" + this.props.entities.sessionChartData);
		 let chartData = Object.keys(this.props.entities.sessionChartData.data).map(key => this.props.entities.sessionChartData.data[key]);
         console.log("chart data" + chartData);
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
				<Panel id="sessions_panel" header={'Registrations by Sessions'} bsStyle="success">
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
	loadSessions, loadSessionsChartData
}) (Sessions);