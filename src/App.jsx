import { Provider } from "react-redux";

import store from "./store/main";

import MainNavigation from "./components/MainNavigation";
import HomePage from "./routes/Home";

function App() {
  return (
    <Provider store={store}>
      <MainNavigation />
      <HomePage />
    </Provider>
  );
}

export default App;
