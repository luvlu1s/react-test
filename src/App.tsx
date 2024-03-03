import React, { useState } from 'react';
import { Button } from './components/Button';
import { Alert } from './components/Alert';
import ListGroup from './components/ListGroup';

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleAlert = () => {
    setAlertVisibility(true);
  };

  const handleListGroupSelect = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Alert</Alert>}
      <Button color="primary" onClick={handleAlert}>Show Alert</Button>
      <ListGroup
        items={['Item 1', 'Item 2', 'Item 3']}
        heading="List Group 1"
        onSelectItem={handleListGroupSelect}
      />
      <ListGroup
        items={['Option A', 'Option B', 'Option C']}
        heading="List Group 2"
        onSelectItem={handleListGroupSelect}
      />
      <ListGroup
        items={['Choice X', 'Choice Y', 'Choice Z']}
        heading="List Group 3"
        onSelectItem={handleListGroupSelect}
      />
      <ListGroup
        items={['Task 1', 'Task 2', 'Task 3']}
        heading="List Group 4"
        onSelectItem={handleListGroupSelect}
      />
      <ListGroup
        items={['Activity A', 'Activity B', 'Activity C']}
        heading="List Group 5"
        onSelectItem={handleListGroupSelect}
      />
    </div>
  );
}

export default App;