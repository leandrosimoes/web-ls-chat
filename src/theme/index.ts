/* eslint-disable @typescript-eslint/naming-convention */
import { ETheme } from '../enums'
import { ITheme } from '../interfaces'

export const COMMON_COLORS = {
    BLACK: '#000',
    WHITE: '#FFF',
    GREY: '#6b778d',
    DARK_GREY: '#263859',
    VERY_LIGHT_GREY: '#eff8ff',
    VERY_LIGHT_BLUE: '#b1e8ed',
    BLUE: '#2470a0',
    ORANGE: '#ffc045',
    DARK: '#17223b',
    LIGHT: '#f1f6f9',
}

export const DARK_COLORS = {
    RED: '#ff6768',
    YELLOW: '#ffe05d',
    GREEN: '#4ecca3',
    ...COMMON_COLORS,
}

export const LIGHT_COLORS = {
    RED: '#ec524b',
    YELLOW: '#ffd700',
    GREEN: '#61b15a',
    ...COMMON_COLORS,
}

const LightTheme: ITheme = {
    DEFAULT_BG_COLOR: LIGHT_COLORS.LIGHT,
    DEFAULT_COLOR: LIGHT_COLORS.DARK,
    INPUT_BG_COLOR: LIGHT_COLORS.VERY_LIGHT_GREY,
    INPUT_FG_COLOR: LIGHT_COLORS.DARK,
    PRIMARY_BUTTON_BG_COLOR: LIGHT_COLORS.BLUE,
    PRIMARY_BUTTON_FG_COLOR: LIGHT_COLORS.LIGHT,
    MESSAGE_BG_COLOR: LIGHT_COLORS.VERY_LIGHT_GREY,
    USER_MESSAGE_BG_COLOR: LIGHT_COLORS.VERY_LIGHT_BLUE,
    MESSAGE_PENDING_ICON_COLOR: LIGHT_COLORS.GREY,
    MESSAGE_DELIVERY_ICON_COLOR: LIGHT_COLORS.GREY,
    MESSAGE_READ_ICON_COLOR: LIGHT_COLORS.BLUE,
    MESSAGE_REPLY_BG_COLOR: LIGHT_COLORS.WHITE,
    CLOSE_ICON_FG_COLOR: LIGHT_COLORS.BLUE,
    MESSAGE_SELECTED_BG_COLOR: LIGHT_COLORS.ORANGE,
    CONTROLS_BG_COLOR: LIGHT_COLORS.ORANGE,
}

const DarkTheme: ITheme = {
    DEFAULT_BG_COLOR: DARK_COLORS.DARK,
    DEFAULT_COLOR: DARK_COLORS.LIGHT,
    INPUT_BG_COLOR: DARK_COLORS.DARK_GREY,
    INPUT_FG_COLOR: DARK_COLORS.LIGHT,
    PRIMARY_BUTTON_BG_COLOR: DARK_COLORS.BLUE,
    PRIMARY_BUTTON_FG_COLOR: DARK_COLORS.LIGHT,
    MESSAGE_BG_COLOR: DARK_COLORS.VERY_LIGHT_GREY,
    USER_MESSAGE_BG_COLOR: DARK_COLORS.VERY_LIGHT_BLUE,
    MESSAGE_PENDING_ICON_COLOR: DARK_COLORS.GREY,
    MESSAGE_DELIVERY_ICON_COLOR: DARK_COLORS.GREY,
    MESSAGE_READ_ICON_COLOR: DARK_COLORS.BLUE,
    MESSAGE_REPLY_BG_COLOR: LIGHT_COLORS.DARK_GREY,
    CLOSE_ICON_FG_COLOR: DARK_COLORS.BLUE,
    MESSAGE_SELECTED_BG_COLOR: DARK_COLORS.ORANGE,
    CONTROLS_BG_COLOR: DARK_COLORS.ORANGE,
}

export const Theme = {
    LightTheme,
    DarkTheme,
}

export const getCurrentTheme = () => {
    if (document.readyState === 'complete') {
        const currentTheme = document.querySelector<HTMLDivElement>('.ls-chat')
        
        if (!currentTheme) return Theme.LightTheme

        return localStorage.getItem('lstheme') === ETheme.DARK.toString() 
            ? Theme.DarkTheme 
            : Theme.LightTheme
    }

    return Theme.LightTheme
}

export const setCurrentTheme = (nextTheme: ETheme) => {
    const currentTheme = document.querySelector<HTMLDivElement>('.ls-chat')
    localStorage.setItem('lstheme', nextTheme.toString())
}