import "../../components/Section/Section.scss";

function Section(props) {
	function date(timestamp) {
		const d = new Date(timestamp);
		return d.toLocaleDateString("en-US", {
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
		});
	}

	return (
		<div>
			<h2 className="section__heading">{props.activeVideo.title}</h2>
			<hr className="section__line-break"></hr>

			<div className="section__info">
				<div className="section__info--top">
					<p className="section__channel">
						By {props.activeVideo.channel}
					</p>

					<p className="section__date">
						{date(props.activeVideo.timestamp)}
					</p>
				</div>

				<div className="section__info--bottom">
					<div className="section__links">
						<a href="">
							<div className="section__logo--views"></div>
						</a>
						<p className="section__views">
							{props.activeVideo.views}
						</p>
					</div>

					<div className="section__links">
						<a href="">
							<div className="section__logo--likes"></div>
						</a>
						<p className="section__likes">
							{props.activeVideo.likes}
						</p>
					</div>
				</div>
			</div>
			<hr className="section__linebreak-bottom"></hr>

			<p className="section__description">
				{props.activeVideo.description}
			</p>
		</div>
	);
}

export default Section;
