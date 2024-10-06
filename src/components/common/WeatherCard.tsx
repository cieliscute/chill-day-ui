import Image from '@/components/common/Image'

interface Params {
  data: number[],
  className?: string
}

function WeatherCard({ data, className = '' }: Params) {
  return (
    <ul
      className={"bg-white py-3 px-4 rounded-xl shadow-box flex flex-wrap justify-between gap-1.5 w-max" + className}
    >
      {data.map((item, index) => (
        <li className="flex flex-col gap-2" key={index}>
          <p>明早</p>
          <div className="flex items-center justify-between gap-3">
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
