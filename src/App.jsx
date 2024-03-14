 
import { useState } from 'react'
import './App.css'
import Card from './Component/Card/Card'
import Courses from './Component/Courses/Courses'   
import { useEffect } from 'react';

function App() { 
  const [carts, setCarts] = useState([]);
    const totalCredit = 15
  const hundleCourseBtn = (course) => {
    console.log(course);
    const credits = carts.reduce((p,c) => p+c.credit,0)
    if(credits+course.credit>totalCredit){
       return alert('no r hbe na')
    }
    const alreadyExsist = carts.find(cart => cart.id===course.id)
    if(!alreadyExsist){
      const newCarts = [...carts, course]
      setCarts(newCarts)
    }
    
  }

 

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('fatch.json')
    .then(res => res.json())
    .then(data => setCourses(data))
  },[])

  return (
    <>
       
      <h1 className='text-4xl font-bold text-center'>Previes assainment </h1>
        <div className='lg:grid grid-cols-12 gap-4 mx-auto mt-10 '> 
          <div className='col-span-9 grid lg:grid-cols-3 grid-cols-1 gap-3'>
            {
              courses.map(courses => <Courses key={courses.id} hundleCourseBtn={hundleCourseBtn} course={courses}></Courses>)
            }
          </div>
           <div className='col-span-3'> 
            <Card carts={carts}></Card>
           </div>
        </div>
    </>
  )
}

export default App
