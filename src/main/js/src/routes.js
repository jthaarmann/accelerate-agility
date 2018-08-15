import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Dashboard from './containers/Dashboard'
import AttendeesDashboard from './containers/AttendeesDashboard'
import BoardModule from './containers/BoardModule'

export default 
<Route path="/" component={App}>
	<Route path="/sessions" component={Dashboard}>
    	<Route path="/sessions/:moduleName" component={BoardModule}/>
    </Route>
    <Route path="/attendees" component={AttendeesDashboard}>
    	<Route path="/attendees/:moduleName" component={BoardModule}/>
    </Route>
    <IndexRoute component={Dashboard}/>    
</Route>
