import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Analysis from './Analysis/Analysis';

const Body = ({sideBar, onClose}) => {
    const [analysis, setAnalysis] = useState(true);
    const [monitor, setMonitor] = useState(false);
    const [workplace, setWorkplace] = useState(false);
    const [fold, setFold] = useState(false)
    const changePage = (page) => {
        if(page === 'analysis') {
            setAnalysis(true)
            setMonitor(false)
            setWorkplace(false)
        } else if(page === 'monitor') {
            setAnalysis(false)
            setMonitor(true)
            setWorkplace(false)
        } else if (page === 'workplace') {
            setAnalysis(false)
            setMonitor(false)
            setWorkplace(true)
        } else {
            setAnalysis(true)
            setMonitor(false)
            setWorkplace(false)
        }
    }
  return (
    <div className='w-full flex mt-12'>
        <Sidebar 
            changePage={changePage} 
            analysis={analysis}  
            monitor={monitor}
            workplace={workplace}
            onFold={() => setFold(true)}
            onUnfold={() => setFold(false)}
            fold={fold}
            sideBar={sideBar}
            onClose={onClose}            
        />
        {analysis && <Analysis fold={fold} onClose={onClose} />}
        
    </div>
  )
}

export default Body