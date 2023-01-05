import React from 'react';
import './App.css';
import Header from './MyComponents/HeaderComponent';
import Footer from './MyComponents/FooterComponent';
import NewsDashBoard from './MyComponents/NewsDashBoard';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewsDetails from './MyComponents/NewsDetails';



class App extends React.Component {
  render() {

    return <div className='main-content' >
      <Router>
        <Header />
        <main>
          <Route path="/" exact component={NewsDashBoard} />
          <Route path="/newsdetails/:title/:readLater" component={NewsDetails} />
        </main>
        <Footer />
      </Router>


    </div>


  }
}
export default App;
