function solve(records, searchTerm) {
    let firstOccurrence = records.indexOf(searchTerm);
    let lastOccurrence = records.lastIndexOf(searchTerm);

    if (firstOccurrence === -1) {
        console.log('Record not found');
        return 'Record not found';
    } else {
        console.log(
            `First Occurrence: ${firstOccurrence}\nLast Occurrence: ${lastOccurrence}`
        );
    }
}

