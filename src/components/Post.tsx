import React, { useState } from 'react'
import { ArrowDownIcon, ArrowUpIcon, CommentIcon, ViewsIcon, WatchIcon } from '../icons'
type Post = {
    title: string,
    content: string,
}

export default function Post({title, content}: Post) {
    const [selected, setSelected] = useState(false)
    
    const toggle = () => {
        setSelected(!selected)
    }

    return (
        <article 
            className='post'
            onClick={() => toggle()}  
            >
            <div className='post__title'>
                <h4>{title}</h4>
                <div className='post__time'>
                    <WatchIcon/>
                    <span>53 minutes ago</span>
                    {selected ? <ArrowUpIcon/> : <ArrowDownIcon/>}
                </div>
            </div>
            <div className={selected ? 'post__content show' : 'post__content'}>
                <img src={content} alt="" />
                <div className='post__comment'>
                    <div className='post__comment-top'>
                        <CommentIcon/>
                        <p>
                            <span className='post__commentator'>Jason Anderson</span> commented:
                        </p>
                    </div>
                    <div className='post__comment-content'>
                        <p className='post__comment-text'>Don’t sit and wait. Get out there, feel life. Touch the sun, and immerse in the sea. Keep love in your heart. A life without it is like a sunless garden when the flowers are dead. Because summer is passion, memories, light breeze, the sun that appears on the skin and caresses the face.</p>
                        <span className='post__comment-date'>– Jason, 10:30 am</span>
                    </div>
                    <div className='post__stats'>
                        <div className='post__views'>
                            <ViewsIcon/>
                            432
                        </div>
                        <div className='post__threads'>
                            <CommentIcon/>
                            47
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
