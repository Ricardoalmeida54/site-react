import React from 'react'
import Routes from './Routes/Routes'
import { UserProvider} from './Context/UserContext'
import './Styles/main.scss'
function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
   
  );
}

export default App;
