import { useEffect, useState } from "react";
import {checkHeading, replaceHeadingStars} from "./helper";
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown'
export default function Answer({ ans, index,totalResult,type }) {
    let [heading, setHeading] = useState(false);
    let [answer,setAnswer]=useState(ans);
    useEffect(() => {
        if (checkHeading(ans)) {
            setHeading(true)
            setAnswer(replaceHeadingStars(ans))
        }

    }, [])
    let renderer={
        code({node,inline,className,children,...props}){
                const match=/language-(\w+)/.exec(className||' ');
                return !inline &&match?(
                    <SyntaxHighlighter
                    {...props}
                    children={String(children).replace(/\n$/,"")}
                    language={match[1]}
                    style={dark}
                    preTag="div"
                    />
                ):(
                   <code {...props} className={className}>
                    {children}
                   </code>
                )
        }
    }
    return (
        <>
            {index==0 && totalResult>1?<span className="pt-2 text-lg block text-zinc-400">{answer}</span>:
            heading ? <span className="pt-2 text-lg block text-zinc-400" >{answer}</span> : 
            <span className={type=='q'?'pl-1 text-white':'pl-5 text-white'}>
                <ReactMarkdown components={renderer}>{answer}</ReactMarkdown></span>}
        </>
    )
}