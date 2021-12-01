import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import AppBar from "./AppBar/AppBar";
// import PhonebookView from "../views/PhonebookView/PhonebookView";
// import HomeView from "../views/HomeView/HomeView";
// import RegisterView from "../views/RegisterView/RegisterView";
// import LoginView from "../views/LoginView/LoginView";
import Container from "./Container/Container";
import { fetchCurrentUser } from "../redux/auth/auth-operations";

const HomeView = lazy(() =>
  import("../views/HomeView/HomeView" /*webpackChunkName: "home-view" */)
);
const RegisterView = lazy(() =>
  import(
    "../views/RegisterView/RegisterView" /*webpackChunkName: "register-view" */
  )
);
const LoginView = lazy(() =>
  import("../views/LoginView/LoginView" /*webpackChunkName: "login-view" */)
);
const PhonebookView = lazy(() =>
  import(
    "../views/PhonebookView/PhonebookView" /*webpackChunkName: "phonebook-view" */
  )
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Routes>
        <Route>
          <Route path="/" element={<HomeView />} />
        </Route>
        <Route>
          <Route path="/register" element={<RegisterView />} />
        </Route>
        <Route>
          <Route path="/login" element={<LoginView />} />
        </Route>
        <Route>
          <Route path="/phonebook" element={<PhonebookView />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
