import Cloudy from '../../assets/img/cloudy.png';

interface Params {
  fileName: string,
  className?: string
}

function Image({ fileName, className = '' }: Params) {
  const Images: {[key: string]: string} = {
    cloudy: Cloudy
  }

  return (<img src={Images[fileName]} alt={fileName} className={className} />)
}

export default Image
