import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { IconContext } from "react-icons";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import GlobalStyle from "./globalStyles";
import ToggleButton from "./components/ToggleButton/ToggleButton";

const App = () => {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setSidebarIsOpen(false);
            } else {
                setSidebarIsOpen(true);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [sidebarIsOpen]);

    const handleToggleSidebar = () => {
        setSidebarIsOpen(!sidebarIsOpen);
    };

    return (
        <div className="App">
            <GlobalStyle />
            <IconContext.Provider
                value={{
                    style: {
                        display: "flex",
                        fontSize: "1.3rem",
                        alignSelf: "center",
                    },
                }}
            >
                <Router>
                    <Sidebar sidebarIsOpen={sidebarIsOpen} />
                    <Main sidebarIsOpen={sidebarIsOpen} />
                    <ToggleButton
                        sidebarIsOpen={sidebarIsOpen}
                        toggleSidebar={handleToggleSidebar}
                    >
                        {sidebarIsOpen ? (
                            <BsFillCaretLeftFill style={{ color: "black" }} />
                        ) : (
                            <BsFillCaretRightFill />
                        )}
                    </ToggleButton>
                </Router>
            </IconContext.Provider>
        </div>
    );
};

export default App;
