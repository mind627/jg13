const initialState = {
  serverAddress: "https://plausible-recondite-seashore.glitch.me"
};

const serverConnector = (state=initialState,action) => {
  switch(action.type){
    default:
      return state;
  }
};

export default serverConnector;