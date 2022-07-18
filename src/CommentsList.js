const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);
const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      {comments.map(comment => (
        <div className="comment-preview" key={comment.id} >
            <ColoredLine color="white" />
            <div class="row mb-5">
                <div class="col-md-12">
                    <p class="achieve">{comment.body}</p>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col-md-12">
                    <p class="achieve text-end text-muted">{comment.author} @ {comment.time}</p>
                </div>
            </div>
        </div>
      ))}
    </div>
  );
}
 
export default CommentList;