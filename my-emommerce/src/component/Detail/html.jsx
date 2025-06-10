import Img1 from '../../img/html-structure.png'
import Img2 from '../../img/a-1664528015671-2x.jpg'
const HTML = () => {
   
    return ( 
        <div className="container sm:w-[100%] dark:bg-slate-900 dark:text-white">
            <div className="w-[80%] m-auto p-6">
                <h1 className=" font-khmer1 p-2">🔰 អ្វីទៅជា HTML?</h1>
                <div className=" font-khmer bg-slate-600 p-8 rounded-lg text-white w-[100%]">
                     - HTML (HyperText Markup Language) គឺជាភាសាសម្គាល់ (markup language) ដែលត្រូវបានប្រើសម្រាប់បង្កើត និងរចនាទំព័រវេបសាយ។ <br /> វាជាគ្រឿងសំខាន់ក្នុងការបង្កើតគេហទំព័រ និងជាគោលដៅដំបូងដែលអ្នកចាប់ផ្តើមគួរតែសិក្សា។<br />
                     - បង្ហាញមាតិកា (content) លើគេហទំព័រ <br />
                     - រៀបចំរចនាសម្ព័ន្ធ (structure) របស់ទំព័រ <br />
                     - ប្រើជាមួយ CSS និង JavaScript ដើម្បីធ្វើអោយគេហទំព័រមានសភាពទាន់សម័យ និងអន្តរកម្ម<br />
                     . របៀបសាកល្បងកូដ HTML <br />
                    1.បើកកម្មវិធី (text editor) ដូចជា Notepad, VS Code, ឬ Sublime Text។ <br />
                    2.សរសេរកូដ HTML ហើយរក្សាទុកជាឯកសារដែលមាន .html (ឧ. index.html)។ <br />
                    3.បើកឯកសារនោះនៅក្នុងកម្មវិធីរុករក (browser) ដូចជា Chrome ឬ Firefox ដើម្បីមើលលទ្ធផល។ <br />
                     </div>
            </div>
            <hr className="w-[75%] border border-gray-600 m-auto dark:border-white" />
            <div className="w-[80%] m-auto p-6">
                <h1 className=" font-khmer1 p-2">🔰 រចនាសម្ព័ន្ធ-Structure</h1>
                <div className=" font-khmer bg-slate-600 p-8 rounded-lg text-white w-[100%]">
                    <img src={Img1} alt="" className='xl:h-80 rounded-md sm:h-40 m-auto'/>
                    <br />
                 <p> -!DOCTYPE html : បញ្ជាក់ថានេះជា HTML5។</p>
                 <p> -html : កំណត់ភាសាជាខ្មែរ។</p>
                 <p> -head : ផ្ទុកព័ត៌មានមេតា (metadata) ដូចជាចំណងជើង។</p>
                 <p> -body : ផ្ទុកខ្លឹមសារដែលបង្ហាញនៅលើទំព័រ។</p>
                </div>
 
            </div>
              <hr className="w-[75%] border border-gray-600 m-auto dark:border-white" />
             <div className="w-[80%] m-auto p-6">
                <h1 className=" font-khmer1 p-2">🔰 (Tags) សំខាន់ៗ</h1>
                <div className=" font-khmer bg-slate-600 p-8 rounded-lg text-white w-[100%]">
                    -h1 ដល់ h6 : ចំណងជើង (heading) ពីធំទៅតូច។<br />
                    -p : កថាខណ្ឌ (paragraph)។<br />
                    -a href="URL" : តំណភ្ជាប់ (link)។ ឧទាហរណ៍: <a href="https://www.google.com" className='text-yellow-500'>ទៅ Google</a>។<br />
                    -img src="image.jpg" alt="ពិពណ៌នារូបភាព" : បញ្ចូលរូបភាព។<br />
                    -div: បែងចែកផ្នែកនៃទំព័រ។<br />
                    -ul និង li: បញ្ជីមិនរៀបលំដាប់ (unordered list)។ ឧទាហរណ៍: <br />
                    <img src={Img2} alt="" className='xl:h-80 p-2 rounded-xl sm:h-40 m-auto'/>
                </div>
            </div>
        </div>
     );
}
 
export default HTML;