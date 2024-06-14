function solve(n, m, h) {
    let totalCount = 0;
  
    for (let i = 0; i < h; i++) {
      totalCount += n + i * m;
    }
    console.log(totalCount);
}