import { useEffect, useState } from "react";
import Styles from "./badge.component.module.css";

export const Badge = ({
    textsize,
    textcolor,
    size,
    text,
    borderradius,
    backgroundcolor,
    bordertype,
    bordercolor,
    fontweigth,
    borderweigth,
    display,
}) => {

    const textsizes = {
        xs : 'text-xs',
        s : 'text-s',
        m : 'text-m',
        l : 'text-l',
        xl : 'text-xl',
    };

    const textcolors = {
        white : 'text-white',
        black : 'text-black',
        blue : 'text-blue',
        yellow : 'text-yellow',
        green : 'text-green',
        red : 'text-red',
        purple : 'text-purple',
    };

    const sizes = {
        xs: 'xs',
        s: 's',
        m: 'm',
        l: 'l',
        xl: 'xl'
    };

    const borderradiuss = {
        xs : 'radius-xs',
        s : 'radius-s',
        m : 'radius-m',
        l : 'radius-l',
        xl : 'radius-xl',
    };

    const backgroundcolors = {
        blue : 'bg-blue',
        yellow : 'bg-yellow',
        green : 'bg-green',
        red : 'bg-red',
        purple : 'bg-purple',
    };

    const bordertypes = {
        solid : 'border-solid',
        dashed : 'border-dashed',
        dotted : 'border-dotted',
    };

    const bordercolors = {
        blue : 'border-blue',
        yellow : 'border-yellow',
        green : 'border-green',
        red : 'border-red',
        purple : 'border-purple',
        white: 'border-white',
        black: 'border-black',
    };

    const fontweigths = {
        light : 'light',
        normal : 'normal',
        bold : 'bold',
    };

    const borderweigths = {
        xs : 'border-xs',
        s : 'border-s',
        m : 'border-m',
        l : 'border-l',
        xl : 'border-xl',
    };


    const displays = {
        inline : 'inline',
        inlineblock : 'inline-block',
        block : 'block',
    };




    const [_textSize, setTextSize] = useState('text-m');
    const [_textColor, setTextColor] = useState('text-white');
    const [_size, setSize] = useState('m');
    const [_borderRadius, setBorderRadius] = useState('radius-m');
    const [_backgroundColor, setBackgroundColor] = useState('bg-blue');
    const [_borderType, setBorderType] = useState('solid');
    const [_borderColor, setBorderColor] = useState('border-blue');
    const [_fontWeight, setFontWeight] = useState('border-m');
    const [_borderWeigth, setBorderWeigth] = useState('normal');
    const [_display, setDisplay] = useState('inline-block');

    useEffect(() => {
        setSize(sizes[size] || 'text-m');
        setTextSize(textsizes[textsize] || 'text-m');
        setTextColor(textcolors[textcolor] || 'text-white');
        setBorderRadius(borderradiuss[borderradius] || 'radius-m');
        setBackgroundColor(backgroundcolors[backgroundcolor] || 'bg-blue');
        setBorderType(bordertypes[bordertype] || 'solid');
        setBorderColor(bordercolors[bordercolor] || 'border-blue');
        setFontWeight(fontweigths[fontweigth] || 'normal');
        setBorderWeigth(borderweigths[borderweigth] || 'border-m');
        setDisplay(displays[display] || 'inline-block');
    },[])

    return (
        <div
            className="badge"
        >
            <span
                className={`${Styles[_textSize]} 
                            ${Styles[_textColor]} 
                            ${Styles[_size]} 
                            ${Styles[_borderRadius]} 
                            ${Styles[_backgroundColor]} 
                            ${Styles[_borderType]} 
                            ${Styles[_borderColor]} 
                            ${Styles[_fontWeight]} 
                            ${Styles[_borderWeigth]} 
                            ${Styles[_display]}`}
      >
            {text}
        </span>
    </div >
  );
};