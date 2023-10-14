// Set the desired date
const desiredDate = new Date("2022-09-28");

// Get the current date
const currentDate = new Date();

// Calculate the difference in milliseconds
const diffInMilliseconds = Math.abs(currentDate - desiredDate);

// Calculate the number of years, months, and days
const years = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365));
const months = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 30));
const days = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

// Adjust the months and days based on the remaining duration
const adjustedMonths = months % 12;
const adjustedDays = days % 30;

// Format the experience string
let experience = "";
console.log("eppp" + experience)

if (years > 0) {
  experience += years === 1 ? "1 year " : `${years} years `;
}

if (adjustedMonths > 0) {
  experience += adjustedMonths === 1 ? "1 month " : `${adjustedMonths} months `;
}

if (adjustedDays > 0) {
  experience += adjustedDays === 1 ? "1 day " : `${adjustedDays} days`;
}



const resumeData = {
  imagebaseurl: "http://github.com/Dhinakaran1420",
  name: "Dhinakaran Palani",
  role: "Frontend Developer",
  linkedinId: "https://www.linkedin.com/in/dhinakaran-palani-8ba4bb246/",
  skypeid: "Your skypeid",
  roleDescription:
    "I enjoy exploring various parts of frontend development and like to learn about new technologies or simply play games in my free time.",
  socialLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/dhinakaran-palani-8ba4bb246/",
      className: "fa fa-linkedin",
    },
    {
      name: "github",
      url: "http://github.com/Dhinakaran1420",
      className: "fa fa-github",
    },
    {
      name: "skype",
      url: "http://twitter.com/dhina14201",
      className: "fa fa-twitter",
    },
  ],
  aboutme:
    "I am currently working in aviar technology services. I am a self taught Front End Web Developer, I believe that to be successful in life, one needs to be obsessive with their dreams and keep working towards them.",
  address: "India",
  website: "http://github.com/Dhinakaran1420",
  education: [
    {
      UniversityName: "ARS College Of Engineering",
      specialization: "B.E.Mechanical Engineering",
      MonthOfPassing: "Aug",
      YearOfPassing: "2021",
      Achievements: "Some Achievements",
    },
  ],
  work: [
    {
      CompanyName: "Aviar Technology Services",
      specialization: "Software Developer",
      DateofJoining: "28-Sep-2022",
      Experience: '1 Years',
    },
  ],
  skillsDescription: "Your skills here",
  skills: [
    {
      skillname: "HTML5",
    },
    {
      skillname: "CSS",
    },
    {
      skillname: "React js",
    },
    {
      skillname: "React Native",
    },
    {
      skillname: "Python",
    },
    {
      skillname: "Node js",
    },
    {
      skillname: "GCP",
    },

  ],
  portfolio: [
    {
      name: "School Attendance Management",
      description: "mobileapp",
      imgurl: "images/portfolio/coffee.jpg",
    },
    {
      name: "Saloon App",
      description: "mobileapp",
      imgurl: "images/portfolio/farmerboy.jpg",
    },
    {
      name: "Aviar Tracker Management",
      description: "Website",
      imgurl: "images/portfolio/retrocam.jpg",
    },
    // {
    //   name: "project4",
    //   description: "mobileapp",
    //   imgurl: "images/portfolio/phone.jpg",
    // },
  ],
  testimonials: [
    {
      description: "This is a sample testimonial",
      name: "Some technical guy",
    },
    {
      description: "This is a sample testimonial",
      name: "Some technical guy",
    },
  ],
};

export default resumeData;
