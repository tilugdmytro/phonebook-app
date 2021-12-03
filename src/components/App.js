import { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import AppBar from "./AppBar";
import Container from "./Container/Container";
import { fetchCurrentUser } from "../redux/auth/auth-operations";
import { getIsFetchingCurrent } from "../redux/auth/auth-selectors";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Spinner from "./Loader";

const HomeView = lazy(() =>
  import("../views/HomeView" /*webpackChunkName: "home-view" */)
);
const RegisterView = lazy(() =>
  import("../views/RegisterView" /*webpackChunkName: "register-view" */)
);
const LoginView = lazy(() =>
  import("../views/LoginView" /*webpackChunkName: "login-view" */)
);
const PhonebookView = lazy(() =>
  import("../views/PhonebookView" /*webpackChunkName: "phonebook-view" */)
);

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<PublicRoute />}>
              <Route path="/" element={<HomeView />} />
            </Route>
            <Route
              path="/register"
              element={<PublicRoute redirectTo="/phonebook" restricted />}
            >
              <Route path="/register" element={<RegisterView />} />
            </Route>
            <Route
              path="/login"
              element={<PublicRoute redirectTo="/phonebook" restricted />}
            >
              <Route path="/login" element={<LoginView />} />
            </Route>
            <Route
              path="/phonebook"
              element={<PrivateRoute redirectTo="/phonebook" />}
            >
              <Route path="/phonebook" element={<PhonebookView />} />
            </Route>
          </Routes>
        </Suspense>
      </Container>
    )
  );
}

export default App;
