import Image from '@/components/common/Image'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

interface Params {
  data: number[],
  className?: string,
  size?: "default" | "sm" | null | undefined
}

const cardVariants = cva(
  'bg-white rounded-xl shadow-box flex flex-wrap justify-between gap-1.5 w-max min-w-full',
  {
    variants: {
      variant: {
        default: '',
        sm: ''
      },
      size: {
        default: 'py-3 px-4',
        sm: 'py-2 px-3'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)


function WeatherCard({ data, className = '', size = 'default' }: Params) {
  return (
    <ul
      className={cn(cardVariants({size, className}))}
    >
      {data.map((item, index) => (
        <li className="flex flex-col gap-2" key={index}>
          <p>明早</p>
          <div className="flex items-center justify-between gap-4">
            <Image fileName="cloudy" className="w-[3rem] h-[3rem]" />
            <div className="text-sm">
              <p>26°</p>
              <p>20% 晴時多雲</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default WeatherCard
