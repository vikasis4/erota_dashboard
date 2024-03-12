import { colors, fontSizes, fonts } from '../../theme'

export const flex = (
    flex: number | string,
    width: string,
    justify: string,
    align: string,
    gap: number,
    direction: string,
    background: string | null,
    wrap: string
): {} => {
    var newBg = background as keyof typeof colors;
    var addStyle = background ? { backgroundColor: colors[newBg] } : {}
    return {
        flex,
        width,
        justifyContent: justify,
        alignItems: align,
        gap,
        flexDirection: direction,
        flexWrap: wrap,
        ...addStyle,
        boxSizing: 'borderBox',
    }
}

export const text = (
    color: number | string,
    textAlign: string,
    size: string,
    weight: string
): {} => {
    var newColor = color as keyof typeof colors.text;
    var newFontSize = size as keyof typeof fontSizes;
    var newWeight = weight as keyof typeof fonts;
    return {
        color: colors.text[newColor],
        textAlign,
        fontSize: fontSizes[newFontSize],
        fontFamily: fonts[newWeight]
    }
}
