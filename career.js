const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
gsap.from("nav a", {
  x: -20,
  opacity: 0,
  duration: 0.4,
  stagger: 0.1,
});
gsap.from("#page1 h1", {
  y: 200,
  opacity: 0,
  duration: 0.6,
  ease: "power2",
});
Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.2,
});
Shery.makeMagnet("#nav_2 a, footer a", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.addEventListener("DOMContentLoaded", function () {
  var currentUrl = window.location.href;
  var links = document.querySelectorAll("#nav_2 a");
  links.forEach(function (link) {
    if (link.href === currentUrl) {
      link.classList.add("active");
    }
  });

  const contentData = {
    "community-engagement-specialist": `
        <div class="career">
            <h2>Community Engagement Specialist</h2>
            <div class="career_cont">
                <div class="what">
                    <h3>Job Overview</h3>
                    <p>We are looking for a passionate and dynamic Community Engagement Specialist to join our team. This role is crucial in building and nurturing relationships within our online community, driving engagement, and fostering a positive image of Codeimagin. The ideal candidate will be well-versed in social media platforms, possess excellent communication skills, and have a talent for creating engaging content that resonates with our audience.
                    </p>
                    <h3>Key Responsibilities</h3>
                    
<h4>
    <span>Market Research:</span> Conduct research to identify new market opportunities and industry trends.
</h4>
<h4>
    <span>Lead Generation:</span> Assist in generating leads through various channels, including social media, networking events, and direct outreach.
</h4>
<h4>
    <span>Client Outreach:</span> Contact potential clients to establish rapport and set up meetings.
</h4>
<h4>
    <span>Proposal Development:</span> Assist in preparing proposals, presentations, and sales pitches for potential clients.
</h4>
<h4>
    <span>Collaboration:</span> Work closely with the sales, marketing, and product teams to ensure a cohesive approach to business development.
</h4>
<h4>
    <span>Data Management:</span> Maintain and update the customer relationship management (CRM) system with accurate client information and sales activities.
</h4>
<h4>
    <span>Reporting:</span> Provide regular reports on sales activities, market feedback, and business development progress.
</h4>
                </div>
                <div class="why">
                    <h3>Qualifications</h3>
                    <h4>Proven experience as a Community Engagement Specialist, Social Media Manager, or similar role.</h4>
                    <h4>Strong understanding of social media platforms, including Facebook, Twitter, LinkedIn, Instagram, and others.</h4>
                    <h4>Excellent verbal and written communication skills.</h4>
                    <h4>Creative mindset with the ability to develop engaging content.</h4>
                    <h4>Strong organizational and multitasking abilities.</h4>
                    <h4>Familiarity with social media analytics tools and community management software.</h4>
                    <h4>Passion for technology and the digital solutions industry.</h4>
                    <h4>Bachelor's degree in Marketing, Communications, or a related field is preferred.</h4>

                     <a href="https://forms.gle/zedC3Cm66sxqiTNi7" class="btn">
                <span class="btn-text-one">Easy Apply</span>
                <span class="btn-text-two">Easy Apply</span>
            </a>
                </div>
            </div>
        </div>
    `,
    "business-development-intern": `
        <div class="career" id="career-area">
<h2>Business Development Intern</h2>
            <div class="career_cont">
                <div class="what">
                    <h3>Job Overview</h3>
                    <p>We are looking for an enthusiastic and proactive Business Development Intern to join our team. This role is integral to supporting our business growth by identifying new opportunities, building relationships with potential clients, and contributing to strategic initiatives. The ideal candidate will be highly motivated, possess excellent communication skills, and have a keen interest in the digital solutions industry.</p>

                    <h3>Key Responsibilities</h3>
                    <h4><span>Market Research:</span> Conduct research to identify new market opportunities and industry trends.</h4>
                    <h4><span>Lead Generation:</span> Assist in generating leads through various channels, including social media, networking events, and direct outreach.</h4>
                    <h4><span>Client Outreach:</span> Contact potential clients to establish rapport and set up meetings.</h4>
                    <h4><span>Proposal Development:</span> Assist in preparing proposals, presentations, and sales pitches for potential clients.</h4>
                    <h4><span>Collaboration:</span> Work closely with the sales, marketing, and product teams to ensure a cohesive approach to business development.</h4>
                    <h4><span>Data Management:</span> Maintain and update the customer relationship management (CRM) system with accurate client information and sales activities.</h4>
                    <h4><span>Reporting:</span> Provide regular reports on sales activities, market feedback, and business development progress.</h4>
                </div>
                <div class="why">
                  <h3>Qualifications</h3>
<h4>Currently pursuing a degree in Business, Marketing, or a related field.</h4>
<h4>Excellent verbal and written communication skills.</h4>
<h4>Strong organizational and multitasking abilities.</h4>
<h4>Proficiency in Microsoft Office and familiarity with CRM software is a plus.</h4>
<h4>Passion for technology and the digital solutions industry.</h4>
<h4>Strong problem-solving skills and attention to detail.</h4>
                         <a href="https://forms.gle/zedC3Cm66sxqiTNi7" class="btn">
                <span class="btn-text-one">Easy Apply</span>
                <span class="btn-text-two">Easy Apply</span>
            </a>
                </div>
            </div>
        </div>
    `,
    "graphic-design-intern": `
        <div class="career">
            <h2>Graphic Design Intern</h2>
            <div class="career_cont">
                <div class="what">
                    <h3>Job Overview</h3>
                    <p>We are seeking a creative and talented Graphic Design Intern to join our team. This role is essential in supporting our marketing and content creation efforts by producing visually appealing and effective designs. The ideal candidate will have a strong understanding of design principles, be proficient in design software, and have a keen eye for detail.
                    </p>
                    <h3>Key Responsibilities</h3>
                    <h4>
    <span>Design Creation:</span> Assist in creating graphics for various platforms, including social media, websites, email campaigns, and print materials.
</h4>
<h4>
    <span>Brand Consistency:</span> Ensure all designs align with Codeimagin's brand guidelines and messaging.
</h4>
<h4>
    <span>Collaborative Projects:</span> Work closely with the marketing, content, and web development teams to produce cohesive and compelling visual content.
</h4>
<h4>
    <span>Concept Development:</span> Contribute to brainstorming sessions and develop creative concepts for campaigns and projects.
</h4>
<h4>
    <span>Feedback Implementation:</span> Receive and incorporate feedback from team members and clients to refine designs.
</h4>
<h4>
    <span>Asset Management:</span> Organize and manage design assets, ensuring they are easily accessible for future projects.
</h4>
                </div>
                <div class="why">
                    <h3>Qualifications</h3>
                    <h4>Currently pursuing a degree in Graphic Design, Visual Arts, or a related field.</h4>
<h4>Proficiency in design software such as Adobe Creative Suite (Photoshop, Illustrator, InDesign).</h4>
<h4>Strong understanding of design principles, typography, and color theory.</h4>
<h4>Excellent attention to detail and creativity.</h4>
<h4>Ability to work independently and as part of a team.</h4>
<h4>Strong organizational and time-management skills.</h4>
<h4>Passion for design and staying updated with the latest design trends.</h4>
                        
            <a href="https://forms.gle/zedC3Cm66sxqiTNi7" class="btn">
                <span class="btn-text-one">Easy Apply</span>
                <span class="btn-text-two">Easy Apply</span>
            </a>
                </div>
            </div>
        </div>
    `,
  };

  const contentElement = document.getElementById("content");
  const careerItems = document.querySelectorAll(".career-item");

  contentElement.innerHTML = contentData["community-engagement-specialist"];
  careerItems[0].classList.add("selected");

  careerItems.forEach((item) => {
    item.addEventListener("click", () => {
      const contentKey = item.getAttribute("data-content");
      const content = contentData[contentKey];
      if (content) {
        contentElement.innerHTML = content;
        careerItems.forEach((si) => si.classList.remove("selected"));
        item.classList.add("selected");
      }
    });
  });
});

gsap.from(".career-item", {
  x: -20,
  opacity: 0,
  duration: 0.4,
  stagger: 0.1,
});
gsap.from(".content", {
  opacity: 0,
  duration: 1,
});
