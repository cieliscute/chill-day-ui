import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"
import WeatherCard from '@/components/common/WeatherCard'

import { useState, useEffect } from 'react'
import { SquarePen } from 'lucide-react'

interface Params {
  data: number[],
}


function DotCarousel({data = []}: Params) {
  const [api, setApi] = useState<CarouselApi>()
  const [currIndex, setCurrIndex] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }
 
    api.on("select", (e) => {
      setCurrIndex(e.selectedScrollSnap())
    })
  }, [api])

  function scrollCard(e, index: number) {
    if (!api) {
      return
    }
    api.scrollTo(index)
  }

  return (
    <Carousel
      opts={{
        align: "center",
        // loop: true,
      }}
      setApi={setApi}
    >
      <h2 className='flex items-center justify-between px-4'>
        <span>其他地區</span>
        <SquarePen className="cursor-pointer w-6 h-6"/>
      </h2>

      <CarouselContent className='pt-4 pb-3 pl-4'>
        {
          data.map(item => (
        <CarouselItem key={item} className='basis-auto pl-4'>
          <WeatherCard data={[1]} size="sm" />
        </CarouselItem>
          ))
        }
      </CarouselContent>

      <div className="flex items-center justify-center gap-2">
        {
        data.map((item, index) => (
          <div key={item} className={`p-1 rounded-full  cursor-pointer ${currIndex === index ? 'w-[1.8rem] ' : ''}`} style={{background: currIndex === index ? 'linear-gradient(#2A63FF 0%, #4F44EB 100%)' : `rgba(79, 68, 235, ${(1 / data.length) * (data.length - index)})`}}  onClick={($event) => {
            if (api) {
              api.scrollTo(index)
            }
          }}/>
        ))
        }
      </div>
    </Carousel>
  )
}

export default DotCarousel