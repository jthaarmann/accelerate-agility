import React, { Component} from 'react'
import { connect } from 'react-redux'
import { PageHeader, Grid, Row, Col, } from 'react-bootstrap'
import Sessions from '../components/Sessions'


class Dashboard extends Component {

	render() {

		return (
				<div className="container">
					<div className="container">
						<PageHeader className="center">Sessions</PageHeader>
					</div>        

					<div className="container">
						<Grid>
							<Row className="show-grid">
								<Col md={6}>
									<Sessions />
								</Col>
								<Col md={6}>
								</Col>
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
}) (Dashboard);