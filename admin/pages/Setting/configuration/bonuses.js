import React from 'react'
import Adminlayout from "../../../components/Adminlayout";
import HeaderSettings from "../../../components/Header";
import Settings from "../../../components/Settings";
const Bonuses = () => {
  return (
    <Adminlayout>
    <div className="container">
        <Settings />
        <div className="w-full flex">
        <HeaderSettings /> 
        <div className="w-100">
        Bonuses
        </div>
        </div>
      </div>
    </Adminlayout>
  )
}

export default Bonuses
