const initialState = {
  serverAddress: "https://json-server-three-psi.vercel.app/posts",
};

const serverConnector = (state=initialState,action) => {
  switch(action.type){
    default:
      return state;
  }
};

export default serverConnector;