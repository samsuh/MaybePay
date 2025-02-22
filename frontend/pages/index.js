import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return(
    <div className='flex-col w-[95vw] h-auto justify-center items-center py-[1.7rem] m-auto '>
      <Head>
        <title>MaybePay</title>
      </Head>
      <div className='text-[4vw] font-ProtoMono-Light text-center'>
        Owner Setting Page   
      </div>
      <div className='flex-col space-y-16  w-auto text-[2vw] font-ProtoMono-Light ' id="owner-container">
        <div className='w-full h-[20vw] flex space-x-7' id="owner-top">
            <div className='w-5/6 h-full ' id="owner-api-list">
            <div className='text-[1.4vw] font-bold mb-4 '>API List</div>
            <div className='grid grid-rows-4 rounded-lg bg-blue-100 w-full h-full gap-3'>
                <div className=' rounded-xl ml-5 mr-20 pl-5  p-3'>
                    <div className='rounded-xl bg-blue-400 text-[1.2vw] text-center flex justify-center self-center py-2 w-[8vw] hover:bg' id="api">API 1</div>
                </div>
                 <div className=' rounded-xl ml-5 mr-20 pl-5  p-3'>
                    <div className='rounded-xl bg-blue-400 text-[1.2vw] text-center flex justify-center self-center py-2 w-[8vw] hover:bg' id="api">API 2</div>
                </div>
                <div className='  ml-5 mr-20 pl-5  p-3 relative'>
                    <div className='rounded-xl bg-blue-400 text-[1.2vw] text-center flex justify-center self-center py-2 w-[8vw] hover:bg' id="api-edit">API 3</div>
                    <div className='absolute w-[5.9vw] border-gray-400 border-b-2 top-8 left-[9.9rem]  '></div>
                    <div className='flex-col space-y-2 items-center justify-center absolute left-[16.2rem]   -bottom-12 border-gray-400 border-2 p-4 rounded-xl' id="owner-settings-inputs">
                        <div className='flex space-x-10 items-center justify-center'>
                            <span className='text-[1.2vw]'>Goal Monthly earning</span>
                            <input className='deposit-amt w-[50%] rounded-md border-blue-200 border-2 pl-2' placeholder='USD' />
                        </div>
                        <div className='flex space-x-7 items-center justify-center '>
                            <span className='text-[1.2vw]'>Expected monthly user</span>
                            <input className='deposit-amt w-[50%] rounded-md border-blue-200 border-2 pl-2' placeholder='USERS' />
                        </div>
                        <div className='flex space-x-7 items-center justify-center'>
                            <span className='text-[1.2vw]'>Payout wallet address</span>
                            <input className='deposit-amt w-[50%] rounded-md border-blue-200 border-2 pl-2'  placeholder='0xb89C33bE71c2aAd77d6712b1AD47274aD9fb7dcb'/>
                        </div>
                        <button className='ml-[37vw]  rounded-lg text-[1.1vw] bg-blue-400 p-2 hover:bg-blue-600 hover:text-white'>Submit</button>
                    </div>
                </div>
                <div className=' rounded-xl ml-5 mr-20 pl-5  p-3'>
                    <div className='rounded-xl bg-blue-400 text-[1.2vw] text-center flex justify-center self-center py-2 w-[8vw] hover:bg' id="api">API 4</div>
                </div>
            </div>

            </div>
            <div className='w-1/6 h-full' id="API-owner-revenue">
                <div className='text-[1.4vw] text-center font-bold mb-4'>API Owner Revenue</div>
                <div className='rounded-lg bg-blue-100' id="revenue-container">
                    <div className='flex-col justify-center items-center px-5 space-y-5 py-5'>
                        <div className='text-[1.2vw] text-center'><span></span>Today Total Revenue</div>
                        <div className=' text-center text-[1.7vw]'>$ 13.35</div>
                        <div id="divider" className='w-full border-2 border-black '></div>
                        <div className='text-[1.2vw]  text-center'><span></span>This Month Total Revenue </div>
                        <div className=' text-center text-[1.7vw]'>$ 422.12</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex w-full h-[20vw] space-x-10'  id="owner-bottom">
            <div className='w-full h-full ' id="maybepay-logs">
                <div className='text-[1.4vw] font-bold mb-4'>MaybePay Logs</div>
                <div className='flex justify-around  rounded-lg bg-blue-100 text-[1.2vw] p-4' id="logs-container">
                   <div class="grid grid-rows-6 gap-4 text-center text-[0.9vw]">
                        <span className='text-[1.2vw]'>TIME</span>
                        <span>Wed, 10 Aug. 2022 16:43:10</span>
                        <span>Wed, 10 Aug. 2022 17:02:10</span>
                        <span>Wed, 10 Aug. 2022 17:31:31</span>
                        <span>Wed, 10 Aug. 2022 17:53:12</span>
                        <span>Wed, 10 Aug. 2022 18:11:06</span>
                        <span>Wed, 10 Aug. 2022 19:43:05</span>
                   </div>
                   <div class="grid grid-rows-6 gap-4 text-center text-[0.9vw]">
                        <span className='text-[1.2vw]'>Event</span>
                        <span>PAID</span>
                        <span>PAID</span>
                        <span>PAID</span>
                        <span>PAID</span>
                        <span>PAID</span>
                        <span>PAID</span>
                   </div>
                   <div class="grid grid-rows-6 gap-4 text-center text-[0.9vw]">
                        <span className='text-[1.2vw]'>AMOUNT</span>
                        <span>0.38¢</span>
                        <span>0.03¢</span>
                        <span>0.13¢</span>
                        <span>0.41¢</span>
                        <span>0.22¢</span>
                        <span>0.60¢</span>
                   </div>
                   <div class="grid grid-rows-6 gap-4 text-center text-[0.7vw]">
                        <span className='text-[1.2vw]'>FROM</span>
                        <span>0xb89C33bE71c2aAd77d6712b1AD47274aD9fb7dcb</span>
                        <span>0xb89C33bE71c2aAd77d6712b1AD47274aD9fb7dcb</span>
                        <span>0xb89C33bE71c2aAd77d6712b1AD47274aD9fb7dcb</span>
                        <span>0xb89C33bE71c2aAd77d6712b1AD47274aD9fb7dcb</span>
                        <span>0xb89C33bE71c2aAd77d6712b1AD47274aD9fb7dcb</span>
                        <span>0xb89C33bE71c2aAd77d6712b1AD47274aD9fb7dcb</span>
                   </div>
                   <div class="grid grid-rows-6 gap-4 text-center text-[0.7vw]">
                        <span className='text-[1.2vw]'>TO</span>
                        <span>0xb34C33bE71c2aAd77d6712b1AD47274adsfb7dcb</span>
                        <span>0xb34C33bE71c2aAd77d6712b1AD47274adsfb7dcb</span>
                        <span>0xb34C33bE71c2aAd77d6712b1AD47274adsfb7dcb</span>
                        <span>0xb34C33bE71c2aAd77d6712b1AD47274adsfb7dcb</span>
                        <span>0xb34C33bE71c2aAd77d6712b1AD47274adsfb7dcb</span>
                        <span>0xb34C33bE71c2aAd77d6712b1AD47274adsfb7dcb</span>
                   </div>
                   <div class="grid grid-rows-6 gap-4 text-center">
                        <span className='text-[1.2vw]'>URL</span>
                        <span className='text-[0.7vw]'>www.raddits.com</span>
                        <span className='text-[0.7vw]'>www.weather.com</span>
                        <span className='text-[0.7vw]'>www.weather.com</span>
                        <span className='text-[0.7vw]'>www.raddits.com</span>
                        <span className='text-[0.7vw]'>www.video.com</span>
                        <span className='text-[0.7vw]'>www.raddits.com</span>
                   </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    )
}