import {BrowserRouter 
  as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

//LAYOUTS
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'

//PAGES
import Home from './components/views/pages/Home'
import About from './components/views/pages/About'
import Contact from './components/views/pages/Contact'
import Registration from './components/views/pages/Registration'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="router">
          <Navbar />
          <Route path="/" exact render={(props) => (
            <>
              <Home />
            </>
          )} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/register" component={Registration} />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
