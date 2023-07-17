import { ReactNode, useState } from 'react'
import { ArrowDownIcon, ArrowUpIcon } from '../icons';

type AccordeonProps = {
    title: string;
    children: ReactNode;
}

export default function Accordeon({title, children}: AccordeonProps) {
    const [opened, setOpened] = useState(true)

    return (
        <div className='accordeon'>
            <div 
                className='accordeon__top'
                onClick={() => setOpened(!opened)}
            >
                <h4 className='accordeon__title'>{title}</h4>
                {opened ? <ArrowUpIcon/> : <ArrowDownIcon/>}
            </div>
            <div className={opened ? 'accordeon__content open' : 'accordeon__content'}>
                {children}
            </div>
        </div>
    )
}