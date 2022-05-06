export interface FeedbackCreateData{
    type: string;
    comment: string;
    screenshot?: string;
}

export interface Feedbackrepository{
    create: (data: FeedbackCreateData) => Promise<void>
}