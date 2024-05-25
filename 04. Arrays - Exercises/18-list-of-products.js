function productList(arr) {
    let result = [];
    arr.sort()
    arr.forEach((x, i) => {
        result.push(`${i + 1}.${x}`)
    })
    console.log(result);
}

productList(["Potatoes", "Tomatoes", "Onions", "Apples"]);