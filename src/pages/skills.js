import React, { Component } from 'react';

export class Skills extends Component {
	render() {
		return (
			<div className="project-page-main">
				<br />
				<br />
				<h2>About me</h2>
				<div className="centering-block">
					<div className="project-page-about">
						<p>
							I am currently a Computer Science student at DePaul University. This past year, in addition
							to being a full time student and a part time QA employee, I successfully designed,
							programmed and launched a college-only social media application called Kegstand - The
							College Network. Kegstand was launched under my iOS application company - Spiralus.
						</p>
					</div>
				</div>
				<div className="skills-upperhalf" />
				<div className="skills-lowerhalf">
					<div className="skills-lowerhalf-filler" />
					<div className="skills-column-grid">
						<div className="skills-column-cell-left"/>
						<div className="skills-column-cell-mid"/>
						<div className="skills-column-cell-right"/>
					</div>
				</div>
			</div>
		);
	}
}

export default Skills;
