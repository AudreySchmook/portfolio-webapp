import React, {Component} from 'react'
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Office from './components/office'
import Fitness from './components/fitness'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
		<Sidebar></Sidebar>
		<div id="colorlib-main">
			<Introduction></Introduction>
			<About></About>
			<Office></Office>
			<Fitness></Fitness>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;