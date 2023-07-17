import { ReactNode } from 'react'
import { ArrowDownIcon, DeleteIcon, UpdateIcon } from '../icons'

type PageContainerProps = {
    title: string;
    children: ReactNode;
}

export default function PageContainer({title, children}: PageContainerProps) {
  return (
    <div className='page-container'>
        <div className='page-container__top'>
          <h3 className='page-container__title'>{title}</h3>
          <div className='page-container__buttons'>
            <a href='#' className='page-container__btn'>
              <ArrowDownIcon/>
            </a>
            <a href='#' className='page-container__btn'>
              <UpdateIcon/>
            </a>
            <a href='#' className='page-container__btn'>
              <DeleteIcon/>
            </a>
          </div>
        </div>
        {children}
      </div>
  )
}