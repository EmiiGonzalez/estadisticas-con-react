export const getDataColors = opacity => {
    const colors = ['#7448c2', '#21c0d7', '#d99e2b', '#ff006e', '#073b4c', '#e14eca', "#FFFF00", '#ff0000', '#00FF7F', '#3338ff']
    return colors.map(color => opacity ? `${color + opacity}` : color)
}

export const color = (color ,opacity) => {
    const colors = ['#7448c2', '#21c0d7', '#d99e2b', '#ff006e', '#073b4c', '#e14eca', '#FFFF00', '#ff0000', '#00FF7F', '#0038ff']
    return colors[color] + opacity
}