import { useEffect } from "react";
import { customAxios } from "../libs/axios";
import { globalInfos} from "../constants/globalInfos";
import Button from '@enact/sandstone/Button';
import { InputField } from "@enact/sandstone/Input";
import {useState} from 'react';

const CommentWidget = (props) => {
  const liveId = props.liveId;

  let [comments, setComments] = useState([]);

  useEffect(()=>{
    // const res = customAxios.get(`/live/${liveId}/comments/0`);
    const res = [
      {userId: 0, userName: "ㅂㅇㄹ", comment:"Hi Hi Hi Hi"},
      {userId: 1, userName: "박근혜", comment:"Hello World~"},
    ];
    setComments(res);
  }, []);

  const onCommentSubmit = (comment) => {
    const newComment = {
      userId: globalInfos.getInstance().userId,
      userName: globalInfos.getInstance().userId,
      comment: comment,
    };
    const res = customAxios.post(`/live/${liveId}/comments`, newComment);
    setComments([newComment, ...comments]);
  };

  const getComments = (page) => {
    const res = customAxios.get(`/live/${liveId}/comments/${page}`);
    setComments([...comments, ...res]);
  }
  return (
    <div>
      <CommentList comments={comments} getComments={getComments} liveId={liveId}/>
      <CommentForm onCommentSubmit={onCommentSubmit}/>
    </div>  
  );
};

const CommentItem = (props) => {
  const userName = props.comment.userName;
  const comment = props.comment.comment;

  return (
    <div style={{Ppadding: '10px', marginBottom: '10px' }}>
      <div style={{ marginBottom: '5px', fontWeight: 'bold' }}>{userName}</div>
      <div>{comment}</div>
    </div>
  );
}

const CommentList = (props) => {
  const comments = props.comments;
  console.log(comments);
  return (
    <div>
      {comments.map((comment, index) => (
        <CommentItem key={index} userName={comment.writer} comment={comment} />
      ))}
    </div>
  )
};

const CommentForm = (props) => {
  const onCommentSubmit = props.onCommentSubmit;
  const liveId = props.liveId;
  let [isLike, setLike] = useState(false);
  let [comment, setComment] = useState(""); 
  useEffect(()=>{
    // const res = customAxios.get(`/live/${liveId}/like`);
    const res = false;
    setLike(res);
  }, []);

  const onLike = () => {
    customAxios.post(`/live/${liveId}/like`);
    setLike(!isLike);
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Button>Like</Button>
      <InputField></InputField>
      <Button>Send</Button>
    </div>
  );
};

export default CommentWidget;