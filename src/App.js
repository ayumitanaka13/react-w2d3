import React, { useContext } from "react";

import { AuthContext } from "./context/auth-context";
import Auth from "./components/Auth/Auth";
import Ingredients from "./components/Ingredients/Ingredients";

// import Ingredients from "./components/Ingredients/Ingredients";
// import WeatherApp from "./components/WeatherApp/WeatherApp";

const App = (props) => {
  const authContext = useContext(AuthContext);

  let content = <Auth />;

  if (authContext.isAuth) {
    content = <Ingredients />;
  }

  return content;
  // return <Ingredients />;
  // return <WeatherApp />;
};

export default App;
