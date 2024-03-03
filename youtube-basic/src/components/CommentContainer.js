import React from "react";

const comments = [
  {
    name: "Amritesh Vemra",
    test: "Loren It is a long established fact that a reader will be distracted",
    replies: [
      {
        name: "Abhay Gupta",
        test: "Loren It is a long established fact that a reader will be distracted",
        replies: [
          {
            name: "Ashwani soni",
            test: "Loren It is a long established fact that a reader will be distracted",
            replies: [],
          },
        ],
      },
      {
        name: "Nikhil Srivastav",
        test: "Loren It is a long established fact that a reader will be distracted",
        replies: [],
      },
      {
        name: "Vikash singh",
        test: "Loren It is a long established fact that a reader will be distracted",
        replies: [],
      },
    ],
  },
  {
    name: "Shivangi singh",
    test: "Loren It is a long established fact that a reader will be distracted",
    replies: [],
  },
];

const Comments = ({ name, text }) => {
  return (
    <div className="inline-flex flex-row items-center bg-slate-200 border-l-2 border-grey p-3 rounded-md">
      <div className="h-10 w-10 rounded-full bg-red-200 ml-[auto] mr-4 ">
        {/* <img
          src="./image/amriteshVerma.jpeg"
          alt="Amritesh Verma"
          className="h-full w-full rounded-full"
        /> */}
        <div className="h-full w-full rounded-full flex items-center justify-center font-bold">
          {name?.slice(0, 1)}
        </div>
      </div>
      <div>
        <div className="font-semibold text-md">{name}</div>
        <div className=" text-sm">{text}</div>
      </div>
    </div>
  );
};

const CommentLists = ({ comments }) => {
  if (comments.length === 0) return;
  return (
    <React.Fragment>
      {comments.map((comment, index) => {
        return (
          <div className=" my-2" key={"comment" + index}>
            <Comments name={comment.name} text={comment.test}></Comments>
            <div className="pl-10 border-l-2 border-l-slate-500">
              <CommentLists comments={comment.replies} />
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
      <div className="text-2xl font-bold">Comments</div>
      <CommentLists comments={comments} />
    </div>
  );
};

export default CommentContainer;
