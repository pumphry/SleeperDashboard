import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

// React tanstack query
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// Custom Components
import SleeperInfoForm from './components/SleeperInfoForm';
import LeagueReport from './components/LeagueReport';

// Create a query client
const queryClient = new QueryClient()

function App() {

  const [userName, setUserName] = useState('');
  const [leagueName, setLeagueName] = useState('');
  const [showUserInfoForm, setShowUserInfoForm] = useState(true);
  const [showReportInfo, setShowReportInfo] = useState(false);

  // Triggers every time we update a part of the state of this component.
  useEffect (() => {
    console.log("Setting user name to: " + userName);
    console.log("Setting league name to: " + leagueName);
  })

  // Update userName in state.
  const handleUserNameUpdate = (newValue) => {
    setUserName(newValue);
  }

  // Update leagueName in state and hide the user info input form.
  const handleLeagueNameUpdate = (newValue) => {
    setLeagueName(newValue);
    setShowUserInfoForm(false);
    setShowReportInfo(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <QueryClientProvider client={queryClient}>
          {/* The rest of your application */}
          { showUserInfoForm && <SleeperInfoForm onUserNameUpdate={handleUserNameUpdate} onLeagueNameUpdate={handleLeagueNameUpdate} /> }
          { showReportInfo && <LeagueReport />}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </header>
    </div>
  );
}

export default App;
