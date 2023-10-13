import React, { useState } from 'react';
import Lifts from './Components/Lifts/Lifts';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';
// @ts-ignore
import styles from './index.css';
import Filter from './Components/Filter/Filter';

const __DEV__ = process.env.NODE_ENV !== 'production';

if (__DEV__) {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

export default function App() {
  const [status, setStatus] = useState(null);

  return (
    <div className="bg-sky-50 min-h-screen pt-4" style={styles}>
      <div className="container mx-auto">
        <h1 className="text-3xl antialiased text-center p-4 font-bold uppercase">
          Lifts list
        </h1>
        <Filter setStatus={setStatus} />
        <Lifts _status={status} />
      </div>
    </div>
  );
}
