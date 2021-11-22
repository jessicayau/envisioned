import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BiCopy } from "react-icons/bi";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import {
    changeVersion,
    selectCurrentPalette,
    selectVersion,
} from "../../redux/palette/paletteSlice";
import ColorPalette from "../ColorPalette/ColorPalette";
import { CopiedMessage, Icons, InfoBarContainer } from "./InfoBar.styles";
import { useDispatch } from "react-redux";
import { switchVersion } from "../../utils/utils";

const InfoBar = () => {
    const paletteInfo = useSelector(selectCurrentPalette);
    const palette = paletteInfo.colors.map((color) => color.bgColor);
    const currentVersion = useSelector(selectVersion);
    const [copied, setCopied] = useState(false);
    const dispatch = useDispatch();

    const handleCopyColor = (color) => {
        navigator.clipboard.writeText(color);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1000);
    };

    const handleCopyPalette = () => {
        const colors = `${palette[0]}, ${palette[1]}, ${palette[2]}, ${palette[3]}, ${palette[4]}`;
        navigator.clipboard.writeText(colors);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1000);
    };

    const handleVersion = (version) => {
        version !== currentVersion && dispatch(changeVersion(version));
    };

    return (
        <>
            {copied && <CopiedMessage>Copied to Clipboard</CopiedMessage>}
            <InfoBarContainer copied={copied}>
                <div>
                    <ColorPalette
                        className="infobar"
                        infoBar
                        palette={palette}
                        handleCopyColor={handleCopyColor}
                    />
                </div>
                <Icons>
                    <BiCopy onClick={handleCopyPalette} />
                    {currentVersion === "light" ? (
                        <MdOutlineLightMode
                            onClick={() => handleVersion("dark")}
                        />
                    ) : (
                        <MdOutlineDarkMode
                            onClick={() => handleVersion("light")}
                        />
                    )}
                </Icons>
            </InfoBarContainer>
        </>
    );
};

export default InfoBar;
