/** Working with Map built-in class. */
class Quiz{
    questions = new Map();
    constructor(questions, students) {
        this.students = students;//array
        questions.forEach(element => this.questions.set(element.qid, element));
    }

    scoreStudentBySid(sid) {
        let score = 0;
        //look up student
        let student = this.students.find(e=> {
            return e.studentID == sid;
        });
        for (let a of student.answers.values()) {
            this.questions.forEach((v,k,m)=>{
                //v is now as Question
                if (k==a.qid && v.checkAnswer(a.answer)) {
                    score += 1;
                }
            })
        }
        return score;
    }

    getAverageScore() {
        let size = students.length;
        let total = students.reduce(((s1,s2)=> this.scoreStudentBySid(s1.studentID) +
            this.scoreStudentBySid(s2.studentID)));
        return total/size;
    }

}
class Student{
    #studentID;
    #answers;
    constructor(id) {
        this.#studentID = id;
        this.#answers = new Map();
    }
    addAnswer(question) {
        this.#answers.set(question.qid, question);
    }

    get studentID() {
        return this.#studentID;
    }
    set studentID(id) {
        this.#studentID = id;
    }
    get answers() {
        return this.#answers;
    }
    set answers(a) {
         this.#answers = a;
    }


}
class Question{
    #qid;
    #answer;
    constructor(qid, answer) {
        this.#qid = qid;
        this.#answer = answer;
    }

    checkAnswer(answer) {
        if (this.#answer == answer) {
            return true;
        } else { 
            return false;
        }
    }

    get qid() {
        return this.#qid;
    }
    set qid(qid) {
        this.#qid = qid;
    }
    get answer() {
        return this.#answer;
    }
    set answer(answer) {
        this.#answer = answer;
    }
}

/** TEST */
const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));

const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));

const students = [student1, student2];
const questions =[new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];
const quiz = new Quiz(questions, students);

let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3

let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2

let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5