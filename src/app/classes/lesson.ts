import { Video } from './video';
import {Mcq} from './mcq';
import {Reading} from './reading';
import {Vocabulary} from './vocabulary';
import {FillInTheBlank} from './fill-in-the-blank';

export class Lesson {

    constructor(public id: number,
                public name: string,
                public video: Video[],
                public mcq: Mcq[],
                public reading: Reading[],
                public vocabulary: Vocabulary[],
                public fillInTheBlank: FillInTheBlank[]){}
}
