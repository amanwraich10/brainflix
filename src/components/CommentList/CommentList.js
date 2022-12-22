import "../CommentList/CommentList.scss";

function CommentList(props) {
	function date(timestamp) {
		let d = new Date(timestamp);
		return d.toISOString().replaceAll("-", "/").split("T")[0];
	}
	return (
		<>
			{props.clickedvideo?.comments.map((comment) => {
				return (
					<>
						<div className="comment__list">
							<div className="comment__image"></div>

							<div>
								<div className="comment__writer">
									<p className="comment__name">
										{comment.name}
									</p>
									<p className="comment__time">
										{date(comment.timestamp)}
									</p>
								</div>
								<p className="comment__comment">
									{comment.comment}
								</p>
							</div>
						</div>
						<hr className="comment__linebreak" />
					</>
				);
			})}
		</>
	);
}

export default CommentList;
