import React from 'react'
import NoteContext from './NoteContext'

export default function NoteState(props) {
    const notes= 
        [
            {
              "_id": "61cd7411432b63a90a15031b",
              "user": "61cd5f66651497d901aa6619",
              "title": "my title",
              "description": "jdjksahdjhjdkjsd",
              "date": "2021-12-30T08:55:45.628Z",
              "__v": 0
            },
            {
              "_id": "61ce90762fd35dce83d39070",
              "user": "61cd5f66651497d901aa6619",
              "title": "my title new",
              "description": "jdjksahdjhjdkjsd new",
              "date": "2021-12-31T05:09:10.578Z",
              "__v": 0
            },
            {
              "_id": "61d266a14f4926230329e4ca",
              "user": "61cd5f66651497d901aa6619",
              "title": "hello first node",
              "description": "nxjndjsjjjjjjjjjjjjjjjjjj first",
              "date": "2022-01-03T02:59:45.266Z",
              "__v": 0
            },
            {
              "_id": "61d266a44f4926230329e4cc",
              "user": "61cd5f66651497d901aa6619",
              "title": "hello first node",
              "description": "nxjndjsjjjjjjjjjjjjjjjjjj first",
              "date": "2022-01-03T02:59:48.812Z",
              "__v": 0
            },
            {
              "_id": "61d266a54f4926230329e4ce",
              "user": "61cd5f66651497d901aa6619",
              "title": "hello first node",
              "description": "nxjndjsjjjjjjjjjjjjjjjjjj first",
              "date": "2022-01-03T02:59:49.599Z",
              "__v": 0
            },
            {
              "_id": "61d266a64f4926230329e4d0",
              "user": "61cd5f66651497d901aa6619",
              "title": "hello first node",
              "description": "nxjndjsjjjjjjjjjjjjjjjjjj first",
              "date": "2022-01-03T02:59:50.217Z",
              "__v": 0
            },
            {
              "_id": "61d266a64f4926230329e4d2",
              "user": "61cd5f66651497d901aa6619",
              "title": "hello first node",
              "description": "nxjndjsjjjjjjjjjjjjjjjjjj first",
              "date": "2022-01-03T02:59:50.511Z",
              "__v": 0
            },
            {
              "_id": "61d266a64f4926230329e4d4",
              "user": "61cd5f66651497d901aa6619",
              "title": "hello first node",
              "description": "nxjndjsjjjjjjjjjjjjjjjjjj first",
              "date": "2022-01-03T02:59:50.711Z",
              "__v": 0
            },
            {
              "_id": "61d266a64f4926230329e4d6",
              "user": "61cd5f66651497d901aa6619",
              "title": "hello first node",
              "description": "nxjndjsjjjjjjjjjjjjjjjjjj first",
              "date": "2022-01-03T02:59:50.911Z",
              "__v": 0
            },
            {
              "_id": "61d266a74f4926230329e4d8",
              "user": "61cd5f66651497d901aa6619",
              "title": "hello first node",
              "description": "nxjndjsjjjjjjjjjjjjjjjjjj first",
              "date": "2022-01-03T02:59:51.113Z",
              "__v": 0
            },
            {
              "_id": "61d266a74f4926230329e4da",
              "user": "61cd5f66651497d901aa6619",
              "title": "hello first node",
              "description": "nxjndjsjjjjjjjjjjjjjjjjjj first",
              "date": "2022-01-03T02:59:51.306Z",
              "__v": 0
            },
            {
              "_id": "61d266a74f4926230329e4dc",
              "user": "61cd5f66651497d901aa6619",
              "title": "hello first node",
              "description": "nxjndjsjjjjjjjjjjjjjjjjjj first",
              "date": "2022-01-03T02:59:51.507Z",
              "__v": 0
            },
            {
              "_id": "61d266a74f4926230329e4de",
              "user": "61cd5f66651497d901aa6619",
              "title": "hello first node",
              "description": "nxjndjsjjjjjjjjjjjjjjjjjj first",
              "date": "2022-01-03T02:59:51.687Z",
              "__v": 0
            },
            {
              "_id": "61d266a74f4926230329e4e0",
              "user": "61cd5f66651497d901aa6619",
              "title": "hello first node",
              "description": "nxjndjsjjjjjjjjjjjjjjjjjj first",
              "date": "2022-01-03T02:59:51.914Z",
              "__v": 0
            }
          ]
    return (
        <div>
            <NoteContext.Provider value={notes}>
                {props.children}
            </NoteContext.Provider>
        </div>
    )
}
