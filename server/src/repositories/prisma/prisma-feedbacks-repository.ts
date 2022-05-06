import { FeedbackCreateData, Feedbackrepository } from "../feedbacks-repository";
import Prisma from "../../Prisma";

export class PrismaFeedbacksRepository implements Feedbackrepository{
    async create({type, comment, screenshot}: FeedbackCreateData){
        await Prisma.feedback.create({
            data:{
                type,
                comment,
                screenshot,
            }
        })
    };
}