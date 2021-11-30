import React from "react";
import ColorPalette from "../ColorPalette/ColorPalette";
import { CategoryTitle, MenuItemContainer, Submenu } from "./MenuItem.styles";

const MenuItem = ({ category, palettes, isSelected, handleSubmenu }) => {
    return (
        <MenuItemContainer>
            <CategoryTitle onClick={() => handleSubmenu(category)}>
                {category}
            </CategoryTitle>
            <Submenu className={isSelected ? "open" : ""}>
                {palettes.map((palette) => (
                    <div className="paletteWrapper" key={palette.id}>
                        <ColorPalette
                            paletteID={palette.id}
                            palette={palette.colors}
                        />
                    </div>
                ))}
            </Submenu>
        </MenuItemContainer>
    );
};

export default MenuItem;
