import React, { useState } from "react";
import { BackdropContext, CustomAppBackdrop } from ".";


function BackdropProvider({ children }: any) {
  const [backdrop, setBackdrop] = useState<CustomAppBackdrop>({
    visible: false
  });

  const setVisible = (isVisible: boolean, successCallback?: () => void) => {
    setBackdrop({
      visible: isVisible
    });
    successCallback && successCallback();
  }

  return (
    <BackdropContext.Provider value={{ ...backdrop, setVisible }}>
      {children}
    </BackdropContext.Provider>
  )
}

export default BackdropProvider;