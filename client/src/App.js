import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import ApolloProvider from "./ApolloProvider";
import "./App.scss";
import Home from "./pages/Home";
import Illustration from "./pages/Illustration";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Footer from "./components/footer";
import AdminLogin from "./pages/Admin/Login";
import Admin from "./pages/Admin/Admin";
import AdminMessages from "./pages/Admin/Messages";
import { AuthProvider } from "./context/auth";
import DynamicRoute from "./util/DynamicRoute";
function App() {
  return (
    <ApolloProvider>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <DynamicRoute path="/illustrasyon" component={Illustration} />
            <DynamicRoute path="/profile" component={Profile} />
            <DynamicRoute path="/contact" component={Contact} />
            <DynamicRoute
              path="/mrcadministration/login"
              component={AdminLogin}
              guest
            />
            <DynamicRoute
              path="/mrcadministration/messages"
              component={AdminMessages}
              authenticated
            />

            <DynamicRoute
              exact
              path="/mrcadministration/"
              component={Admin}
              authenticated
            />
            <DynamicRoute
              path="/mrcadministration/"
              component={Admin}
              authenticated
            />
            <DynamicRoute exact path="/" component={Home} />
            
          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
