import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { dummyData } from '../assets/data'
import { ArrowLeftIcon } from 'lucide-react'

const ResumeBuilder = () => {

  const { resumeId } = useParams()

  const [resumeData , setResumeData] = useState(
    {
      _id: '',
      title: '',
      personal_Info:{},
      personal_summary:"",
      experience:[],
      education:[],
      projects:[],
      skills:[],
      template: "classic",
      accent_color: "#3B82F6",
      public:"false",
    }
  )

  const loadExistingResume = async()=> {
    const resume = dummyData.find(resume => resume._id === resumeId)
    if(resume)
    {
      setResumeData(resume)
      document.title = resume.title
    }
  }

  useEffect(()=>{
    loadExistingResume()
  },[])

  return (
    <div>
        <div className='max-w-7xl mx-auto px-4 py-6'>
          <Link to='/layout' className='inline-flex gap-2 items-center text-slate-700  hover:text-slate-900 transition-all'> 
            <ArrowLeftIcon className='size-4'/> Back to Dashboard
          </Link>
        </div>

        <div className='max-w-7xl mx-auto px-4 pb-8'>
          <div className='grid lg:grid-cols-12 gap-8'>
            {/* Left-side - Form */}
            <div></div>
            {/* Right-side -Preview */}
            <div></div>
          </div>
        </div>

    </div>
  )
}

export default ResumeBuilder