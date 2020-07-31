import "../assets/style.css";
import Link from 'next/link';

function SubscribeToEmailList() {
    return (
        <div className='bg-orange-200 mt-8'>
            <div className='mx-6 flex'>
                <div className='pt-8'>
                    <div>
                        <h1 className='text-center text-2xl font-black mb-5'>Only the best dishes.</h1>
                        <form>
                            <div className='flex justify-center rounded-t-md mx-8 my-0'>
                                    <input className="bg-white border-orange-400 rounded-t-md w-full py-4 px-8 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500" placeholder="email..."/>                             
                            </div>
                            <div class="flex justify-center my-0 mb-5 mx-8">
                                <button class="bg-primary hover:bg-orange-400 focus:shadow-outline focus:outline-none text-white font-bold py-4 px-24 rounded-b-md shadow-lg text-lg" type="button">
                                    Subscribe
                                </button>
                            </div>
                        </form>    
                        <p className='text-center text-xs mb-4'>You'll get an email when we discover another dish you MUST try.</p>
                    </div>
                    <div className='mb-8 h-32'>
                        <img src="https://static.tacdn.com/img2/brand/feed/home_hero_got_illustration.svg" alt="placeHolder img"/>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default SubscribeToEmailList