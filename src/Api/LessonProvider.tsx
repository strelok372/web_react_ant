import React from 'react';
import { Lesson } from "../Models/Lesson";

class LessonProvider {
    getAllLessons(): Promise<Lesson> {
        return fetch('https://dummyjson.com/products')
            .then(res => res.json())
    }
}

export default new LessonProvider();