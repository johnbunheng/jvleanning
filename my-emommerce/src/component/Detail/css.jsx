const CSS = () => {
    return ( 
      <div className="container sm:w-[100%] mx-auto p-6 dark:bg-gray-900 dark:border-white text-white min-h-screen">
                    <h1 className="text-4xl font-khmer1 font-bold text-center text-yellow-400 mb-8">មេរៀន HTML និង CSS</h1>

                    {/* Section 1: Introduction */}
                    <section className="w-[80%] mt-8 m-auto p-6 bg-gray-800 rounded-lg shadow-lg">
                        <h2 className="ឮ font-semibold text-blue-300 mb-4 font-khmer1">១. មេរៀន HTML មូលដ្ឋាន</h2>
                        <p className="text-gray-300 font-khmer mb-4">
                            HTML (HyperText Markup Language) ជាភាសាមូលដ្ឋានសម្រាប់បង្កើតគេហទំព័រ។ វាប្រើស្លាក (tags) ដើម្បីរៀបចំខ្លឹមសារដូចជាចំណងជើង កថាខណ្ឌ និងរូបភាព។
                        </p>
                        <pre className="bg-gray-700 p-4 rounded-lg text-green-300">
                            {`<!DOCTYPE html>
                            <html lang="km">
                            <head>
                                <title>ទំព័រដំបូង</title>
                            </head>
                            <body>
                                <h1>សួស្តី!</h1>
                                <p>នេះជាកថាខណ្ឌ។</p>
                            </body>
                            </html>`}
                        </pre>
                    </section>
                     <hr className="w-[75%] mt-8 border border-gray-600 m-auto dark:border-white" />
                    {/* Section 2: CSS Basics */}
                    <section className="w-[80%] mt-8 m-auto p-6 bg-gray-800 rounded-lg shadow-lg">
                        <h2 className="font-semibold text-blue-300 mb-4 font-khmer1">២. CSS មូលដ្ឋាន</h2>
                        <p className="text-gray-300 mb-4 font-khmer">
                            CSS (Cascading Style Sheets) ប្រើដើម្បីកំណត់រចនាប័ទ្មដូចជាពណ៌ ទំហំអក្សរ និងប្លង់។ ឧទាហរណ៍នៅក្រោមបង្ហាញការបន្ថែមរចនាប័ទ្ម៖
                        </p>
                        <pre className="bg-gray-700 p-4 rounded-lg text-green-300">
                                {`/* CSS Example */
                                h1 {
                                    color: blue;
                                    font-size: 24px;
                                }
                                p {
                                    background-color: gray;
                                    padding: 10px;
                                }`}
                        </pre>
                        <br />
                        <p className="font-khmer">លទ្ធផល</p>
                        <div className="mt-4 p-4 bg-gray-700 rounded-lg font-khmer">
                            <h1  style={{ color: 'blue', fontSize: '24px' }}>ចំណងជើង</h1>
                            <p style={{ backgroundColor: 'gray', padding: '10px' }}>នេះជាកថាខណ្ឌជាមួយរចនាបទ។</p>
                        </div>
                    </section>
                     <hr className="w-[75%] mt-8 border border-gray-600 m-auto dark:border-white" />
                    {/* Section 3: Advanced HTML & CSS */}
                    <section className="w-[80%] mt-8 m-auto p-6 bg-gray-800 rounded-lg shadow-lg">
                        <h2 className="font-khmer1 font-semibold text-blue-300 mb-4">៣. HTML និង CSS កម្រិតខ្ពស់</h2>
                        <p className="text-gray-300 mb-4 font-khmer">
                            - ប្រើ <code>&lt;div&gt;</code> ដើម្បីបែងចែកផ្នែក។<br />
                            - CSS Flexbox ជួយរៀបចំប្លង់ផ្នែក៖
                        </p>
                        <pre className="bg-gray-700 p-4 rounded-lg text-green-300">
                            {`.container {
                                display: flex;
                                justify-content: space-between;
                            }
                            .item {
                                width: 100px;
                                height: 100px;
                                background-color: coral;
                            }`}
                        </pre>
                        <div className="mt-4 flex justify-between">
                            <div className="w-24 h-24 bg-coralflex justify-between">
                            <div className="w-24 h-24 bg-coral"></div>
                            <div className="w-24 h-24 bg-coral"></div>
                        </div>
                        </div>
                    </section>
                    
                     <hr className="w-[75%] mt-8 border border-gray-600 m-auto dark:border-white" />
                    {/* Section 4: Tips */}
                    <section className="w-[80%] mt-8 m-auto p-6 bg-gray-800 rounded-lg shadow-lg">
                        <h2 className=" font-semibold text-blue-300 mb-4 font-khmer1">៤. គន្លឹះ</h2>
                        <p className="text-gray-300 font-khmer">
                            - សាកល្បងកូដនៅលើ <a href="https://codepen.io" className="text-blue-400 hover:underline">CodePen</a>.<br />
                            - រៀនអំពី Grid និង Responsive Design សម្រាប់ទំព័រធំៗ។<br />
                            - ស្វែងរកឯកសារនៅ <a href="https://www.w3schools.com" className="text-blue-400 hover:underline">W3Schools</a>.
                        </p>
                    </section>
                </div>
            );
     
}
 
export default CSS;