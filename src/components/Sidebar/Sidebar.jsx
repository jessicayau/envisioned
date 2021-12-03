import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
    selectAllPalettesData,
    selectCustomPalettes,
    selectErrorMessage,
} from "../../redux/palette/paletteSlice";
import MenuItem from "../MenuItem/MenuItem";
import { SidebarContainer, Categories } from "./Sidebar.styles";

const Sidebar = ({ sidebarIsOpen }) => {
    const [selected, setSelected] = useState("");
    const palettesData = useSelector(selectAllPalettesData);
    const customPalettesData = useSelector(selectCustomPalettes);
    const errorMessage = useSelector(selectErrorMessage);

    const handleSubmenu = (item) => {
        if (selected === item) {
            setSelected("");
        } else {
            setSelected(item);
        }
    };

    return (
        <SidebarContainer sidebarIsOpen={sidebarIsOpen}>
            <h2>Color Palettes</h2>
            {errorMessage ? (
                <p>
                    Oops...
                    <br />
                    Something went wrong. Try refreshing the page after a few
                    minutes
                </p>
            ) : (
                <Categories>
                    {palettesData.map((item) => {
                        const isSelected = selected === item.category;
                        return (
                            <MenuItem
                                key={item.categoryId}
                                category={item.category}
                                palettes={item.palettes}
                                isSelected={isSelected}
                                handleSubmenu={handleSubmenu}
                            />
                        );
                    })}
                    <MenuItem
                        key={customPalettesData.categoryId}
                        category={customPalettesData.category}
                        palettes={customPalettesData.palettes}
                        isSelected={selected === customPalettesData.category}
                        handleSubmenu={handleSubmenu}
                    />
                </Categories>
            )}
        </SidebarContainer>
    );
};

export default Sidebar;
