import { mailAdapter } from "../adapters/mail-adapters";
import { Feedbackrepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest{
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCase {
    constructor(
        private feedbacksrepository: Feedbackrepository,
        private mailAdapter: mailAdapter
    ){}

    async execute(request: SubmitFeedbackUseCaseRequest){
        const {type, comment, screenshot} = request

        if(!type){
            throw new Error('Type is required')
        }
        if(!comment){
            throw new Error('Comment is required')
        }

        await this.feedbacksrepository.create({
            type,
            comment,
            screenshot,
        })

        await this.mailAdapter.sendMail({
        subject: 'Novo feedback',  
        body: [`
            <div style="color: grey"`,`
            <p> teste: ${type} </p>`,`
            <p> comment: ${comment} </p>`,`
            </div>
        `].join('\n')
        })
        
    }
}