'use client';
import { useDrag } from 'react-dnd';

export default function Card({ isDragging, text }: any) {
    const [{ opacity }, dragRef] = useDrag(
        () => ({
            type: 'CARD',
            item: { text },
            collect: (monitor) => ({
                opacity: monitor.isDragging() ? 0.5 : 1,
            }),
        }),
        []
    );
    return (
        <div
            ref={dragRef}
            style={{ opacity }}
            className='bg-blue-500 inline-block px-3 py-2 rounded-lg text-white'
        >
            {text}
        </div>
    );
}
