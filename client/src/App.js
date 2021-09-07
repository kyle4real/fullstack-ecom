import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./pages/Home";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/globalStyles";
import Layout from "./components/Layout/Layout";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";

function App() {
    const { theme } = useSelector((state) => state.ui);
    const themeStyle = theme === "light" ? lightTheme : darkTheme;
    return (
        <ThemeProvider theme={themeStyle}>
            <GlobalStyles />
            <>
                <Layout>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/shop">
                            <Shop />
                        </Route>
                        <Route path="/account/login">
                            <Auth />
                        </Route>
                    </Switch>
                </Layout>
            </>
        </ThemeProvider>
    );
}

export default App;
