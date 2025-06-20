import Answer from './Answers'
export default function QuestionAnswer({item,index}){
    return(
           <div key={index + Math.random()} className={item.type == 'q' ? 'flex justify-end' : ''}>
                    {
                      item.type == 'q' ? <li key={index + Math.random()} className='  text-right w-fit  dark:bg-zinc-700  border-8  dark:border-zinc-700 bg-red-100 border-red-100 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl p-1'><Answer totalResult={1} type={item.type} ans={item.text} index={index} /></li>
                        : item.text.map((ansItem, ansIndex) => (
                          <li index={ansIndex + Math.random()} className='text-left p-1 '><Answer type={item.type} totalResult={item.length} ans={ansItem} key={ansIndex} /></li>
                        ))
                    }
                  </div>
    )
    
}