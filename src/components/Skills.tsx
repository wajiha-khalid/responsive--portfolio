import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div  data-aos="zoom-in-up">
                <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
            <p className='text-gray-500 pt-2'>I have a foundation in HTML, CSS, TypeScript, Next.js, and Tailwind CSS, which I am actively working to strengthen. I have applied these skills to create interactive, responsive web interfaces. While my proficiency is still growing, I am dedicated to improving and delivering clean, efficient code. I am excited to expand my knowledge in modern web development.
              </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h2  data-aos="zoom-in-up">Typescript</h2>
                        <h2  data-aos="zoom-in-up">Next.js</h2>
                        <h2  data-aos="zoom-in-up">Tailwind css</h2>
                    </div> 
                    <div className='space-y-2'>
                        <h2  data-aos="zoom-in-up">HTML</h2>
                        <h2  data-aos="zoom-in-up">CSS</h2>
                        <h2  data-aos="zoom-in-up">Java</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
