import DashBoard from '@/assets/Components/DashBoard/DashBoard'
import Chart from "./../../Components/Chart/Chart"
import React from 'react'
import ChartCount from '@/assets/Components/ChartCount/ChartCount'

export default function Home() {
  return (
    <div>
      <DashBoard/>
      <Chart/>
      <ChartCount/>
    </div>
  )
}
