'use client';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Card from './Card';

export default function Builder() {
    return (
        <DndProvider backend={HTML5Backend}>
            <div>Builder</div>
            <Card text='Some text here.' />
        </DndProvider>
    );
}
