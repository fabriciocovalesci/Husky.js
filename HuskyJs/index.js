
export const Soma = (x, y) => {
    x = typeof x === "number" ? x : parseInt(x.match(/^[0-9]*$/))[0]
    y = typeof y === "number" ? y : parseInt(y.match(/^[0-9]*$/)[0])
    return x + y;
}


