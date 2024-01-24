import React from 'react'
import { userProfileIcon } from '../utils/constants';

// const commentsList = [
//     {
//         name: "Isabel Sanchez",
//         comment: "silence again room snow claws shore instrument nobody once coal loss darkness noise desert mostly bush foreign exact they situation owner column cell nearby",
//         replies: [
//             {
//                 name: "Ina Peterson",
//                 comment: "depth satellites read nice point active softly foreign grain unit tune probably strange tie term bell subject element cook nor will foot date event",
//                 replies: [],
//             }
//         ]
//     }
// ]

const commentsList = [
    {
        name: "Clara Haynes",
        comment: "date also silent till plus cell hurry service bad empty care success smooth important doll rhyme loose year wealth tried clock summer cookies which",
        replies: [
            {
                name: "Leila Stokes",
                comment: "pattern political sky correctly moving rate fish pet only whatever compound brass grew nation thought shelf whenever instant voyage passage sheet noted window conversation",
                replies: [
                    {
                        name: "Jared Harrington",
                        comment: "satisfied nothing muscle open sitting cave production border fourth since bend cannot off at public mountain massage compound understanding earlier by steam itself means",
                        replies: [
                            {
                                name: "Russell Santos",
                                comment: "introduced seldom steep aid some person loss got plane mostly spirit friend active practical cake break said handle talk all hole gold rising secret",
                                replies: [{
                                    name: "Milton Copeland",
                                    comment: "inside minute underline summer chair develop feed crop water whistle firm move belt business swing examine pitch merely chance tall naturally observe fight coffee",
                                    replies: [
                                        {
                                            name: "Mabel Vasquez",
                                            comment: "regular planning development they dollar produce language late trail mad successful swim until necessary color then rocky attempt shoot action art deer frozen stock",
                                            replies: [
                                                {
                                                    name: "Ethel Coleman",
                                                    comment: "four general missing frequently frighten escape mental afraid white rising citizen variety way according matter fastened stared ago wealth point location arrive series what",
                                                    replies: [
                                                        {
                                                            name: "John Ingram",
                                                            comment: "shaking swam hot replace possible pencil bare tongue detail pair joined importance largest aboard alive receive swimming thread particles stairs five remain evidence somewhere",
                                                            
                                                            replies: [],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "Birdie Newton",
        comment: "signal hot climate certain report foot quietly became down football brush beyond becoming current different loose notice grow friend mostly excellent rest pilot additional",
        replies: [],
    },
    {
        name: "Leona Bowen",
        comment: "metal type raw week applied shop adventure interior angry war such progress far drove lion pattern mice foreign safe fastened greatly arrow world structure",
        replies: [],
    },
    {
        name: "Virginia Cook",
        comment: "price similar easier monkey order aloud than plate were either them key type related decide yet themselves three task diagram stove condition eager snake",
        replies: [],
    },
    {
        name: "Harry Price",
        comment: "become orange heavy she degree read map here circus per running ants rule represent has deeply basis horn upward word rod collect inside hand",
        replies: [],
    },
]


const Comment = ({ commentObj }) => {
    const { name, comment } = commentObj;
    return (
        <div className='flex flex-row justify-start items-start gap-2 bg-gray-300 p-2 rounded-lg w-full'>
            <img className="w-10" src={userProfileIcon} alt="error" />
            <div className='flex flex-col'>
                <span className='font-semibold text-[18px]'>{name}</span>
                <span>{comment}</span>
            </div>
        </div>
    );
}


function Comments({ commentList }) {
    return (
        <div className='flex flex-col gap-4 w-full'>
            {commentList.map((commentObj, idx) => {
                return <div key={idx} className='flex flex-col gap-2'>
                    <Comment commentObj={commentObj} />
                    {Array.isArray(commentObj['replies']) && commentObj['replies'].length !== 0 ?
                        <div className='flex flex-col gap-2 pl-5  border-l-2'><Comments commentList={commentObj['replies']} /></div> : ""}
                </div>
            })}
        </div>
    );
}
function CommentsContainer() {
    return (
        <div className='max-w-[800px] w-full'>
            <h1 className='text-xl font-semibold pb-4'>Comments:</h1>
            <Comments commentList={commentsList} />
        </div>
    )
}

export default CommentsContainer