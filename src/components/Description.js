
import { Link } from 'react-router-dom'


const Description = () => {
  return (
    <div className='centered-text mt-4'>
        <p className="tagline">
            Pioneering Excellence in Electric Switchgear
          </p>
          <p className="description">
            Since 1975, Apex has been a dedicated provider of cutting-edge
            electric motor safety and control devices. Our commitment to quality
            and innovation has made us a trusted and leading brand in the
            electric switchgear industry.
         <Link to="../About">more</Link>
          </p>
    </div>
    
  )
}

export default Description
