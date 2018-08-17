import React, { Component } from 'react';
import { connect } from 'react-redux'
import { PageHeader, Grid, Row, Col, } from 'react-bootstrap'
import Attendees from '../components/Attendees'
import Sessions from '../components/Sessions'


class RegistrationsDashboard extends Component {
  render() {
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
          <Attendees />
          </Col>
          <Col md={4}>
          <Sessions />
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
}) (RegistrationsDashboard);