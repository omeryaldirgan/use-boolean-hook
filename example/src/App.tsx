import React from 'react';
import { useBoolean } from 'use-boolean-hook';

const App: React.FC = () => {
  const { value: isOpen, onToggle, onTrue, onFalse } = useBoolean(false);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>use-boolean-hook Example</h1>

      <p style={styles.stateText}>
        <strong>Current State:</strong> <span>{isOpen ? 'TRUE' : 'FALSE'}</span>
      </p>

      <div style={styles.buttonGroup}>
        <Button onClick={onToggle} label="Toggle" />
        <Button onClick={onTrue} label="Set to TRUE" />
        <Button onClick={onFalse} label="Set to FALSE" />
      </div>
    </div>
  );
};

const Button: React.FC<{ onClick: () => void; label: string }> = ({ onClick, label }) => (
  <button onClick={onClick} style={styles.button}>
    {label}
  </button>
);

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '24px',
    color: '#333',
  },
  stateText: {
    fontSize: '18px',
    margin: '20px 0',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007BFF',
    color: '#fff',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default App;
