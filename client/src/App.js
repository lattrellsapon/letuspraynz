import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Layout
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Pages
import { Home } from './components/pages/Home';
import { HomeMessage } from './components/pages/HomeMessage';
import { About } from './components/pages/About';
import { PrayerIntentionsPage } from './components/pages/PrayerIntentionsPage';
import { AllPrayerIntentions } from './components/pages/AllPrayerIntentions';
import { Contact } from './components/pages/Contact';

// Bring in context
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/' component={HomeMessage} />
            <div className='container'>
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/prayer-intentions'
                component={PrayerIntentionsPage}
              />
              <Route
                exact
                path='/all-prayer-intentions'
                component={AllPrayerIntentions}
              />
              <Route exact path='/contact' component={Contact} />
            </div>
          </Switch>
          <Footer />
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
