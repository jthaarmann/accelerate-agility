import React, { Component } from 'react';
import { connect } from 'react-redux'
import { PageHeader, Grid, Row, Col, } from 'react-bootstrap'
import { loadFeatureFlags } from '../actions'
import Attendees from '../components/Attendees'
import Sessions from '../components/Sessions'


class RegistrationsDashboard extends Component {

    componentWillMount() {
        this.props.loadFeatureFlags();
    }

    sessionsEnabled() {
        var sessionsEnabled = this.props.entities.featureFlags['sessions'] ? this.props.entities.featureFlags['sessions'].enabled : false;
        return sessionsEnabled;
    }

	 attendeesEnabled() {
        var attendeesEnabled = this.props.entities.featureFlags['attendees'] ? this.props.entities.featureFlags['attendees'].enabled : false;
        return attendeesEnabled;
    }


  render() {
	  const sessionsEnabled = this.sessionsEnabled();
	  const attendeesEnabled = this.attendeesEnabled();

    return (
    		<div className="container">
			<div className="container">
				<PageHeader className="center">Registrations</PageHeader>
			</div>

			<div className="container">
				<Grid>
					<Row className="show-grid">
          <Col md={2}></Col>
          <Col md={4}>
          {attendeesEnabled ? (<Attendees />) : ('')}
          </Col>
          <Col md={4}>
		  {sessionsEnabled ? (<Sessions />) : ('')}
          </Col>
          <Col md={2}></Col>
					</Row>
				</Grid>
			</div>

			<div className="container">
				{this.props.children}
			</div>
		</div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
	const { entities } = state
	return { entities }
}

export default connect(mapStateToProps, {
    loadFeatureFlags
}) (RegistrationsDashboard);