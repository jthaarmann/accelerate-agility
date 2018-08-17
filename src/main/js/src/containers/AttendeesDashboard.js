import React, { Component } from 'react';
import { connect } from 'react-redux'
import { PageHeader, Grid, Row, Col, } from 'react-bootstrap'


class AttendeesDashboard extends Component {
  render() {
    return (
    		<div className="container">
			<div className="container">
				<PageHeader className="center">Attendees</PageHeader>
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
}) (AttendeesDashboard);