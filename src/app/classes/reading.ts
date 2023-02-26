export class Reading {

    constructor(
        public id: number,
        public question:string,
        public answer: string,
        public option1: string,
        public option2: string,
        public option3: string,
        public option4: string,
        public createdDate: Date,
        public updatedDate: Date
){

}
}
