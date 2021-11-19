import React from "react";
import { Switch, Route } from "react-router";
import Header from "../Header/Header";
import Homepage from "../../pages/Homepage/Homepage";
import Template1 from "../../pages/Template1/Template1";
import Template4 from "../../pages/Template4/Template4";
import Template3 from "../../pages/Template3/Template3";
import InfoBar from "../InfoBar/InfoBar";
import { ContentContainer, MainContainer } from "./Main.styles";
import ScrollToTop from "../ScrollToTop";
import TextPage from "../../pages/TextPage/TextPage";
import GradientsPage from "../../pages/GradientsPage/GradientsPage";
import CreatePalette from "../../pages/CreatePalette/CreatePalette";

const Main = ({ sidebarIsOpen }) => {
    return (
        <MainContainer sidebarIsOpen={sidebarIsOpen}>
            <Header />
            <ScrollToTop />
            <ContentContainer>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/create" component={CreatePalette} />
                    <Route exact path="/text" component={TextPage} />
                    <Route exact path="/gradients" component={GradientsPage} />
                    <Route path="/templates/1" component={Template1} />
                    <Route path="/templates/4" component={Template4} />
                    <Route path="/templates/3" component={Template3} />
                </Switch>
            </ContentContainer>
            <InfoBar />
        </MainContainer>
    );
};

export default Main;
