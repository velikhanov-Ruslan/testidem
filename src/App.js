import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';


function App() {
	return (
    	<div>
    		<Header text='header'/>
    		<div className="container">
        		<Main />
    		</div>
    		<Footer text='footer'/>
    	</div>
  );
}

export default App;