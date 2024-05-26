function shortestAndLongest(sentence) {
    let sentenceArr = sentence.match(/\b\w+\b/g);
    let shortest = sentenceArr[0];
    let longest = sentenceArr[0];


    sentenceArr.forEach((x) => {
        if (x.length > longest.length) {
            longest = x;
        }

        if (x.length < shortest.length) {
            shortest = x;
        }
    });

    console.log(`Longest -> ${longest}`);
    console.log(`Shortest -> ${shortest}`);
}

shortestAndLongest("Lorem Ipsum is dummy text of the typesetting industry.");
