import 'react-native-gesture-handler';
import React from 'react';
import Tab from './navigation/Tab';
import { LogBox } from 'react-native';
import { initializeApp } from "firebase/app";
LogBox.ignoreLogs(['Setting a timer']);

const firebaseConfig = {
  apiKey: "AIzaSyAULgWdhQDDgoGnxRNVW5M3Dlmr0hufnEU",
  authDomain: "projetos-jogos-br.firebaseapp.com",
  projectId: "projetos-jogos-br",
  storageBucket: "projetos-jogos-br.appspot.com",
  messagingSenderId: "738850399873",
  appId: "1:738850399873:web:9cfc89b26cf41aaa164f80",
  measurementId: "G-984B1M77F3"
};

initializeApp(firebaseConfig);

const App = () => {
  return (
    <Tab></Tab>
  );
};

export default App;
