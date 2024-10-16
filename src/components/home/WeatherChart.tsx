import Image from '@/components/common/Image'
import { useCallback, useEffect, useRef, useState } from 'react'

interface Params {
  data: { temp: number }[]
}

function WeatherChart({ data = [] }: Params) {
  const pointCount = useRef(0)

  const tagColor = useCallback((temperature: number):string => {
    const temp = Number(temperature)
    if (temp >= 35) {
      return 'bg-[#EA4242]'
    } else if (temp >= 30) {
      return 'bg-[#F5B92F]'
    } else if (temp >= 25) {
      return 'bg-[#13D69C]'
    }  else if (temp >= 20) {
      return 'bg-[#20ABF6]'
    } else if (temp >= 15) {
      return 'bg-[#2072F6]'
    } else {
      return 'bg-[#3C46F8]'
    }
  }, [])

  const setTempPoint = useCallback((temperature: number): string => {
    pointCount.current++
    
    const tempArr = data.map(item => item.temp)
    const maxTemp = Math.max(...tempArr)
    const minTemp = Math.min(...tempArr)
    const unit =  (maxTemp - minTemp) / data.length
    const top = (maxTemp - temperature ) * unit
    return top  + '%'
  }, [data])

  useEffect(() => {
    const eleDots = document.querySelectorAll('.point')
    eleDots.forEach((ele: any, index: number) => {
      const eleNext: any = eleDots[index - 1]
      if (!eleNext) {
        return
      }
      let eleLine = ele.querySelector('i')
      if (!eleLine) {
        eleLine = document.createElement('i')
        eleLine.className = 'line'
        ele.appendChild(eleLine)
      }
      // 记录坐标
      const boundThis = ele.getBoundingClientRect()
      // 下一个点的坐标
      const boundNext = eleNext.getBoundingClientRect()
      // 计算长度和旋转角度
      const x1 = boundThis.left,
        y1 = boundThis.top
      const x2 = boundNext.left,
        y2 = boundNext.top
      // 长度
      const distance = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))
      // 弧度
      const radius = Math.atan2(y2 - y1, x2 - x1)
      // 设置线条样式
      eleLine.style.width = distance + 'px'
      eleLine.style.transform = `rotate(${radius}rad)`
      eleLine.style.position = 'absolute'
      eleLine.style.left = '50%'
      eleLine.style.top = '50%'
      eleLine.style.height = '1px'
      eleLine.style.boxSizing = 'border-box'
      eleLine.style.background = '#C8C8C8'
      eleLine.style.transformOrigin = 'left center'
      eleLine.style.marginTop = '-1px'
      eleLine.style.pointerEvents = 'none'
      eleLine.style.zindex = '-1'
    });
    
  }, [pointCount.current])

  
  

  return (
    <section className="bg-white rounded-xl shadow-box py-4 pl-4">
      <h2 className="mb-4">三小時預報</h2>

      <ul className="flex overflow-x-auto gap-3">
        {data.map((item, index) => (
          <li key={index} className="flex flex-col items-center">
            <Image fileName="cloudy" className="w-8 h-8" />
            <p className="text-sm mb-3">20%</p>
            <div className="h-8 w-2 mb-2 relative">
              <i className="point block w-2 h-2 rounded-full bg-[#C8C8C8] absolute" style={{top: setTempPoint(item.temp)}}/>
            </div>
            <div className={`${tagColor(item.temp)} text-sm py-0.5 px-2 rounded text-white mb-1`}>{item.temp}°</div>
            <p className="py-0.5">12 時</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default WeatherChart
