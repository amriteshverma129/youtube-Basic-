import React from "react";

const comments = [
  {
    name: "Amritesh Vemra",
    test: "Loren It is a long established fact that a reader will be distracted",
    replies: [
      {
        name: "Amritesh Vemra",
        test: "Loren It is a long established fact that a reader will be distracted",
        replies: [
          {
            name: "Amritesh Vemra",
            test: "Loren It is a long established fact that a reader will be distracted",
            replies: [],
          },
        ],
      },
      {
        name: "Amritesh Vemra",
        test: "Loren It is a long established fact that a reader will be distracted",
        replies: [],
      },
      {
        name: "Amritesh Vemra",
        test: "Loren It is a long established fact that a reader will be distracted",
        replies: [],
      },
    ],
  },
  {
    name: "Amritesh Vemra",
    test: "Loren It is a long established fact that a reader will be distracted",
    replies: [],
  },
];

const Comments = ({ name, text }) => {
  return (
    <div className="inline-flex flex-row bg-slate-200 border-l-2 border-grey p-1 rounded-sm">
      <div className="h-8 w-8 rounded-full bg-red-400 ml-[auto]">
        <img
          src="./image/amriteshVerma.jpeg"
          alt="Amritesh Verma"
          className="h-8 w-8 rounded-full"
        />
      </div>
      <div>
        <div>{name}</div>
        <div>{text}</div>
      </div>
    </div>
  );
};

const CommentLists = ({ comments }) => {
  return (
    <React.Fragment>
      {comments.map((comment, index) => {
        return (
          <div
            className="border-2 border-slate-300 border-l-slate-500"
            key={"comment" + index}
          >
            <Comments name={comment.name} text={comment.test}></Comments>
            <div className="pl-10">
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
