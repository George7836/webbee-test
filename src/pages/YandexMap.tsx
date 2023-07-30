import { Placemark, YMaps, useYMaps, Map } from '@pbe/react-yandex-maps'
import { ArrowDownIcon, DeleteIcon, Preloader, UpdateIcon } from '../icons'

export default function YandexMap() {
  const ymaps = useYMaps(['Map'])

  return (
      <div className='map'>
        <div className='map__top'>
          <h3 className='map__title'>Basic map</h3>
          <div className='map__buttons'>
            <a href='#' className='map__btn'>
              <ArrowDownIcon/>
            </a>
            <a href='#' className='map__btn'>
              <UpdateIcon/>
            </a>
            <a href='#' className='map__btn'>
              <DeleteIcon/>
            </a>
          </div>
        </div>
          {ymaps 
            ? <YMaps>
                <Map
                  className='map__field'
                  defaultState={{
                    center: [56.32143738580229,44.00381608593748],
                    zoom: 10,
                  }}
                >
                  <Placemark geometry={[56.32143738580229,44.00381608593748]} />
                </Map>
              </YMaps>
            : <div className='preloader'>
                <Preloader/>
              </div>
          }
      </div>
  )
}