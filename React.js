// App Component
const App = () => {
  return (

    
    <div className="font-sans bg-gray-50 min-h-screen">
      {/* Header */}
      {/*Banner*/}
      <div><img className="w-full" src="images/Banner.jpg" alt="Banner"></img>
        </div>
      <header className="bg-white-600 text-blue py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
        <a href="#home" className="hover:underline"><img src="images/Bulipe.jpg" alt="Bulipe"></img></a>
          <nav>
            <ul className="flex gap-8">
              <li>
                <a href="#home" className="hover:underline">Home</a>
              </li>
              <li>
                <a href="#products" className="hover:underline">About Us</a>
              </li>
              <li>
                <a href="#products" className="hover:underline">Programs</a>
              </li>
              <li>
                <a href="#products" className="hover:underline">Locations</a>
              </li>
              <li>
                <a href="#products" className="hover:underline">Career & Placement</a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">Contact Us</a>
              </li>
              <li>
              <button class="bg-orange-500 px-6 py-2 rounded-full text-white font-semibold">Sing Up</button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section class="bg-[#033043] text-white py-16 px-8">
  <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 class="text-sm uppercase tracking-widest">ELEVATING</h3>
      <h1 class="text-4xl font-bold mt-2 leading-tight">
        IT Service Industry with 
        <span class="text-blue-400 underline decoration-orange-400">Digital Skills</span>
        Development
      </h1>
      <p class="mt-4 text-gray-300">
        Bulipe Tech as a visionary agent collaborates with its parent companies from the USA and UK to bring forth a far-reaching Digital Skills Development project for the ever-changing workforce of Bangladesh.
      </p>
      <div class="mt-6 flex space-x-4">
        <button class="bg-orange-500 px-6 py-2 rounded-full text-white font-semibold">Enroll Now</button>
        <button class="border border-gray-400 px-6 py-2 rounded-full text-white font-semibold">Read More</button>
      </div>
    </div>
    <div>
      <img src="images/Group 81.jpg" alt="IT Service Illustration" class="rounded-lg shadow-lg"></img>
    </div>
  </div>
  <div class="mt-16 grid md:grid-cols-3 gap-8">
    <div class="bg-white text-black p-6 rounded-lg shadow-lg text-center">
      <div class="w-16 h-16 bg-blue-500 mx-auto flex items-center justify-center rounded-full">
        <img src="icon1.svg" alt="Skill Icon"></img>
      </div>
      <h3 class="text-left text-lg font-bold mt-4">Master In-Demand Digital Skills to Advance Your Career</h3>
      <p class="text-left text-gray-600 mt-2">
        Unlock career opportunities through our industry-recognized Digital Skill Development program. Begin your journey today!
      </p>
    </div>
    
    <div class="bg-white text-black p-6 rounded-lg shadow-lg text-center">
      <div class="w-16 h-16 bg-blue-500 mx-auto flex items-center justify-center rounded-full">
        <img src="icon2.svg" alt="Certification Icon"></img>
      </div>
      <h3 class="text-left text-lg font-bold mt-4">Earn Vendor Certifications and Join Us</h3>
      <p class="text-left text-gray-600 mt-2">
        Our post-training assessments connect you with leading U.S. certification providers. Join 3,000+ partners and build your career!
      </p>
    </div>
    
    <div class="bg-white text-black p-6 rounded-lg shadow-lg text-center">
      <div class="w-16 h-16 bg-blue-500 mx-auto flex items-center justify-center rounded-full">
        <img src="icon3.svg" alt="Earnings Icon"></img>
      </div>
      <h3 class="text-left text-lg font-bold mt-4">Start Earning BDT 30,000</h3>
      <p class="text-left text-gray-600 mt-2">
        Salary-based employment starting at BDT 30,000, with growth potential up to BDT 3,00,000+ as you upskill!
      </p>
    </div>
  </div>
</section>

      {/* Products Section */}
      <section id="What" className="py-12 bg-cyan">
        
      <h2 className="text-3xl font-bold text-center mb-8">What We Do?</h2>
      <div class="flex bg-gray-100 p-6 rounded-lg shadow-lg">

    <div class="w-1/2 p-6 bg-teal-100 rounded-l-lg">
        <h2 class="text-2xl font-bold mb-4">Bulipe Tech is a dynamic and innovative company</h2>
        <p class="text-gray-700">
            We empower individuals to unlock career opportunities through our proven Digital Skill Development program. 
            Partnering with 300 local organisations and 3,000+ global partners in 21 countries, we provide access to top U.S. 
            certifications and salary-based employment starting at $250, with the potential to exceed $3,000 through continuous up-skilling.
        </p>
        <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Read More →</button>
    </div>
    <div class="w-1/2">
        <img src="images/What.jpg" alt="Bulipe Tech" class="w-full h-full object-cover rounded-r-lg"></img>
    </div>
</div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">How does it work?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Cards */}
            <ProductCard
              name="Training"
              description="Our training program"
              image=""
            />
            <ProductCard
              name="Certification"
              description="Upon completion of desired"
              image=""
            />
            <ProductCard
              name="Employment"
              description="We gruarantee confirmed job"
              image=""
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products2" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Programs</h2>
          <div className="container mx-auto flex justify-between items-center px-4">
          <nav className="text-center mx-auto px-4">
          <ul class="text-center flex">
  <li class="mr-6">
    <a class="text-black-500 hover:text-blue-800" href="#">Digital Skill Development</a>
  </li>
  <li class="mr-6">
    <a class="text-black-500 hover:text-blue-800" href="#">Skill Development</a>
  </li>
  <li class="mr-6">
    <a class="text-black-500 hover:text-blue-800" href="#">All</a>
  </li>
</ul>
              </nav></div><br></br>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Cards */}
            <ProductCard2
              name="It Support Specialists"
              description="Our training program"
              price="$300"
              image="images/Rectangle 129.jpg"
            />
            <ProductCard2
              name="It Support Specialists"
              description="Our training program"
              price="$300"
              image="images/Rectangle 129 (3).png"
            />
            <ProductCard2
              name="It Support Specialists"
              description="Our training program"
              price="$300"
              image="images/Rectangle 129.png"
            />
            <ProductCard2
              name="It Support Specialists"
              description="Our training program"
              price="$300"
              image="images/Rectangle 129 (1).png"
            />
            <ProductCard2
              name="It Support Specialists"
              description="Our training program"
              price="$300"
              image="images/Rectangle 129 (2).png"
            />
            <ProductCard2
              name="It Support Specialists"
              description="Our training program"
              price="$300"
              image="images/Rectangle 129.jpg"
            />
          </div>
        </div>
      </section>
      <section className="bg-black text-white py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our community</h2>
        <p className="text-gray-300 text-lg mb-8">
          Bulipe Tech aims to train unemployed individuals in Bangladesh, equipping them
          with essential digital skills and linking them to job opportunities across 23
          countries worldwide.
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="border border-gray-700 p-6 rounded-lg">
          <h3 className="text-4xl font-bold">3K+</h3>
          <p className="text-gray-400">Global partners worldwide</p>
        </div>
        <div className="border border-gray-700 p-6 rounded-lg">
          <h3 className="text-4xl font-bold">23+</h3>
          <p className="text-gray-400">Countries and adding</p>
        </div>
        <div className="border border-gray-700 p-6 rounded-lg">
          <h3 className="text-4xl font-bold">300+</h3>
          <p className="text-gray-400">Local training partners</p>
        </div>
      </div>
    </section>

    <section id="partners" className="py-12 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Partners</h2>
          
        <div className="container mx-auto flex justify-between items-center px-4">
          <nav className="text-center mx-auto px-4">
          <ul class="text-center flex">
  <li class="mr-6">
    <a class="text-black-500 hover:text-blue-800" href="#">Technology Partners</a>
  </li>
  <li class="mr-6">
    <a class="text-black-500 hover:text-blue-800" href="#">Branding Partners</a>
  </li>
  <li class="mr-6">
    <a class="text-black-500 hover:text-blue-800" href="#">Training Partners</a>
  </li>
  <li class="mr-6">
    <a class="text-black hover:text-blue-800" href="#">Banking Partners</a>
  </li>
</ul>
              </nav></div><br></br><br></br>
          <div className="flex flex-wrap justify-center gap-6">
            <img src="images/IBM.jpg" alt="IBM" className="h-24 rounded-lg shadow-md" />
            <img src="images/Hostinger.jpg" alt="Hostinger" className="h-24 rounded-lg shadow-md" />
            <img src="images/DigitalOcean.jpg" alt="DigitalOcean" className="h-24 rounded-lg shadow-md" />
            <img src="images/Microsoft.jpg" alt="Microsoft" className="h-24 rounded-lg shadow-md" />
            <img src="/mnt/data/Screenshot 2025-02-01 120615.jpg" alt="New Partner" className="h-24 rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      <section id="news" className="py-12 bg-white text-center">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Latest News</h2>
      <div class="p-6 bg-gray-100 rounded-lg shadow-lg"></div>
    
    <div class="flex bg-white rounded-lg overflow-hidden shadow-md">
        <div class="w-1/2">
            <img src="donald-trump-gettyimages-687193180 2.png" alt="Featured News" class="w-full h-full object-cover"></img>
        </div>
        <div class="w-1/2 p-6">
            <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Current Events</span>
            <h2 class="text-xl font-bold mt-3">
                Judge upholds Donald Trump's conviction, sets sentencing for Jan. 10 with no penalty
            </h2>
            <p class="text-gray-600 mt-2 text-sm">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
            <button class="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">Read More →</button>
        </div>
    </div>

    <h3 class="text-lg font-semibold mt-8">Featured News</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="donald-trump-gettyimages-687193180 2.png" alt="News" class="w-full h-40 object-cover"></img>
            <div class="p-4">
                <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Technology</span>
                <h3 class="text-md font-semibold mt-2">
                    Judge upholds Donald Trump's conviction, sets sentencing for Jan. 10 with no penalty
                </h3>
                <p class="text-gray-600 text-sm mt-1">
                    It is a long established fact that a reader will be distracted by the readable content of a page.
                </p>
                <button class="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Read More →</button>
            </div>
        </div>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="donald-trump-gettyimages-687193180 2.png" alt="News" class="w-full h-40 object-cover"></img>
            <div class="p-4">
                <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Technology</span>
                <h3 class="text-md font-semibold mt-2">
                    Judge upholds Donald Trump's conviction, sets sentencing for Jan. 10 with no penalty
                </h3>
                <p class="text-gray-600 text-sm mt-1">
                    It is a long established fact that a reader will be distracted by the readable content of a page.
                </p>
                <button class="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Read More →</button>
            </div>
        </div>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="donald-trump-gettyimages-687193180 2.png" alt="News" class="w-full h-40 object-cover"></img>
            <div class="p-4">
                <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Technology</span>
                <h3 class="text-md font-semibold mt-2">
                    Judge upholds Donald Trump's conviction, sets sentencing for Jan. 10 with no penalty
                </h3>
                <p class="text-gray-600 text-sm mt-1">
                    It is a long established fact that a reader will be distracted by the readable content of a page.
                </p>
                <button class="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Read More →</button>
            </div>
        </div>
    </div>
</div>

      </section>
      <section className="bg-blue-200 text-blue-900 py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to start your career?</h2>
        </div>
      </section>

      <section>
              {/* Footer Section */}
      <footer className="bg-[#0A0A0A] text-white py-12">
        <div className="container mx-auto grid md:grid-cols-4 gap-8 px-6">
          {/* About Section */}
          <div>
            <img src="images/Bulipe.jpg" alt="Bulipe Tech" className="h-12 mb-4" />
            <p className="text-gray-400 text-sm">
              Bulipe Tech collaborates with global parent companies to bring forth a far-reaching Digital Skills Development project for Bangladesh's evolving workforce.
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="#"><img src="images/linkedin-icon.png" alt="LinkedIn" className="h-6" /></a>
              <a href="#"><img src="images/x-icon.png" alt="Twitter" className="h-6" /></a>
              <a href="#"><img src="images/facebook-icon.png" alt="Facebook" className="h-6" /></a>
            </div>
          </div>

          {/* Address Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">ADDRESSES</h3>
            <p className="text-gray-400 text-sm">
              Mobile: 01712 944 876 <br />
              Email: <a href="mailto:info@bulipetech.com" className="text-orange-400">info@bulipetech.com</a> <br />
              House: 82, Road: 23/16, Block: A, <br />
              Banani, Dhaka-1213
            </p>
            <a href="#" className="text-orange-400 text-sm mt-2 block">COUNTRY OFFICES</a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">QUICK LINKS</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-orange-400">Home</a></li>
              <li><a href="#" className="hover:text-orange-400">About Us</a></li>
              <li><a href="#" className="hover:text-orange-400">Our Programs</a></li>
              <li><a href="#" className="hover:text-orange-400">Career & Placement</a></li>
              <li><a href="#" className="hover:text-orange-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-orange-400">News & Media</a></li>
              <li><a href="#" className="hover:text-orange-400">Privacy & Policy</a></li>
            </ul>
          </div>

          {/* App Download */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">GET THE APP</h3>
            <div className="flex flex-col space-y-3">
              <a href="#"><img src="images/app-store.png" alt="Download on the App Store" className="h-12" /></a>
              <a href="#"><img src="images/google-play.png" alt="Get it on Google Play" className="h-12" /></a>
            </div>
          </div>
        </div>
      </footer>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white text-blue py-6">
        <div className="container mx-auto text-blue text-center px-4">
          <p className="mb-4">
            &copy; {new Date().getFullYear()} Bulipe Tech Limited All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-2">
          <p className="mb-4 text-grey text-center">
             The quick brown fox jumps
          </p>            
          </div>
        </div>
      </footer>
    </div>
  );
};

// ProductCard Component
const ProductCard = ({ name, description, price, image }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 text-center">
      <img
        src={image}
        width={250}
        height={250}
        alt={name}
        loading="lazy"
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
    </div>
  );
};
const ProductCard2 = ({ name, description, price, image }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 text-center">
      <img
        src={image}
        width={250}
        height={250}
        alt={name}
        loading="lazy"
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-gray-600 mb-4">{price}</p>
      <div className="mt-3 flex space-x-4">
      <button className="container text-orange-400">More Info</button>
              <button class="bg-orange-500 px-6 py-2 rounded-full text-white font-semibold">Sing Up</button></div>
    </div>
  );
};

const What = ({ name, description, price, image }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 text-right">
      <img
        src={image}
        width={250}
        height={250}
        alt={name}
        loading="lazy"
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
      <h3 className="text-xl font-bold mb-2 text-left">{name}</h3>
      <p className="text-gray-600 mb-4 text-left">{description}</p>
      <p className="text-gray-600 mb-4 text-left">{price}</p>
      <button className="Read">Read More</button>
    </div>
  );
};

const communityStats = [
  { value: "3K+", description: "Global partners worldwide" },
  { value: "23+", description: "Countries and adding" },
  { value: "300+", description: "Local training partners" },
];

// Render the App
ReactDOM.render(<App />, document.getElementById("root"));