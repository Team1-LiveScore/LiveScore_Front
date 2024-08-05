import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './LivePage.css';

const LivePage = () => {
  const [liveStream, setLiveStream] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [chatUser, setChatUser] = useState(null);

  useEffect(() => {
    const filename = 'example'; // 실제 파일 이름으로 교체해야 합니다

    // 비디오 스트림 가져오기
    fetch(`https://suportscore.site/api/video/stream/${filename}`)
      .then(response => response.json())
      .then(data => setLiveStream(data))
      .catch(error => console.error('Error fetching live stream:', error));

    // 채팅방 생성
    fetch('https://suportscore.site/api/chat/room', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ roomName: 'Live Chat Room' })
    })
      .then(response => response.json())
      .then(data => console.log('Chat room created:', data))
      .catch(error => console.error('Error creating chat room:', error));

    // 채팅 사용자 정보 조회
    fetch('https://suportscore.site/api/chat/user')
      .then(response => response.json())
      .then(data => setChatUser(data))
      .catch(error => console.error('Error fetching chat user:', error));

    // 채팅 메시지 가져오기
    fetch('https://suportscore.site/api/comments')
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => console.error('Error fetching comments:', error));
  }, []);

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const updatedComments = [...comments, { text: newComment }];
      setComments(updatedComments);
      setNewComment('');

      fetch('https://suportscore.site/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: newComment })
      }).catch(error => console.error('Error posting comment:', error));
    }
  };

  return (
    <div className="live-page">
      <Header />
      <div className="live-container">
        {liveStream ? (
          <div className="live-video">
            <video src={liveStream.url} controls autoPlay />
            <div className="live-status">LIVE</div>
          </div>
        ) : (
          <p>Loading live stream...</p>
        )}
      </div>
      <div className="comments-section">
        <h3>주요 채팅</h3>
        {chatUser && <div className="chat-user">사용자: {chatUser.username}</div>}
        <div className="comments">
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <span className="comment-user-icon">👤</span>
              <span className="comment-text">{comment.text}</span>
            </div>
          ))}
        </div>
        <div className="comment-input-section">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="채팅을 입력해 주세요 (최대 300자)"
            maxLength="300"
          />
          <button onClick={handleCommentSubmit} className="comment-submit-button">✈️</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LivePage;
