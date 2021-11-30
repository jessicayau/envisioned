import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BiCopy } from "react-icons/bi";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import {
    changeVersion,
    selectCurrentPalette,
    selectVersion,
} from "../../redux/palette/paletteSlice";
import ColorPalette from "../ColorPalette/ColorPalette";
import { CopiedMessage, Icons, ToolbarContainer } from "./Toolbar.styles";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";

const Toolbar = () => {
    const paletteInfo = useSelector(selectCurrentPalette);
    const palette = paletteInfo.colors.map((color) => color.color);
    const currentVersion = useSelector(selectVersion);
    const [copied, setCopied] = useState(false);
    const dispatch = useDispatch();
    const location = useLocation();

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
            <ToolbarContainer copied={copied}>
                <div>
                    <ColorPalette
                        toolbar
                        palette={palette}
                        handleCopyColor={handleCopyColor}
                    />
                </div>
                <Icons>
                    <BiCopy onClick={handleCopyPalette} />
                    {(location.pathname === "/templates/1" ||
                        location.pathname === "/templates/2") &&
                        (currentVersion === "light" ? (
                            <MdOutlineDarkMode
                                onClick={() => handleVersion("dark")}
                            />
                        ) : (
                            <MdOutlineLightMode
                                onClick={() => handleVersion("light")}
                            />
                        ))}
                </Icons>
            </ToolbarContainer>
        </>
    );
};

export default Toolbar;