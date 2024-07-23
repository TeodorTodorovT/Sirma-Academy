function solve(votes) {
    const voteCounts = {
        Yes: 0,
        No: 0,
        Abstain: 0,
    };

    for (const vote of votes) {
        if (voteCounts[vote]) {
            voteCounts[vote]++;
        } else {
            voteCounts[vote] = 1;
        }
    }

    if (
        voteCounts['Abstain'] > 0 &&
        voteCounts['Yes'] === 0 &&
        voteCounts['No'] === 0
    ) {
        console.log('Abstain');
    }

    if (voteCounts['Yes'] === voteCounts['No']) {
        console.log('Tie');
    }

    if (voteCounts['Yes'] > voteCounts['No']) {
        console.log('Yes');
    }

    if (voteCounts['Yes'] < voteCounts['No']) {
        console.log('No');
    }
}
