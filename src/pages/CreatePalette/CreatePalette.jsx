import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GrAdd, GrRotateRight } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";
import ColorPalette from "../../components/ColorPalette/ColorPalette";
import ColorSwatch from "../../components/ColorSwatch/ColorSwatch";
import CustomButton from "../../components/CustomButton/CustomButton";
import {
    addCustomPalette,
    getPalette,
    removeCustomPalette,
    selectCurrentPalette,
    selectCustomPalettes,
} from "../../redux/palette/paletteSlice";
import { generateRandomPalette, sortCustomColors } from "../../utils/utils";
import {
    Buttons,
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
    // const numCustomPalettes = customPalettes.palettes.length;
    const [c1, c2, c3, c4, c5] = currentPalette.colors;

    const [color1, setColor1] = useState("#" + c1.bgColor);
    const [color2, setColor2] = useState("#" + c2.bgColor);
    const [color3, setColor3] = useState("#" + c3.bgColor);
    const [color4, setColor4] = useState("#" + c4.bgColor);
    const [color5, setColor5] = useState("#" + c5.bgColor);

    console.log(color1, color2, color3, color4, color5);

    // const [colors, setColors] = useState({
    //     color1: "#" + c1.bgColor,
    //     color2: "#" + c2.bgColor,
    //     color3: "#" + c3.bgColor,
    //     color4: "#" + c4.bgColor,
    //     color5: "#" + c5.bgColor,
    // });

    useEffect(() => {
        setColor1("#" + c1.bgColor);
        setColor2("#" + c2.bgColor);
        setColor3("#" + c3.bgColor);
        setColor4("#" + c4.bgColor);
        setColor5("#" + c5.bgColor);
    }, [c1, c2, c3, c4, c5]);

    const handleCreatePalette = () => {
        const newColors = [
            color1.slice(1),
            color2.slice(1),
            color3.slice(1),
            color4.slice(1),
            color5.slice(1),
        ];
        // console.log(newColors);

        const newID = 60 + customPalettes.palettes.length;
        const newPalette = {
            id: newID,
            colors: sortCustomColors(newColors),
        };
        dispatch(addCustomPalette(newPalette));
        dispatch(
            getPalette({ paletteID: newPalette.id, palette: newPalette.colors })
        );
    };

    const handleRandomColor = () => {
        const [first, second, third, fourth, fifth] = generateRandomPalette();
        setColor1(first);
        setColor2(second);
        setColor3(third);
        setColor4(fourth);
        setColor5(fifth);
        // const firstColor = "#FFFFFF";
        // const lastColor = chroma.random().darken(3.5).hex();
        // const randomColor1 = chroma.random().hex();
        // const randomColor2 = chroma.random().hex();

        // const scale2 = chroma
        //     .scale([firstColor, randomColor1, randomColor2, lastColor])
        //     .mode("lch")
        //     .colors(25);
        // setScale2(scale2);
        // setColor1(chroma(scale2[1]).hex());
        // setColor2(chroma(scale2[3]).hex());
        // setColor3(chroma(scale2[12]).hex());
        // setColor4(chroma(scale2[20]).hex());
        // setColor5(chroma(scale2[24]).hex());
    };

    const handleRemovePalette = (id) => {
        dispatch(removeCustomPalette(id));
        console.log(id);
    };

    return (
        <CreatePaletteContainer>
            <h1>Create Custom Palettes</h1>
            <TextContent>
                <p>
                    Create your own palettes to apply onto the templates! Click
                    on the swatches to choose your own colors or generate
                    completely random colors with just a click of a button.
                </p>
                <p>
                    Generated color palettes all have at least one light color
                    and one dark color. Colors are randomly generated so some
                    palettes may not look very appealing, but you can tweak them
                    by adjusting the individual swatches. Also keep in mind that
                    randomly generated color palettes have not been checked for
                    colorblind accessibility.
                </p>
            </TextContent>
            <PaletteSwatches>
                <ColorSwatch color={color1} handleColorChange={setColor1} />
                <ColorSwatch color={color2} handleColorChange={setColor2} />
                <ColorSwatch color={color3} handleColorChange={setColor3} />
                <ColorSwatch color={color4} handleColorChange={setColor4} />
                <ColorSwatch color={color5} handleColorChange={setColor5} />
            </PaletteSwatches>
            {/* <div>
                {scale2.map((scaleColor) => (
                    <div
                        style={{
                            display: "inline-block",
                            height: 50,
                            width: 50,
                            background: scaleColor,
                        }}
                    />
                ))}
            </div> */}
            <Buttons>
                <CustomButton
                    type="button"
                    name="generate palette"
                    onClick={handleRandomColor}
                >
                    <GrRotateRight />
                    generate
                </CustomButton>
                <CustomButton
                    type="button"
                    name="add palette"
                    onClick={handleCreatePalette}
                >
                    <GrAdd />
                    palette
                </CustomButton>
            </Buttons>
            <CustomPalettesContainer>
                {customPalettes.palettes.map((palette) => (
                    <PaletteWrapper key={palette.id}>
                        <ColorPalette
                            palette={palette.colors}
                            paletteID={palette.id}
                            isEditable
                        />
                        <RemoveButton
                            onClick={() => handleRemovePalette(palette.id)}
                            type="button"
                            name="remove palette"
                        >
                            <TiDeleteOutline />
                        </RemoveButton>
                    </PaletteWrapper>
                ))}
            </CustomPalettesContainer>
        </CreatePaletteContainer>
    );
};

export default CreatePalette;
