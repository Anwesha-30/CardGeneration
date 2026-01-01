import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className="h-full w-full">
      <div className="flex h-full items-center gap-10 bg-amber-950 px-16">
        <LeftContent />
        <RightContent />
      </div>
    </div>
  )
}

export default Page1Content

