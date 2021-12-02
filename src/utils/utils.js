import chroma from "chroma-js";

// generate random color palette
export const generateRandomPalette = () => {
    const firstColor = "#FFFFFF";
    const lastColor = chroma.random().darken(3.5).hex();
    const randomColor1 = chroma.random().hex();
    const randomColor2 = chroma.random().hex();

    const scale = chroma
        .scale([firstColor, randomColor1, randomColor2, lastColor])
        .mode("lch")
        .colors(25);
    const first = chroma(scale[1]).hex().toUpperCase();
    const second = chroma(scale[3]).hex().toUpperCase();
    const third = chroma(scale[12]).hex().toUpperCase();
    const fourth = chroma(scale[20]).hex().toUpperCase();
    const fifth = chroma(scale[24]).hex().toUpperCase();
    const randomPaletteColors = [first, second, third, fourth, fifth];

    return randomPaletteColors;
};

// get luminance for each color in palette
export const paletteLuminances = (paletteColors) =>
    paletteColors.map((color) => {
        return chroma(color).luminance();
    });

// sort custom palette colors before adding to palettes
export const sortCustomColors = (newColors) => {
    const colorsLuminances = paletteLuminances(newColors);

    const unsortedColors = [];
    for (let i = 0; i < newColors.length; i++) {
        const colorObj = {
            color: newColors[i],
            luminance: colorsLuminances[i],
        };
        unsortedColors.push(colorObj);
    }

    const sortedColors = unsortedColors.sort(
        (a, b) => b.luminance - a.luminance
    );
    const colorsArr = sortedColors.map((color) => color.color);

    return colorsArr;
};

// get info (color, luminance and contrast color) for each color in palette as an object
export const getPaletteInfo = (id, hexColors) => {
    const luminances = paletteLuminances(hexColors);
    const contrastColors = luminances.map((luminance) => {
        const contrastRatioLight = (luminances[0] + 0.05) / (luminance + 0.05);
        const contrastRatioDark = (luminance + 0.05) / (luminances[4] + 0.05);
        if (contrastRatioLight > contrastRatioDark) {
            return hexColors[0];
        } else {
            return hexColors[4];
        }
    });

    const paletteInfo = { id: id, colors: [] };
    for (let i = 0; i < hexColors.length; i++) {
        let colorInfo = {
            color: hexColors[i],
            luminance: luminances[i],
            contrastColor: contrastColors[i],
        };
        paletteInfo.colors.push(colorInfo);
    }
    return paletteInfo;
};

// combinations for text and background that meet contrast requirements
export const getCombinations = (palette) => {
    const combinations = [];

    palette.forEach((color1) => {
        palette.forEach((color2) => {
            const contrastRatio = chroma.contrast(color1.color, color2.color);
            return (
                color1 !== color2 &&
                contrastRatio >= 3.0 &&
                combinations.push([color1.color, color2.color, contrastRatio])
            );
        });
    });
    return combinations;
};

// all color pair combinations for gradients
export const getAllCombinations = (palette) => {
    const combinations = [];

    palette.forEach((color1) => {
        palette.forEach((color2) => {
            return (
                color1 !== color2 &&
                combinations.push([
                    color1.color,
                    color2.color,
                    color1.contrastColor,
                ])
            );
        });
    });
    return combinations;
};
