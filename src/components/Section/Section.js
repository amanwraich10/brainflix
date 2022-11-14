import "../../components/Section/Section.scss";

function Section(props) {
	console.log(props);
	return (
		<div>
			<h2 className="section__heading">{props.videos.title}</h2>
			<hr className="section__line-break"></hr>

			<div className="section__info">
				<div className="section__info--top">
					<p className="section__channel">
						By {props.videos.channel}
					</p>

					<p className="section__date">{props.videos.timestamp}</p>
				</div>

				<div className="section__info--bottom">
					<div className="section__links">
						<a href="">
							<div className="section__logo--views"></div>
						</a>
						<p className="section__views">{props.videos.views}</p>
					</div>

					<div className="section__links">
						<a href="">
							<div className="section__logo--likes"></div>
						</a>
						<p className="section__likes">{props.videos.likes}</p>
					</div>
				</div>
			</div>
			<hr className="section__linebreak-bottom"></hr>

			<p className="section__description">{props.videos.description}</p>
		</div>
	);
}

export default Section;
