function Grade(Score) {
    switch (true) {
        case (Score>=550):
            console.log("The Student Score grade is A");
            break;
        case (Score>=400 && Score<550):
            console.log("The Student Score grade is B");
            break;
            case (Score<400):
            console.log("The Student Score grade is C");
            break;
        default:
            console.log("The student grade is  D");
            break;
    }
    
}Grade(600)