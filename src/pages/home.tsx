import { MapPin, EllipsisVertical, ExternalLink, Sun, Wind, SquarePen } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Image from '@/components/common/Image'
import WeatherCard from '@/components/common/WeatherCard'
import OtherArea from '@/components/home/OtherArea'

function Home() {
  return (
    <main>
    <div className="p-4">
      <nav className="pt-3 flex justify-between mb-5">
        <div className="flex gap-1 text-white">
          <MapPin className="w-7 h-7" />
          <section className="font-bold">
            <h1 className="px-2 text-xl">臺北市</h1>
            <p className="text-sm">2024/09/27 12:50</p>
          </section>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <EllipsisVertical className="w-8 h-8 text-white" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className='text-xs w-[7.5rem]' align="end">
            <DropdownMenuItem className='flex justify-between p-2'>
                <span>切換單位</span>
                <span className='text-gray'>°C</span>
            </DropdownMenuItem>
            <DropdownMenuItem className='flex justify-between p-2'>
              <span>衛星雲圖</span>
              <ExternalLink className='text-gray w-4 h-4'/>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>

      <div className='flex justify-between mb-10 text-white w-[85%] mx-auto font-semibold'>
        <div>
          <Image fileName="cloudy" className="w-[7.5rem]" />
          <p className='flex justify-center  gap-2'>
            <span>20%</span>
            <span>晴時多雲</span>
          </p>
        </div>
        <section>
          <h2 className='text-7xl font-bold mb-3'>20°</h2>
          <div className='flex items-center justify-between text-sm gap-4 mb-2'>
            <Sun className='w-6 h-6' />
            <div>
              <span className='mr-2'>11+</span>
              <span className='text-xs py-[2px] px-1 bg-white bg-opacity-30'>注意防曬</span>
            </div>
          </div>
          <div className='flex items-center justify-between text-sm gap-4'>
            <Wind className='w-6 h-6' />
            <div>
              24km/h
            </div>
          </div>
        </section>

      </div>

      <WeatherCard data={[1, 2]} />

    </div>
    <OtherArea data={[1, 2, 3, 4]}/>
    </main>
  )
}

export default Home
