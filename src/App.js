import React from "react";
import { useMediaQuery } from "react-responsive";

import logo from './logo.svg';
import './App.css';

//Components

import { SignUpScreenDesktop } from "./components/desktop/sign-up/signUpScreenDesktop";
import { SignUpScreenTablet } from "./components/tablet/sign-up/signUpScreenTablet";

function App() {
    const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });

  return (
    <div className="App">
      {isTabletDevice && <>
          <SignUpScreenTablet />
          {isDesktop && <SignUpScreenDesktop />}
        </>}
    </div>
  );
}

export default App;
