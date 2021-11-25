import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GrRotateRight } from "react-icons/gr";
import { IoAddOutline } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";
import ColorPalette from "../../components/ColorPalette/ColorPalette";
import ColorSwatch from "../../components/ColorSwatch/ColorSwatch";
import CustomButton from "../../components/CustomButton/CustomButton";
import {
    addCustomPalette,
    clearAllCustomPalettes,
    getPalette,
    removeCustomPalette,
    selectCurrentPalette,
    selectCustomPalettes,
} from "../../redux/palette/paletteSlice";
import { generateRandomPalette, sortCustomColors } from "../../utils/utils";
import {
    Buttons,
    ClearAllButton,
    CreatePaletteContainer,
    CustomPalettesContainer,
    PaletteSwatches,
    PaletteWrapper,
    RemoveButton,
    TextContent,
} from "./CreatePalette.styles";

const CreatePalette = () => {
    const customPalettes = useSelector(selectCustomPalettes);
    const currentPalette = useSelector(selectCurrentPalette);
    const dispatch = useDispatch();
    const [c1, c2, c3, c4, c5] = currentPalette.colors;

    const [color1, setColor1] = useState("#" + c1.bgColor);
    const [color2, setColor2] = useState("#" + c2.bgColor);
    const [color3, setColor3] = useState("#" + c3.bgColor);
    const [color4, setColor4] = useState("#" + c4.bgColor);
    const [color5, setColor5] = useState("#" + c5.bgColor);

    // sets swatch colors to current palette colors whenever palette changes
    useEffect(() => {
        setColor1("#" + c1.bgColor);
        setColor2("#" + c2.bgColor);
        setColor3("#" + c3.bgColor);
        setColor4("#" + c4.bgColor);
        setColor5("#" + c5.bgColor);
    }, [c1, c2, c3, c4, c5]);

    // handles addition of new palette
    const handleCreatePalette = () => {
        const newColors = [
            color1.slice(1).toUpperCase(),
            color2.slice(1).toUpperCase(),
            color3.slice(1).toUpperCase(),
            color4.slice(1).toUpperCase(),
            color5.slice(1).toUpperCase(),
        ];

        const newID = Date.now();
        const newPalette = {
            id: newID,
            colors: sortCustomColors(newColors),
        };
        dispatch(addCustomPalette(newPalette));
        dispatch(
            getPalette({ paletteID: newPalette.id, palette: newPalette.colors })
        );
    };

    // handles generation of new random palette colors
    const handleRandomColor = () => {
        const [first, second, third, fourth, fifth] = generateRandomPalette();
        setColor1(first);
        setColor2(second);
        setColor3(third);
        setColor4(fourth);
        setColor5(fifth);
    };

    // handles removal of custom palette
    const handleRemovePalette = (id) => {
        dispatch(removeCustomPalette(id));
    };

    return (
        <CreatePaletteContainer>
            <h1>Create Custom Palettes</h1>
            <TextContent>
                <p>
                    Create your own palettes to apply onto the templates! Click
                    on the swatches to choose your own colors or generate
                    completely random colors with just a click of a button. Try
                    to choose at least one light and one dark color.
                </p>
                <p>
                    Generated color palettes are completely random so some
                    palettes may not look very appealing, but you can tweak them
                    by adjusting the individual swatches. Also keep in mind that
                    they have not been checked for colorblind accessibility.
                </p>
            </TextContent>
            <PaletteSwatches>
                <ColorSwatch color={color1} handleColorChange={setColor1} />
                <ColorSwatch color={color2} handleColorChange={setColor2} />
                <ColorSwatch color={color3} handleColorChange={setColor3} />
                <ColorSwatch color={color4} handleColorChange={setColor4} />
                <ColorSwatch color={color5} handleColorChange={setColor5} />
            </PaletteSwatches>
            <Buttons>
                <CustomButton
                    type="button"
                    name="generate palette"
                    btnBg={c5.bgColor}
                    btnFg={c5.textColor}
                    onClick={handleRandomColor}
                >
                    <GrRotateRight />
                    Generate
                </CustomButton>
                <CustomButton
                    type="button"
                    name="add palette"
                    btnBg={c2.bgColor}
                    btnFg={c2.textColor}
                    onClick={handleCreatePalette}
                >
                    <IoAddOutline />
                    Palette
                </CustomButton>
            </Buttons>
            {customPalettes.palettes.length > 0 && (
                <>
                    <h2>Custom Palettes</h2>
                    <ClearAllButton
                        type="button"
                        onClick={() => dispatch(clearAllCustomPalettes())}
                    >
                        Clear All
                    </ClearAllButton>
                    <CustomPalettesContainer>
                        {customPalettes.palettes.map((palette) => (
                            <PaletteWrapper key={palette.id}>
                                <ColorPalette
                                    palette={palette.colors}
                                    paletteID={palette.id}
                                    isEditable
                                />
                                <RemoveButton
                                    onClick={() =>
                                        handleRemovePalette(palette.id)
                                    }
                                    type="button"
                                    name="remove palette"
                                >
                                    <TiDeleteOutline />
                                </RemoveButton>
                            </PaletteWrapper>
                        ))}
                    </CustomPalettesContainer>
                </>
            )}
        </CreatePaletteContainer>
    );
};

export default CreatePalette;
