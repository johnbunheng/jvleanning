import Img1 from '../../img/html.png'
import Img2 from '../../img/css.webp'
import Img3 from '../../img/js.png'
import Img4 from '../../img/c++.png'
import { Link } from 'react-router-dom'
import { useState } from 'react';
const Home = () => {
    const [cuorse,Setcuorse] = useState([
        {
            id:1,
            image:Img1,
            name:"HTML",
            title:"Learn fundamental of HTML",
            link:"/html"
        },
        {
            id:2,
            image:Img2,
            name:"CSS & HTML",
            title:"Websites with CSS",
            link:"/css"
        },
        {
            id:3,
            image:Img3,
            name:"JavaScript",
            title:"Add interactivity with JavaScript"
        },
        {
            id:4,
            image:Img4,
            name:"C++",
            title:"C++ Programming language"
        }
    ]);
    return ( 
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
               
                <h1 className="mb-4  text-4xl font-khmer1 tracking-tight leading-none md:text-5xl lg:text-6xl dark:text-white bg-gradient-to-r from-red-500 to-blue-900 bg-clip-text text-transparent p-5">សូមស្វាគមន៏មកកាន់វេបសាយរៀន <br /><span className="font-bold mb-4 text-4xl font-khmer1 leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white tracking-[1rem]">Code</span></h1>
                <p className="mb-8 text-lg font-khmer font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">អ្វីដែលខ្ញុំរៀន និងអ្វីដែលខ្ញុំអនុវត្ត គឺជាការចែករំលែកចំណេះដឹង ទ្រឹស្តី ការសិក្សាស្រាវជ្រាវ បទពិសោធន៍អនុវត្តនជាក់ស្តែង និងឧត្តមានុវត្តដែលវាគ្មិនបានពិភាក្សា ព្រមទាំងអ្នកចូលរួមទាំងអស់បានចែករំលែក ក្នុងបំណងជួយពង្រឹងការអភិវឌ្ឍ និងការអនុវត្តរបៀបវារៈនានា</p>
                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        Learn more
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                    <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                        Watch video
                    </a>  
                </div>
                <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                    <span className="font-semibold text-gray-400 uppercase">FEATURED IN</span>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 justify-center items-center mt-8 text-gray-500 sm:justify-between ">
                         {
                            cuorse.map((item)=>{
                                return(
                                    
                                   <div key={item.id} className="max-w-sm p-5 bg-white border justify-items-center border-gray-200 rounded-lg shadow-sm hover:scale-110 duration-200 dark:bg-gray-800 dark:border-gray-700">
                                        <a href="#">
                                            <img className="rounded-t-lg w-52" src={item.image} alt="" 
                                             
                                            />
                                        </a>
                                        <div className="p-5">
                                            <a href="#">
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                            </a>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.title}</p>
                                            <Link to={item.link} href="#" className="inline-flex items-center px-3 py-2 text-sm font-khmer font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                ចាប់ផ្តើមរៀន
                                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>

                                )
                            })
                         }
                    </div>
                </div> 
            </div>
        </section>
     );
}
 
export default Home;