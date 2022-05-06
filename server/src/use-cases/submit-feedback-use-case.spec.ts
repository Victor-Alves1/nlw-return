import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

describe('Submit feedback', ()=>{
    it('should be able to submit a feedback', async ()=>{
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: async() =>{}},
            {sendMail: async()=>{}}
        )
        await expect(submitFeedback.execute({
            type: 'Bug',
            comment: 'example',
            screenshot: 'not.jpg',
        })).resolves.not.toThrow()
    })
})