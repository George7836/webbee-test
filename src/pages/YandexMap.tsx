import { Placemark, YMaps, useYMaps, Map } from '@pbe/react-yandex-maps'
import React, { useEffect, useRef } from 'react'
import { ArrowDownIcon, DeleteIcon, Preloader, UpdateIcon } from '../icons'
import PageContainer from '../components/PageContainer'
import ymaps from 'yandex-maps'

export default function YandexMap() {
  // const mapRef = useRef(null)
  const ymaps = useYMaps(['Map'])

  // useEffect(() => {
  //   if (!ymaps || !mapRef.current) {
  //     return;
  //   }

  //   new ymaps.Map(mapRef.current, {
  //     center: [56.74160758449387,37.16145249999998],
  //     zoom: 12,
  //   });
  // }, [ymaps]);

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
