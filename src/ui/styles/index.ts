import { colors, fontSizes, fonts } from '../../theme'

export const flex = (
    flex: number | string,
    reduce: string,
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
        justifyContent: justify,
        alignItems: align,
        width: reduce,
        height: reduce,
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
