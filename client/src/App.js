import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

import Home from "./pages/Home";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/globalStyles";
import Layout from "./components/Layout/Layout";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import Cart from "./pages/Cart";

function App() {
    const { theme } = useSelector((state) => state.ui);
    const themeStyle = theme === "light" ? lightTheme : darkTheme;
    return (
        <ThemeProvider theme={themeStyle}>
            <GlobalStyles />
            <Helmet>
                <title>Ecom</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <>
                <Layout>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/shop">
                            <Shop />
                        </Route>
                        <Route path="/account">
                            <Auth />
                        </Route>
                        <Route path="/cart">
                            <Cart />
                        </Route>
                    </Switch>
                </Layout>
            </>
        </ThemeProvider>
    );
}

export default App;
