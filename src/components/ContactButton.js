import React from 'react'


export default function ContactButton({link,Icon}) {
  return (
    <a className="m-2 h-12 w-12 rounded-full border flex justify-center items-center z-30 bg-gradient-to-t from-[#330867] to-[#0072ff] dark:from-[#330867] dark:to-[#0072ff]" href={link} target='_blank'>
        <Icon/>
    </a>
  )
}
