const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
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
    "business-analytics": `
      <div class="service">
          <h2>Business Analytics</h2>
          <div class="service_cont">
              <div class="what">
                  <h3>What Services Do We Provide?</h3>
                  <p>Business Analytics is at the heart of making informed decisions in today's data-driven world. At Codeimagin, we harness the power of advanced analytics tools and methodologies to transform your raw data into actionable insights. Our services include:
                  </p>
                  <h4>
                      <span>Data Collection and Processing:</span> We gather data from various sources and ensure it is clean, accurate, and ready for analysis.
                  </h4>
                  <h4>
                      <span>Predictive Analytics:</span> Using statistical models and machine learning techniques, we predict future trends and behaviors.
                  </h4>
                  <h4>
                      <span>Data Visualization:</span> We create intuitive dashboards and reports that make complex data easy to understand and act upon.
                  </h4>
                  <h4>
                      <span>Performance Metrics and KPIs:</span> We help you define and track key performance indicators to measure your business success.
                  </h4>
                  <h4>
                      <span>Customer Analytics:</span> Gain deeper insights into customer behavior, preferences, and trends.
                  </h4>
              </div>
              <div class="why">
                  <h3>Why Us?</h3>
                  <p>Choosing Codeimagin for your business analytics needs means leveraging our expertise to drive your business forward. We provide tailored solutions that align with your specific goals, helping you to grow your business: 
                      <h4>Make data-driven decisions</h4>
                      <h4>Identify growth opportunities</h4>
                      <h4>Optimize operations</h4>
                      <h4>Enhance customer satisfaction</h4>
                      <h4>Increase profitability</h4>
                  </p>
              </div>
          </div>
      </div>
  `,
    "business-consulting": `
      <div class="service" id="service-area">
          <h2>Business Consulting</h2>
          <div class="service_cont">
              <div class="what">
                  <h3>What Services Do We Provide?</h3>
                  <p>Our Business Consulting services are designed to provide strategic guidance and actionable insights. We work closely with your team to understand your challenges and objectives, delivering customized solutions that drive success. 
                  Our services include:
                  </p>
                  <h4><span>Strategic Planning:</span> Developing long-term strategies that align with your vision.</h4>
                  <h4><span>Market Analysis:</span> Assessing market conditions and identifying opportunities for growth.</h4>
                  <h4><span>Process Optimization:</span> Streamlining operations to improve efficiency and reduce costs.</h4>
                  <h4><span>Change Management:</span> Supporting your organization through transitions and transformations</h4>
                  <h4><span>Financial Planning:</span> Providing insights into financial health and strategies for growth.</h4>
              </div>
              <div class="why">
                  <h3>Why Us?</h3>
                  <p>At Codeimagin, we bring a wealth of experience and industry knowledge to the table. Our consultants are experts in their fields, ensuring that you receive the highest quality advice and support. 
                  By partnering with us, you can expect:</p>
                  <h4>Tailored solutions for your unique challenges</h4>
                  <h4>A collaborative approach that involves your team</h4>
                  <h4>Proven methodologies and best practices</h4>
                  <h4>Results-oriented strategies</h4>
                  <h4>A dedicated partner committed to your success</h4>
              </div>
          </div>
      </div>
  `,
    "finance-budget-analytics": `
      <div class="service">
          <h2>Finance & Budget Analytics</h2>
          <div class="service_cont">
              <div class="what">
                  <h3>What Services Do We Provide?</h3>
                  <p>At Codeimagin, our Finance and Budget Analysis services are designed to optimize your financial operations and drive business success. Our offerings include:
                  </p>
                  <h4>
                      <span>Financial Planning and Forecasting:</span> Projecting future financial performance to set realistic goals.
                  </h4>
                  <h4>
                      <span>Budget Development and Management:</span> Creating detailed budgets aligned with strategic objectives.
                  </h4>
                  <h4>
                      <span>Cost Analysis and Reduction:</span> Identifying expense reduction opportunities to improve profitability.
                  </h4>
                  <h4>
                      <span>Financial Reporting and Analysis:</span> Providing clear, regular financial reports and actionable insights.
                  </h4>
                  <h4>
                      <span>Cash Flow Management:</span> Ensuring liquidity and financial stability through optimized cash flow.
                  </h4>
                  <h4>
                      <span>Risk Assessment and Mitigation:</span> Identifying and mitigating potential financial risks.
                  </h4>
                  <h4>
                      <span>Investment Analysis and Strategy:</span> Evaluating investment opportunities to maximize returns.
                  </h4>
              </div>
              <div class="why">
                  <h3>Why Us?</h3>
                  <p>Choosing Codeimagin means partnering with a team of seasoned professionals dedicated to your financial success. Here's why you should choose us:
                      <h4>Expertise and Experience: Our team has extensive industry experience and knowledge.</h4>
                      <h4>Customized Solutions: We offer tailored solutions that meet your unique business needs.</h4>
                      <h4>Data-Driven Insights: Leveraging advanced analytics for informed decision-making.</h4>
                      <h4>Proactive Approach: Anticipating and preparing for financial challenges and opportunities.</h4>
                      <h4>Comprehensive Support: End-to-end support for all your financial needs.</h4>
                      <h4>Commitment to Excellence: Delivering high-quality services with a focus on results.</h4>                        
                  </p>
              </div>
          </div>
      </div>
  `,
    "digital-marketing": `
      <div class="service">
          <h2>Digital Marketing</h2>
          <div class="service_cont">
              <div class="what">
                  <h3>What Services Do We Provide?</h3>
                  <p>Digital Marketing is crucial for establishing and maintaining a strong online presence. At Codeimagin, we offer a full suite of digital marketing services designed to boost your visibility and engagement. Our services include:
                  </p>
                  <h4>
                      <span>Search Engine Optimization (SEO):</span> Improving your website's ranking on search engines.
                  </h4>
                  <h4>
                      <span>Social Media Marketing:</span> Building and engaging with your audience on social media platforms.
                  </h4>
                  <h4>
                      <span>Pay-Per-Click (PPC) Advertising:</span> Driving targeted traffic through paid advertising.
                  </h4>
                  <h4>
                      <span>Content Marketing:</span> Creating and distributing valuable content to attract and retain customers.
                  </h4>
                  <h4>
                      <span>Email Marketing:</span> Developing effective email campaigns to nurture leads and drive sales.
                  </h4>                    
              </div>
              <div class="why">
                  <h3>Why Us?</h3>
                  <p>Our digital marketing team is comprised of seasoned professionals who stay ahead of the latest trends and techniques. By partnering with Codeimagin, you benefit from: 
                      <h4>Data-driven strategies</h4>
                      <h4>Comprehensive and cohesive marketing plans</h4>
                      <h4>Measurable results and ROI</h4>
                      <h4>Enhanced brand visibility and reputation</h4>
                      <h4>Continuous optimization and improvement</h4>                        
                  </p>
              </div>
          </div>
      </div>
  `,
    "content-creation-marketing": `
      <div class="service">
          <h2>Content Creation & Marketing</h2>
          <div class="service_cont">
              <div class="what">
                  <h3>What Services Do We Provide?</h3>
                  <p>Quality content is the cornerstone of any successful digital strategy. At Codeimagin, we specialize in creating compelling content that resonates with your audience and drives engagement. Our services include:
                  </p>
                  <h4>
                      <span>Content Strategy Development:</span> Crafting a roadmap for your content efforts.
                  </h4>
                  <h4>
                      <span>Content Creation:</span> Producing high-quality blog posts, articles, videos, infographics, and more.
                  </h4>
                  <h4>
                      <span>SEO Content:</span> Optimizing content for search engines to improve visibility.
                  </h4>
                  <h4>
                      <span>Content Distribution:</span> Leveraging various channels to share your content.
                  </h4>
                  <h4>
                      <span>Performance Analysis:</span> Tracking and analyzing the effectiveness of your content.
                  </h4>
              </div>
              <div class="why">
                  <h3>Why Us?</h3>
                  <p>Our team of creative experts ensures that your content not only stands out but also aligns with your brand and objectives. With Codeimagin, you get:
                      <h4>Engaging and relevant content</h4>
                      <h4>SEO-optimized material</h4>
                      <h4>Strategic distribution</h4>
                      <h4>Insights and analytics</h4>
                      <h4>Continuous content improvement</h4>                        
                  </p>
              </div>
          </div>
      </div>
  `,
    "web-development": `
      <div class="service">
          <h2>Web Development</h2>
          <div class="service_cont">
              <div class="what">
                  <h3>What Services Do We Provide?</h3>
                  <p>A well-designed website is essential for any business. At Codeimagin, we provide comprehensive web development services that ensure your website is not only visually appealing but also highly functional. Our services include:
                  </p>
                  <h4>
                      <span>Custom Website Development:</span> Building websites tailored to your specific needs.
                  </h4>
                  <h4>
                      <span>Responsive Design:</span> Ensuring your site looks great on all devices.
                  </h4>
                  <h4>
                      <span>CMS Integration:</span> Implementing content management systems for easy updates.
                  </h4>
                  <h4>
                      <span>E-Commerce Development:</span> Creating robust online stores.
                  </h4>
                  <h4>
                      <span>Maintenance and Support:</span> Offering ongoing support to keep your site running smoothly.
                  </h4>                    
              </div>
              <div class="why">
                  <h3>Why Us?</h3>
                  <p>Our web development team combines technical expertise with creative flair to deliver websites that not only look good but also perform exceptionally well. By choosing Codeimagin, you benefit from:
                      <h4>Custom-built solutions</h4>
                      <h4>Mobile-friendly designs</h4>
                      <h4>User-friendly interfaces</h4>
                      <h4>High performance and security</h4>
                      <h4>Reliable maintenance and support</h4>                        
                  </p>
              </div>
          </div>
      </div>
  `,
    "app-development": `
      <div class="service">
          <h2>App Development</h2>
          <div class="service_cont">
              <div class="what">
                  <h3>What Services Do We Provide?</h3>
                  <p>In today's mobile-first world, having a mobile app can significantly enhance your reach and engagement. Codeimagin offers end-to-end mobile app development services that bring your ideas to life. Our services include:
                  </p>
                  <h4>
                      <span>iOS and Android App Development:</span> Creating apps for both major platforms.
                  </h4>
                  <h4>
                      <span>Cross-Platform Development:</span> Building apps that work seamlessly across devices.
                  </h4>
                  <h4>
                      <span>UI/UX Design:</span> Designing intuitive and engaging user interfaces.
                  </h4>
                  <h4>
                      <span>App Testing and QA:</span> Ensuring your app is bug-free and performs well.
                  </h4>
                  <h4>
                      <span>App Store Optimization:</span> Helping your app get discovered and downloaded.
                  </h4>
              </div>
              <div class="why">
                  <h3>Why Us?</h3>
                  <p>With Codeimagin, you get a team of experienced developers who are passionate about creating high-quality mobile applications. We offer:
                      <h4>Custom app solutions</h4>
                      <h4>Cutting-edge technology</h4>
                      <h4>Excellent user experiences</h4>
                      <h4>Thorough testing and QA</h4>
                      <h4>Ongoing support and updates</h4>                        
                  </p>
              </div>
          </div>
      </div>
  `,
  };

  const contentElement = document.getElementById("content");
  const serviceItems = document.querySelectorAll(".service-item");

  contentElement.innerHTML = contentData["business-analytics"];
  serviceItems[0].classList.add("selected");

  serviceItems.forEach((item) => {
    item.addEventListener("click", () => {
      const contentKey = item.getAttribute("data-content");
      const content = contentData[contentKey];
      if (content) {
        contentElement.innerHTML = content;
        serviceItems.forEach((si) => si.classList.remove("selected"));
        item.classList.add("selected");
      }
    });
  });
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
});
gsap.from(".service-item", {
  x: -20,
  opacity: 0,
  duration: 0.4,
  stagger: 0.1,
});
gsap.from(".content", {
  opacity: 0,
  duration: 1,
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
