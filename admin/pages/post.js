import React, { useState } from 'react'
import PostTable from '../components/Post/PostTable'

const post = () => {
  const [tableData, setTableData] = useState([]);
  return (
    <div >
      <PostTable  />
    </div>
  )
}

export default post
