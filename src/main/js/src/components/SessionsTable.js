import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import { loadSessions } from '../actions'
import {connect} from 'react-redux'

class SessionsTable extends Component {
   constructor(props){
	   super(props);
   }
  
   
    componentWillMount() {
        this.props.loadSessions;
    }

    render() {
        let data = Object.keys(this.props.entities.sessions).map(key => this.props.entities.sessions[key]);
        
        return (
            <div>          
                <BootstrapTable data={data} striped={true} hover={true} remote={true} options={this.options}>
                    <TableHeaderColumn dataField="id" isKey={true} dataAlign="center">Id</TableHeaderColumn>
                    <TableHeaderColumn dataField="name" dataAlign="center">Name</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
	const { entities } = state
	return { entities }
}
export default connect(mapStateToProps, { loadSessions }) (SessionsTable);