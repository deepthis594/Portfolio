function HomeScreen (){
    return (
        <div>
            <img className="w-full h-[60vh] object-cover" 
            alt="main" src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=2952&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <h1 className="text-4xl px-4 py-8 font-bold">Hi, I am Deepthi!</h1>
            <p className="text-slate-600 text-xl">A software engineer specialized in frontend technologies like React, JavaScript and CSS. I love building applications.</p>
            <p className="text-slate-600 text-xl">You can find more about my work here.</p>
            <ul className="flex w-1/2 mx-auto my-20 justify-center gap-8 text-xl"> 
                <li>
                <a href="https://www.linkedin.com/in/deepthi-sullia/">linkedin</a> 
                </li>
                <li>
                <a href="https://github.com/deepthis594">GitHub</a>
                </li>
                <li>
                <a href="https://stackoverflow.com/users/5173529/deepthi-s">StackOverflow</a>
                </li>
            </ul>
        </div>
    )
 }

export default HomeScreen;