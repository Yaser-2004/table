import React from 'react'
import Nav from '../Components/Nav'
import SideBar from '../Components/SideBar'
import CustomTable from '../Components/CustomTable'

const Details = () => {
  return (
    <div>
      <Nav />
      <div className='flex'>
        <SideBar pageName={"Details"} />
        <CustomTable />
      </div>
    </div>
  )
}

export default Details
