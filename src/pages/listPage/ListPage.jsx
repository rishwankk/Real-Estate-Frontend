import React from 'react'
import "./listpage.scss"
import { listData } from '../../lib/dummyData'
export const ListPage = () => {
    const data=listData;
  return (
    <div className='listPage'>
        <div className="listContainer">
            <div className="wrapper"></div>
        </div>
        <div className="mapContainer"></div>
    </div>
  )
}
