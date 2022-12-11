import "../CommentForm/CommentForm.scss";

function Comments() {
	const buttonHandler = (event) => {
		event.preventDefault();
		console.log(event.target);
	};

	return (
		<div>
			<h2 className="Comments__total">
				{/* {props.length} */}
				Comments
			</h2>
			<h3 className="Comments__heading">JOIN THE CONVERSATION</h3>
			<div className="Comments__comment">
				<div className="Comments__image" />

				<form
				// onClick={buttonHandler}
				>
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
