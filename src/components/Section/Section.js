import "../../components/Section/Section.scss";

function Section(props) {
	console.log(props);
	return (
		<div>
			<h2 className="section__heading">{props.videos.title}</h2>
			<hr></hr>

			<div className="section-info__top">
				<p className="section__channel">By {props.videos.channel}</p>
				<p className="section__date">{props.videos.timestamp}</p>
			</div>

			<div className="section-info__bottom">
				<p className="section__views">{props.videos.views}</p>
				<p className="section__likes">{props.videos.likes}</p>
			</div>
			<hr></hr>

			<p className="section__description">{props.videos.description}</p>
		</div>
	);
}

export default Section;
