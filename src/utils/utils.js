import chroma from "chroma-js";

// convert rgb to hex
// export const rgbToHex = (r, g, b) => {
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

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

// convert hex to rgb
export const hexToRGB = (hex) => {
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });

    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : null;
};

// convert palette hex colors to rgb
export const rgbPalette = (palette) =>
    palette.map((colorHex) => {
        return hexToRGB(colorHex);
    });

// get luminance of rgb color
export const luminance = (r, g, b) => {
    const a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

// return array of luminances for palette's colors
export const luminancePalette = (rgbPalette) =>
    rgbPalette.map((colorRGB) => {
        return luminance(colorRGB.r, colorRGB.g, colorRGB.b);
    });

// sort custom palette colors before adding to database
export const sortCustomColors = (newColors) => {
    const rgbColors = rgbPalette(newColors);
    const colorsLuminance = luminancePalette(rgbColors);

    const unsortedColors = [];
    for (let i = 0; i < newColors.length; i++) {
        const colorObj = {
            color: newColors[i],
            luminance: colorsLuminance[i],
        };
        unsortedColors.push(colorObj);
    }

    const sortedColors = unsortedColors.sort(
        (a, b) => b.luminance - a.luminance
    );
    const colorsArr = sortedColors.map((color) => color.color);

    return colorsArr;
};

// const contrastRatioLight =
//     (luminancePalette[0] + 0.05) / (luminancePalette[2] + 0.05);
// const contrastRatioDark =
//     (luminancePalette[2] + 0.05) / (luminancePalette[4] + 0.05);

// const textColor = (light, dark) => {
//     if (light > dark) {
//         return lightHex;
//     } else return darkHex;
// };

export const getPaletteInfo = (id, hexColors) => {
    const rgbColors = rgbPalette(hexColors);
    const luminanceColors = luminancePalette(rgbColors);
    const textColors = luminanceColors.map((luminanceColor) => {
        const contrastRatioLight =
            (luminanceColors[0] + 0.05) / (luminanceColor + 0.05);
        const contrastRatioDark =
            (luminanceColor + 0.05) / (luminanceColors[4] + 0.05);
        if (contrastRatioLight > contrastRatioDark) {
            return hexColors[0];
        } else {
            return hexColors[4];
        }
    });

    const paletteInfo = { id: id, colors: [] };
    for (let i = 0; i < hexColors.length; i++) {
        let colorInfo = {
            bgColor: hexColors[i],
            luminance: luminanceColors[i],
            textColor: textColors[i],
        };
        paletteInfo.colors.push(colorInfo);
    }

    return paletteInfo;
};

export const getContrastColor = (luminance, light, dark) => {
    const contrastRatioLight = (light.luminance + 0.05) / (luminance + 0.05);
    const contrastRatioDark = (luminance + 0.05) / (dark.luminance + 0.05);
    if (contrastRatioLight > contrastRatioDark) {
        return light.bgColor;
    } else {
        return dark.bgColor;
    }
};

// export const getPaletteInfo = (id, hexColors) => {
//     const rgbColors = rgbPalette(hexColors);
//     const luminanceColors = luminancePalette(rgbColors);

//     const paletteInfo = {
//         id: id,
//         colors: [],
//     };

//     for (let i = 0; i < hexColors.length; i++) {
//         let colorInfo = {
//             bgColor: hexColors[i],
//             luminance: luminanceColors[i],
//         };
//         paletteInfo.colors.push(colorInfo);
//     }

//     // sort colors by luminance
//     paletteInfo.colors.sort(function (a, b) {
//         return b.luminance - a.luminance;
//     });

//     const light = paletteInfo.colors[0];
//     const dark = paletteInfo.colors[4];

//     paletteInfo.colors.forEach((color) => {
//         color.textColor = getContrastColor(color.luminance, light, dark);
//     });

//     return paletteInfo;
// };

export const getCombinations = (palette) => {
    const combinations = [];

    palette.forEach((color) => {
        palette.forEach((color2) => {
            const contrastRatio = chroma.contrast(
                color.bgColor,
                color2.bgColor
            );
            return (
                color !== color2 &&
                contrastRatio >= 3.0 &&
                combinations.push([
                    color.bgColor,
                    color2.bgColor,
                    contrastRatio,
                ])
            );
        });
    });
    return combinations;
};

export const getAllCombinations = (palette) => {
    const combinations = [];

    palette.forEach((color) => {
        palette.forEach((color2) => {
            return (
                color !== color2 &&
                combinations.push([
                    color.bgColor,
                    color2.bgColor,
                    color.textColor,
                ])
            );
        });
    });
    return combinations;
};
