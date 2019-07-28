import { Link } from '../routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import { CityItem, TempItem, TempImg, ButtonDelete, CityHeader } from '../components/layout'
const CityList = ({ cities, onDelete }) => (
        cities.map((city, i) => {
            return(
                <CityItem key={i}>
                    <ButtonDelete onClick={() => onDelete(city)}><FontAwesomeIcon icon={faTrashAlt} size="xs"/></ButtonDelete>
                    <Link key={i} route='city' params={{id: city.id}}>
                        <CityHeader>{city.name}</CityHeader>
                    </Link>
                    <TempImg src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}></TempImg>
                    <TempItem>{city.main.temp}</TempItem>
                </CityItem>
            )
        })
    )


export default CityList