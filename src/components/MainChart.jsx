import AreaChart from './AreaChart'
import '../styles/MainChart.css'
import ChartIcons from './ChartIcons'

export default function Example() {
  return (
    <div className='chart-container'>
      <div className='flex'>
        Upcoming hours
        <div className='flex'>
          <div className='flex-icon'>
            Rain precipitation <span class='material-icons'>expand_more</span>
          </div>
          <div className='flex-icon'>
            Next days <span class='material-icons'>chevron_right</span>
          </div>
        </div>
      </div>
      <ChartIcons />
      <div className='chart'>
        <AreaChart />
      </div>
    </div>
  )
}
