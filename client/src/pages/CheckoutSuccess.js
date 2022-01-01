import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/UI/Button/Button";
import { SCardContainer } from "../components/UI/Containers/styles";
import PageLayout from "../components/UI/PageLayout/PageLayout";

const CheckoutSuccess = () => {
    const history = useHistory();
    return (
        <PageLayout
            head={{ title: "Checkout Successful", noBack: true }}
            layoutArr={[
                {
                    type: "contain",
                    customSize: "sm",
                    component: (
                        <SCardContainer style={{ textAlign: "center" }}>
                            Your checkout session was successful.
                            <br />
                            <br />
                            This ecommerce site is merely to put some of my web development skills
                            on display, so your order will not be processed or stored in any sort of
                            database.
                            <br />
                            <br />
                            Thank you for "checking out" the site!
                            <br />
                            <br />
                            <Button style={{ margin: "0 auto" }} onClick={() => history.push(`/`)}>
                                Go To Home
                            </Button>
                        </SCardContainer>
                    ),
                },
            ]}
        />
    );
};

export default CheckoutSuccess;
