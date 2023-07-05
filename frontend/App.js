import React from 'react';
import { StatusBar } from 'expo-status-bar';
import BackdropProvider from '@mgcrea/react-native-backdrop-provider';

import Routes from './src/routes'

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Routes />
    </>
  );
}
