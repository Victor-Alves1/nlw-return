import { CloseButton } from "../CloseButton";
import bugImage from '../../button-card/image/bug.svg'
import ideaImage from '../../button-card/image/idea.svg'
import thoughtImage from '../../button-card/image/thought.svg'
import { useState } from "react";
import { FeedbackContentStep } from "./FeedbackContentStep";
import { FeedbackSucessStep } from "./FeedbackSucessStep";
import { FeedbackTypeStep } from "./FeedbackTypeStep";

export const feedbackTypes = {
    Bug: 
        {
            title: 'Problema', 
            image: {
                source: bugImage,
                alt:'Imagem de um inseto',
            }
        },
    Idea: 
        {
            title: 'Ideia',
            image: {
                source: ideaImage,
                alt:'Imagem de uma lâmpada',
            }
        },
    Other: 
        {
            title: 'Outro',
            image: {
                source: thoughtImage,
                alt:'Imagem de um balão de pensamento',
            }
        },
}

export type FeedbackType = keyof typeof feedbackTypes
export function WidgetForm(){
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)

    function handleFeedbackReset() {
        setFeedbackSent(false)
        setFeedbackType(null)
    }

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem) md:w-auto">
            
            {
                feedbackSent ? 
                (<FeedbackSucessStep onFeedbackReset={handleFeedbackReset} />
                ):(
                    <>{
                        !feedbackType 
                        ?
                            (
                            <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType}/>
                        ) : (
                            <FeedbackContentStep 
                                feedbackType={feedbackType}
                                onFeedbackReset={handleFeedbackReset}
                                onFeedbackSent={()=>setFeedbackSent(true)}
                            />
                            ) 
                    }</>
                ) 
            }

            
            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="hhtps://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
}