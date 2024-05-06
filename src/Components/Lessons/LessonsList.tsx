import React, { useEffect, useState } from 'react';
import lessonProvider from "../../Api/LessonProvider";
import { Card, Image, List, Space } from "antd";
import { Post } from "../../Models/Lesson";
const { Meta } = Card;

// @ts-ignore
function LessonsList() {
    const [lessons, setLessons] = useState<Post[]>([])
    useEffect(() => {
        lessonProvider
            .getAllLessons()
            .then(value => {
                setLessons(value.products)
            })
    }, [])
    return (<div>
        <List grid={{
            gutter: 16,
            column: 3
        }} renderItem={(l, i) => {
            return (<List.Item><Card key={i}
                          title={l.title}
                          cover={<Image className={"itemCardImage"} src={l.thumbnail} alt={"."}/>}
            >
                <Meta
                    title={`${l.price} рублей`}
                      description={l.description}/>
            </Card></List.Item>)
        }} dataSource={lessons}>
        </List>
    </div>);
}

// @ts-ignore
export default LessonsList;