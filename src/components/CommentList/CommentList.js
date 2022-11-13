function CommentList(props) {
	return props.comments.map((comment) => {
		return (
			<div key={comment.id}>
				<p>{comment.name}</p>
				<p>{comment.comment}</p>
				<p>{comment.likes}</p>
				<p>{comment.timestamp}</p>
			</div>
		);
	});
}

export default CommentList;
