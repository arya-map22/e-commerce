import { Provider } from "react-redux";
import { RouterProvider } from "react-router";

import store from "./store/main";
import router from "./routes/main";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
