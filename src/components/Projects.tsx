import React from 'react'
import Header from './Heading';
import Card from './Card';
const data =[
    {
    id: 0,
    title: "Static Resume",
    desc: "A HTML,CSS & Typescript based professional Static Resume",
    img: "/project-1.jpg",
    tags: ["HTML", "CSS", "Node", "Typescript"],
    },
    {
    id: 1,
    title: "Calculator",
    desc: "A HTML,CSS & javascript based calculator",
    img: "/project-2.jpg", 
    tags: ["HTML", "CSS", "Node", "Javascript"],
    },
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
    <Header  title='My projects' />
    <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-2 place-items-center'>
        {data.map((el) =>(<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
    </div>
    </div>
  )
}

export default Projects
