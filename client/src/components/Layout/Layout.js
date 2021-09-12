import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import useDetectClickaway from "../../hooks/useClickAway";
import { uiActions } from "../../store/ui-slice";
import CartDrawer from "../CartDrawer/CartDrawer";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PageHead from "../PageHead/PageHead";
import { SDesktopWrapper } from "../ProductPage/styles";
import BreadTrail from "../UI/BreadTrail/BreadTrail";
import Overlay from "../UI/Overlay/Overlay";
import { SCartDrawerContainer, SCartWrap, SLayout, SPage } from "./styles";

const Layout = ({ children }) => {
    const dispatch = useDispatch();
    const { cartDrawer } = useSelector((state) => state.ui);
    const layoutRef = useRef();
    const cartRef = useRef();
    useDetectClickaway(cartRef, () => {
        if (cartDrawer) {
            dispatch(uiActions.toggleCart());
        }
    });
    const location = useLocation();

    const isCollection = location.pathname.includes("collections");
    const isProduct =
        location.pathname.includes("products") && !location.pathname.includes("account");

    useEffect(() => {
        if (cartDrawer) {
            cartRef.current.classList.add("cart-open");
            layoutRef.current.style["height"] = "100vh";
            layoutRef.current.style["overflow"] = "hidden";
        } else {
            cartRef.current.classList.remove("cart-open");
            layoutRef.current.style["height"] = "100%";
            layoutRef.current.style["overflow"] = "initial";
        }
    }, [cartDrawer]);

    return (
        <SLayout ref={layoutRef}>
            <Header />
            {isCollection && <PageHead />}
            <SPage size={isProduct && "xl"} isProduct={isProduct}>
                <SDesktopWrapper>{isProduct && <BreadTrail />}</SDesktopWrapper>
                {children}
            </SPage>
            <Footer />
            {cartDrawer && <Overlay />}
            <SCartWrap>
                <SCartDrawerContainer ref={cartRef}>
                    <CartDrawer />
                </SCartDrawerContainer>
            </SCartWrap>
        </SLayout>
    );
};

export default Layout;
