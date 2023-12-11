import { useCallback, useEffect } from "react";
import { customAxios } from "../libs/axios";
import { globalInfos } from "../constants/globalInfos";
import Button from '@enact/sandstone/Button';
import { InputField } from "@enact/sandstone/Input";
import { useState } from 'react';
import { ThemeDecorator } from '@enact/sandstone/ThemeDecorator';
import Scroller from '@enact/sandstone/Scroller';

const CommentWidget = (props) => {
  const liveId = props.liveId;

  let [comments, setComments] = useState([]);
  useEffect(() => {
    // const res = customAxios.get(`/live/${liveId}/comments/0`);
    const res = [
      { userId: 0, userName: "ㅂㅇㄹ", comment: "Hi Hi Hi Hi" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
      { userId: 1, userName: "박근혜", comment: "Hello World~" },
    ];
    setComments(res);
  }, []);

  const onCommentSubmit = useCallback((comment) => {
    const newComment = {
      userId: globalInfos.getInstance().userId,
      userName: globalInfos.getInstance().userId,
      comment: comment,
    };
    const res = customAxios.post(`/live/${liveId}/comments`, newComment);
    setComments([newComment, ...comments]);

  }, [liveId]);

  const getComments = useCallback((page) => {
    const res = customAxios.get(`/live/${liveId}/comments/${page}`);
    setComments([...comments, ...res]);
  }, [liveId]);
  console.log("CommentWidget");
  return (
    <div style={{display: "flex", justifyContent: "center", height: "100%", }}>
      <div style={{ height: "100%", display: "inline-flex", flexDirection: "column",zIndex: 10, backgroundColor: "rgba(255, 255, 255, 0.3)"}}>
        {/* <CommentForm onCommentSubmit={onCommentSubmit} /> */}
        <CommentForm />
        <CommentList comments={comments} getComments={getComments} liveId={liveId} />
      </div>
    </div>
  );
};

const CommentItem = (props) => {
  const userName = props.comment.userName;
  const comment = props.comment.comment;

  return (
    <div style={{ Ppadding: '10px 0', marginBottom: '0.5rem'}}>
      <div style={{ marginBottom: '0', fontSize: "1rem"}}>{userName}</div>
      <div style={{ marginBottom: '0', fontWeight: 'bold', fontSize: "1.6rem"}}>{comment}</div>
    </div>
  );
}

const CommentList = (props) => {
  const comments = props.comments;
  console.log(comments);
  return (
    <Scroller>
      <div style={{padding: "0rem 1rem", color: "#686868"}}>
        {comments.map((comment, index) => (
          <CommentItem key={index} userName={comment.writer} comment={comment}/>
        ))}
      </div>
    </Scroller>
  )
};

export const CommentForm = (props) => {
  // const onCommentSubmit = props.onCommentSubmit;
  const liveId = props.liveId;
  let [isLike, setLike] = useState(false);
  let [comment, setComment] = useState("");
  useEffect(() => {
    // const res = customAxios.get(`/live/${liveId}/like`);
    const res = false;
    setLike(res);
  }, []);
  console.log("CommentForm");
  const onLike = () => {
    customAxios.post(`/live/${liveId}/like`);
    setLike(!isLike);
  }
  const onInput = (e) => {
    console.log(e.value);
    setComment(e.value);
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Button size="small">Like</Button>
      <InputField
						type="text"
						placeholder=""
					/>
      <Button size="small">Send</Button>
    </div>
  );
};

export default ThemeDecorator(CommentWidget);