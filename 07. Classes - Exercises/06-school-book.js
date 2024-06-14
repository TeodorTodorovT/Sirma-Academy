function schoolBook(studentsArr) {
    const grades = new Map();

    for (let i = 1; i <= 12; i++) {
        grades.set(i, { students: [], scores: [] });
    }

    studentsArr.forEach((student) => {
        const name = student.split(',')[0].split(': ')[1];
        const grade = Number(student.split(',')[1].split(': ')[1]);
        const score = Number(student.split(',')[2].split(': ')[1]);

        if (score >= 3 && grade < 12) {
            grades.get(grade + 1).students.push(name);
            grades.get(grade + 1).scores.push(score);
        }
    });

    grades.forEach((grade, index) => {
        if (grade.students.length) {
            const average = (
                grade.scores.reduce((a, b) => a + b, 0) / grade.scores.length
            ).toFixed(2);

            console.log(`${index} Grade`);
            console.log(`List of Students: ${grade.students.join(', ')}`);
            console.log(`Average annual score from last year: ${average}`);
            console.log('===');
        }
    });
}

schoolBook([
    'Student name: Mark, Grade: 8, Graduated with an average score: 4.75',
    'Student name: Ethan, Grade: 9, Graduated with an average score: 5.66',
    'Student name: George, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Steven, Grade: 10, Graduated with an average score: 4.20',
    'Student name: Joey, Grade: 9, Graduated with an average score: 4.90',
    'Student name: Angus, Grade: 11, Graduated with an average score: 2.90',
    'Student name: Bob, Grade: 11, Graduated with an average score: 5.15',
    'Student name: Daryl, Grade: 8, Graduated with an average score: 5.95',
    'Student name: Bill, Grade: 9, Graduated with an average score: 6.00',
    'Student name: Philip, Grade: 10, Graduated with an average score: 5.05',
    'Student name: Peter, Grade: 11, Graduated with an average score: 4.88',
    'Student name: Gavin, Grade: 10, Graduated with an average score: 4.00',
]);
