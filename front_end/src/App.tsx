import React from 'react'; 
import { DAppProvider, ChainId } from "@usedapp/core"; 
import { Container } from "@material-ui/core";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  return (
     <DAppProvider config={{
       supportedChains: [ ChainId.Kovan],
       notifications: {
        expirationPeriod: 1000,
        checkInterval: 1000
       }
     }}>
       <Header />
       <Container maxWidth="md">
        <Main />
       </Container>
     </DAppProvider>
  );
}

export default App;
