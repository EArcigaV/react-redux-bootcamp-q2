import { useDispatch } from "react-redux";
import GlobalStyle from "./styles/globalStyles";
import { AppRouter } from "./routes/AppRouter";
import { getProducts } from "./redux/slices/productsSlice";

function App() {
  const dispatch = useDispatch();
  dispatch(getProducts());
  return (
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  );
}

export default App;
