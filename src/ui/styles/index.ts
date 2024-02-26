import { colors, fontSizes, fonts } from '../../theme'

export const flex = (flex: number, dir: number, jc: number, ai: number, gap: number, wr: number): {} => {
    return {
        flex,
        flexDirection: dir == 1 ? 'column' : 'row',
        justifyContent: jc == 2 ? 'start' : jc == 1 ? 'center' : 'end',
        alignItems: ai == 2 ? 'start' : ai == 1 ? 'center' : 'end',
        gap,
        flexWrap: wr == 1 ? 'wrap' : 'noWrap',
    }
}

export const text = (col: number | string, ps: string, s: number, w: number): {} => {
    return {
        color: col == 1 ? colors.text : col == 2 ? 'rgba(0,0,0,0.8)' : col,
        textAlign: ps,
        fontSize: s == 1 ? fontSizes['xl'] : s == 2 ? fontSizes['2xl'] : s == 3 ? fontSizes['4xl'] : fontSizes['6xl'],
        fontFamily: w == 1 ? fonts['xs'] : w == 2 ? fonts['sm'] : w == 3 ? fonts['md'] : fonts['lg']
    }
}

export const box = (h: number | string, w: number | string, bg: number | string): {} => {
    return {
        height: h,
        width: w,
        backgroundColor: bg === 1 ? colors.primary : bg === 2 ? colors.secondary : bg === 3 ? colors.dark : bg === 4 ? colors.accent : bg,
        boxSizing: 'borderBox',
    }
}

export const margin = (t: number | string, r: number | string, b: number, l: number): {} => {
    return {
        marginTop: t,
        marginRight: r,
        marginBottom: b,
        marginLeft: l
    }
}

export const padding = (t: number | string, r: number | string, b: number, l: number): {} => {
    return {
        paddingTop: t,
        paddingRight: r,
        paddingBottom: b,
        paddingLeft: l
    }
}