import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { IconContext } from "react-icons";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import GlobalStyle from "./globalStyles";
import ToggleButton from "./components/ToggleButton/ToggleButton";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchPalettesData,
    selectIsLoading,
} from "./redux/palette/paletteSlice";
import Spinner from "./components/Spinner/Spinner";

const App = () => {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPalettesData());
    }, [dispatch]);

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
                {isLoading ? (
                    <Spinner />
                ) : (
                    <Router>
                        <Sidebar sidebarIsOpen={sidebarIsOpen} />
                        <Main sidebarIsOpen={sidebarIsOpen} />
                        <ToggleButton
                            sidebarIsOpen={sidebarIsOpen}
                            handleToggle={handleToggleSidebar}
                            aria-label="toggle sidebar"
                        >
                            {sidebarIsOpen ? (
                                <BsFillCaretLeftFill />
                            ) : (
                                <BsFillCaretRightFill />
                            )}
                        </ToggleButton>
                    </Router>
                )}
            </IconContext.Provider>
        </div>
    );
};

export default App;
