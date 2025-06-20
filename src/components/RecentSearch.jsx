export default function RecentSearch({recentHistory,setRecentHistory,setSelectedHistory}) {
    function clearHistory() {
        localStorage.clear();
        setRecentHistory([]);
    }
    return (
        <div className='col-span-1 dark:bg-zinc-800 bg-red-100 pt-3'>
            <h1 className=' text-xl dark:text-white text-zinc-800 flex justify-center text-center gap-2 '>
                <span>Recent Search</span>
                <button className='pt-0.5 cursor-pointer bg-zinc-600 p-1 rounded-2xl ' onClick={clearHistory}><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e3e3e3"><path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" /></svg></button>
            </h1>
            <ul className='mt-2 text-left overflow-auto  '>
                {

                    recentHistory && recentHistory.map((item,index) => (
                        <li key={index} onClick={() => setSelectedHistory(item)} className='px-5 pl-11 dark:text-zinc-400 text-zinc-700 cursor-pointer dark:hover:bg-zinc-600 hover:bg-red-200 hover:text-zinc-800 dark:hover:text-zinc-100 truncate'>{item}</li>
                    ))
                }
            </ul>
        </div>

    )
}