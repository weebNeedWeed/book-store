import "../../styles/global.css";
import { Provider } from "react-redux";
import configureStore from "./../redux/configureStore";

const store = configureStore();

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
