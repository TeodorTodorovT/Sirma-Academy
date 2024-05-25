function addAndRemove(arr) {
    let result = [];
    let curr = 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'add') {
            result.push(curr);
            curr++;
        } else if (arr[i] == 'remove') {
            result.pop();
        }
    }

    if (result.length) {
        console.log(result.join(' '));
    } else {
        console.log('Empty');
    }
}

addAndRemove(['add', 'add', 'add']);
