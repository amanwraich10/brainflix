import "../CommentForm/CommentForm.scss";

function Comments(props) {
	return (
		<div>
			<h2 className="Comments__total">
				{" "}
				{props.comments?.comments.length} Comments
			</h2>
			<h3 className="Comments__heading">JOIN THE CONVERSATION</h3>
			<div className="Comments__comment">
				<div className="Comments__image" />

				<form>
					<input
						className="Comments__input"
						placeholder="Add a new comment"
					></input>
					<button className="Comments__button">COMMENT</button>
				</form>
			</div>
			<hr className="Comments__linebreak" />
		</div>
	);
}

export default Comments;
