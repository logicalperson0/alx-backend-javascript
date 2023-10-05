interface MajorCredits {
    credits: number;
    _brand: 'major';
}

interface MinorCredits {
    credits: number;
    _brand: 'minor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
    const summing = subject1.credits + subject2.credits;

    const Major: MajorCredits = {
        credits: summing,
        _brand: 'major',

    }
    return Major;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
    const summing = subject1.credits + subject2.credits;

    const Minor: MinorCredits = {
        credits: summing,
        _brand: 'minor',

    }
    return Minor;
}