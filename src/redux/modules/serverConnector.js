const initialState = {
  serverAddress: "//localhost:4000"
};

const serverConnector = (state=initialState,action) => {
  switch(action.type){
    default:
      return state;
  }
};

export default serverConnector;