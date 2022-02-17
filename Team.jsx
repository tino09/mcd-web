import React from 'react';
import '../components/Team.css'

const Team = () => {
  return <div id="Team">
      <section class="section-team">
		<div class="container">
			<div class="row justify-content-center text-center">
				<div class="col-md-8 col-lg-6">
					<div class="header-section">
						<h3 class="small-title">Our Experts</h3>
						<h2 class="title"> Team members</h2>
					</div>
				</div>
			</div>
			<div class="row">
				
				<div class="col-sm-6 col-lg-4 col-xl-3">
					<div class="single-person">
						<div class="person-image">
							<img src="" alt="" />
							<span class="icon">
								<i class="fab fa-html5"></i>
							</span>
						</div>
						<div class="person-info">
							<h3 class="full-name">ONYINYE IGBO-UGWU</h3>
							<span class="speciality">HEAD (MARKETING & STRATEGY)</span>
						</div>
					</div>
				</div>
				
				<div class="col-sm-6 col-lg-4 col-xl-3">
					<div class="single-person">
						<div class="person-image">
							<img src="" alt="" />
							<span class="icon">
								<i class="fab fa-wordpress-simple"></i>
							</span>
						</div>
						<div class="person-info">
							<h3 class="full-name">Robert Smith</h3>
						{/*	<span class="speciality">WordPress Developer</span> */}
						</div>
					</div>
				</div>
			
				<div class="col-sm-6 col-lg-4 col-xl-3">
					<div class="single-person">
						<div class="person-image">
							{/** <img src="https://i.ibb.co/25zdRMr/person3.jpg" alt="" /> */}
							<span class="icon">
								<i class="fab fa-angular"></i>
							</span>
						</div>
						<div class="person-info">
							<h3 class="full-name">John Doe</h3>
						{/*}	<span class="speciality">Angular Developer</span>*/}
						</div>
					</div>
				</div>
			
				<div class="col-sm-6 col-lg-4 col-xl-3">
					<div class="single-person">
						<div class="person-image">
							<img src="" alt="" />
							<span class="icon">
								<i class="fab fa-js"></i>
							</span>
						</div>
						<div class="person-info">
							<h3 class="full-name">John Smith</h3>
							<span class="speciality">Javascript Developer</span>
						</div>
					</div>
				</div>
			
			</div>
		</div>
	</section>
  </div>;
};

export default Team;
