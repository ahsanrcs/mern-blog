import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DashProfile from '../components/DashProfile';
import DashSidebar from '../components/DashSidebar';

export default function Dashboard() {
  const location = useLocation();
  const [tab,setTab] = useState('');
  useEffect(()=>{
    const urlPrams = new URLSearchParams(location.search);
    const tabFormUrl = urlPrams.get('tab');
    if(tabFormUrl){
      setTab(tabFormUrl);
    }
  },[location.search]);
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div>
        <DashSidebar/>
      </div>
      <div>
      {tab ==='profile' && <DashProfile/>}
      </div>
    </div>
  )
}
