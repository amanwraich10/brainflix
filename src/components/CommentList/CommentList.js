import "../CommentList/CommentList.scss";

function CommentList(props) {
	return props.comments.map((comment) => {
		return (
			<>
				<div key={comment.id} className="comment__list">
					<div className="comment__image"></div>

					<div>
						<div className="comment__writer">
							<p className="comment__name">{comment.name}</p>
							<p className="comment__time">{comment.timestamp}</p>
						</div>
						<p className="comment__comment">{comment.comment}</p>
					</div>
				</div>
				<hr></hr>
			</>
		);
	});
}

export default CommentList;
