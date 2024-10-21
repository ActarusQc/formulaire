import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MsalProvider } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import Header from './components/Header';
import FormBuilder from './components/FormBuilder';
import FormList from './components/FormList';
import FormResponse from './components/FormResponse';
import { msalConfig } from './config/authConfig';

const msalInstance = new PublicClientApplication(msalConfig);

function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <Switch>
              <Route exact path="/" component={FormList} />
              <Route path="/create" component={FormBuilder} />
              <Route path="/form/:id" component={FormResponse} />
            </Switch>
          </main>
        </div>
      </Router>
    </MsalProvider>
  );
}

export default App;