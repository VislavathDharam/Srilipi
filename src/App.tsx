import { useState } from 'react';
import ProposalPage from './components/ProposalPage';
import AcceptancePage from './components/AcceptancePage';

function App() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="min-h-screen">
      {!accepted ? (
        <ProposalPage onAccept={() => setAccepted(true)} />
      ) : (
        <AcceptancePage />
      )}
    </div>
  );
}

export default App;
