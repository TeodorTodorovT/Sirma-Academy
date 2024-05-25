function arrayManipulations(arr) {
    let result = arr.shift().split(' ');
    arr.forEach((x) => {
        let command = x.split(' ');
        if (command[0] == 'Add') {
            result.push(command[1]);
        } else if (command[0] == 'Remove') {
            result.splice(result.indexOf(command[1]), 1);
        } else if (command[0] == 'RemoveAt') {
            result.splice(command[1], 1);
        } else if (command[0] == 'Insert') {
            result.splice(command[2], 0, command[1]);
        }
    });
    console.log(result);
}

arrayManipulations([
    '4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3',
]);
