function condenseArray(arr) {
  let i = 0;
  while (arr.length > 1) {
    if (arr.length == 2) {
      arr[0] = arr[0] + arr[1];
      arr.pop();    
    } else if (arr[i + 1] !== undefined) {
      arr[i] = arr[i] + arr[i + 1];
      i++;
    } else {
      arr.pop();
      i = 0;
    }
  }

  console.log(arr[0]);
}

condenseArray([1]);
