import { YMaps, Map, useYMaps } from '@pbe/react-yandex-maps'
import React, { useEffect, useRef } from 'react'
import { ArrowDownIcon, DeleteIcon, Preloader, UpdateIcon } from '../icons'

export default function YandexMap() {
  const mapRef = useRef(null)
  const ymaps = useYMaps(['Map'])

  useEffect(() => {
    if (!ymaps || !mapRef.current) {
      return;
    }

    new ymaps.Map(mapRef.current, {
      center: [56.74160758449387,37.16145249999998],
      zoom: 12,
    });
  }, [ymaps]);

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
            ? <div ref={mapRef} className='map__field' />
            : <div className='preloader'>
                <Preloader/>
              </div>
          }
      </div>
  )
}
