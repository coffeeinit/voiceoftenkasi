-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 25, 2025 at 04:02 PM
-- Server version: 10.11.10-MariaDB-log
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u184589548_phpsite`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `img` text DEFAULT NULL,
  `duration` varchar(50) DEFAULT NULL,
  `students` varchar(50) DEFAULT NULL,
  `rating` float DEFAULT NULL,
  `description` text DEFAULT NULL,
  `link` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `category`, `title`, `img`, `duration`, `students`, `rating`, `description`, `link`) VALUES
(27, 'Programming Languages', 'Java Tutorial for Complete Beginners', 'java1-editorial-logo.jpeg', '16 hours', '1,897,265', 4.5, 'Learn to program using the Java programming language.', 'https://www.udemy.com/course/java-tutorial/'),
(28, 'Programming Languages', 'Introduction To Python Programming', 'images-2.png', '1 hour', '955,050', 4.5, 'A Quick and Easy Intro to Python Programming.', 'https://www.udemy.com/course/pythonforbeginnersintro/'),
(29, 'Programming Languages', 'C++ Tutorial for Complete Beginners', 'images-3.png', '4 hours', '1,200,000', 4.5, 'Learn the basics of C++ programming.', '#'),
(30, 'Programming Languages', 'Learn to Program in Javascript: Beginner to Pro', 'download-15.png', '4 hours', '224,226', 4.5, 'Become a great programmer.', '#'),
(31, 'Programming Languages', 'Fundamentals of Programming: Understanding C#', '.NET.png', '10hr 20min', '98,665', 4.5, 'Easy to understand video lectures.', '#'),
(32, 'Programming Languages', 'Object Oriented Programming (OOPs) for JAVA Interviews', 'java1-editorial-logo.jpeg', '13 hour 6 min', '90,985', 4.5, 'Clear Java Interviews with confidence.', '#'),
(33, 'Programming Languages', 'Introduction to Spring Boot 2 and Spring Framework 5', 'springboot.png', '2 hours 18 min', '36,154', 4.5, 'Build a Spring Boot Web Application.', '#'),
(34, 'Programming Languages', 'Introduction to TypeScript', 'TS.png', '1 hour 6min', '96,825', 4.5, 'Supercharge your web-applications.', '#'),
(35, 'Web Development Courses', 'How to Create a Listing or Directory Website with WordPress', 'WordPress-logotype-wmark.png', '1hr 31min', '22,453', 4.5, 'Create a Listing, Directory or Real Estate site.', '#'),
(36, 'Web Development Courses', 'Code a Coming Soon Landing Page in Bootstrap 4', 'bootstrap-solid.svg', '1hr 21min', '48,687', 5, 'Build a countdown landing page.', '#'),
(37, 'Web Development Courses', 'Learn to Make an Animated Image Gallery using HTML5', 'HTML5_logo_and_wordmark.png', '1hr 10min', '31,305', 4.5, 'Guide to animation with HTML.', '#'),
(38, 'Web Development Courses', 'ASP.NET Zero: Development with ASP.NET Core & Angular', 'Microsoft_.NET_logo.png', '1hr 32min', '50,106', 5, 'Build SPA with .NET Core & Angular.', '#');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` text NOT NULL,
  `details` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `button` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `event_date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `title`, `image`, `details`, `link`, `button`, `event_date`, `created_at`) VALUES
(1, 'INDUS TRADE EXPO  EXPO', 'https://voiceoftenkasi.org/wp-content/uploads/2025/07/ITE-tenkasi_Flyer-for-circulation.jpg', '<strong>Date:</strong> July 19th & 20th, 2025<br><strong>Location:</strong> ESSAKI MAHAL, TENKASI<br><strong>Shop Size in Meters:</strong> 2/2, 2/3, 3/3', 'https://events.startuptenkasi.com/INDUSTRADEEXPO', 'Book Now', '2025-07-19', '2025-07-14 09:52:21'),
(2, 'Reviving Rural Economy: Dr. Ambedkar’s Perspective', 'https://voiceoftenkasi.org/wp-content/uploads/2025/06/Ramnath-Ambedkar-event-Flyer-v1-02-scaled.jpg', '<strong>Date:</strong> July 09, 2025<br><strong>Time:</strong> 9:00 AM<br><strong>Location:</strong> Vyasa Arts & Science (Women’s) College, Vasudevanallur, Tenkasi Dt.', 'https://docs.google.com/forms/d/e/1FAIpQLSeowbnsBAoHh_tWjhelM00Zw1j5lnGHNgNHQM0Cst9F2ombDA/viewform?usp=header', 'Register Now', '2025-07-09', '2025-07-14 09:52:21'),
(3, 'Free NEET Coaching Class', 'https://voiceoftenkasi.org/wp-content/uploads/2025/06/neet-admission.jpg', '<strong>Date:</strong> June 15, 2025<br><strong>Time:</strong> 4:00 PM<br><strong>Location:</strong> S. Veerasamy Chettiyar College Campus, Puliyangudi, Tenkasi District', 'https://docs.google.com/forms/d/e/1FAIpQLSdl0snQekhusEuTIBMWKdhZEoDU2qeJLi9Ct-Mv-1riy-UgsA/viewform?usp=header', 'Register Now', '2025-06-15', '2025-07-14 09:52:21'),
(4, 'Career Guidance Program', 'https://voiceoftenkasi.org/wp-content/uploads/2025/05/12th-career-counselling-scaled.png', '<strong>Date:</strong> May 11, 2025<br><strong>Time:</strong> 9:00 AM to 12:00 PM<br><strong>Location:</strong> Suba Sundari Mahal, Surandai.', 'https://docs.google.com/forms/d/e/1FAIpQLSfwtGPsX5BtRpS_1JL6DBqtJ2xFWPseFZ4evAX9BLcDj3hRhw/viewform?usp=header', 'Register Now', '2025-05-11', '2025-07-14 09:52:21'),
(5, 'Space Science', 'https://voiceoftenkasi.org/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-17-at-12.53.17.jpeg', '<strong>Date:</strong> September 30, 2024 – October 01, 2024<br><strong>Time:</strong> 10:00 AM to 4:00 PM<br><strong>Location:</strong> AVK International Residential Sr. Sec. School, Sankarankovil.', 'https://docs.google.com/forms/d/e/1FAIpQLSfwtGPsX5BtRpS_1JL6DBqtJ2xFWPseFZ4evAX9BLcDj3hRhw/viewform?usp=header', NULL, '2024-09-30', '2025-07-14 09:52:21'),
(6, 'Free Teacher Training & Job Support for Graduate Housewives', 'https://voiceoftenkasi.org/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-07-at-16.07.19.jpeg', '<strong>Date:</strong> November 24, 2024<br><strong>Location:</strong> Gurusamy Gokul Thirumana Mahal, Melaratha Vethi, Sankarankovil.', 'https://docs.google.com/forms/d/e/1FAIpQLSfwtGPsX5BtRpS_1JL6DBqtJ2xFWPseFZ4evAX9BLcDj3hRhw/viewform?usp=header', NULL, '2024-11-24', '2025-07-14 09:52:21'),
(7, 'Construct Toilets in Government School', 'https://voiceoftenkasi.org/wp-content/uploads/2024/08/Toilet-Day-Introduction-Flyer-1.jpg', '<strong>Date:</strong> November 24, 2024<br><strong>Location:</strong> Gurusamy Gokul Thirumana Mahal, Melaratha Vethi, Sankarankovil.', 'https://docs.google.com/forms/d/e/1FAIpQLSfwtGPsX5BtRpS_1JL6DBqtJ2xFWPseFZ4evAX9BLcDj3hRhw/viewform?usp=header', 'Register Now', '2024-11-24', '2025-07-14 09:52:21'),
(8, 'தேங்காய் சிரட்டை கைவினை பொருட்கள் செயல்முறை பயிற்சி வகுப்பு', 'https://voiceoftenkasi.org/wp-content/uploads/2024/03/coconut-shells-scaled.jpg', '', '', '', '2024-03-16', '2025-07-14 10:10:12'),
(9, 'Yoga Day Celebration', 'https://voiceoftenkasi.org/wp-content/uploads/2024/06/yoga-day-01-1-scaled.jpg', 'Location:Gandhi Kalai Mandram, Rajapalayam, Tamil Nadu, India', '', '', '2024-06-23', '2025-07-16 09:56:07');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `location` varchar(100) DEFAULT NULL,
  `experience` varchar(50) DEFAULT NULL,
  `mode` varchar(50) DEFAULT NULL,
  `employment_type` varchar(100) DEFAULT NULL,
  `must_have` text DEFAULT NULL,
  `duties` text DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `title`, `location`, `experience`, `mode`, `employment_type`, `must_have`, `duties`, `logo`, `created_at`) VALUES
(1, 'UI UX Designer', 'Mumbai/Chennai/Hyderabad', '2-4 years', 'Hybrid', 'Full-Time, Permanent', 'Figma, UX research, creativity', 'Design wireframes, collaborate with developers', './assets/images/uiux.png', '2025-07-25 13:21:13'),
(2, 'Senior Native App Developer (Android)', 'Mumbai/Chennai/Hyderabad', '4+ years', 'Work-from-Office', 'Full-Time, Permanent', 'Kotlin/Java, REST APIs, Android SDK', 'Develop native Android apps, maintain code quality', './assets/images/andriod.jpg', '2025-07-25 13:21:13'),
(3, 'Senior Full-Stack Web Developer', 'Mumbai/Chennai/Hyderabad', '4+ years', 'Work-from-Office', 'Full-Time, Permanent', 'PHP, React, SQL, Git', 'Build and integrate front & back-end components', './assets/images/full-stack.png', '2025-07-25 13:21:13'),
(4, 'Senior Back-end Developer', 'Mumbai/Chennai/Hyderabad', '5+ years', 'Hybrid', 'Full-Time, Permanent', 'Node.js, APIs, Database skills', 'Develop scalable backend systems', './assets/images/backend.jpg', '2025-07-25 13:21:13'),
(5, 'Senior Front-end Developer', 'Mumbai/Chennai/Hyderabad', '2+ years', 'Hybrid', 'Full-Time, Permanent', 'HTML, CSS, JS, React/Angular', 'Create responsive UIs, optimize performance', './assets/images/frontend.jpg', '2025-07-25 13:21:13'),
(6, 'QA Engineer', 'Mumbai/Chennai/Hyderabad', '2+ years', 'Hybrid', 'Full-Time, Permanent', 'Automation tools, attention to detail', 'Test and report bugs, automate test cases', './assets/images/QA Engineer.jpg', '2025-07-25 13:21:13'),
(7, 'Project Manager', 'Mumbai/Chennai/Hyderabad', '5+ years', 'Hybrid', 'Full-Time, Permanent', 'Leadership, Agile/Scrum knowledge', 'Manage timelines, coordinate with teams', './assets/images/Project Manager.jpg', '2025-07-25 13:21:13'),
(8, 'Marketing Executive', 'N/A', '1+ years', 'N/A', 'N/A', 'Communication, digital marketing basics', 'Promote brand, handle campaigns', './assets/images/Marketing Executive.jpg', '2025-07-25 13:21:13'),
(9, 'Front-end Developer', 'Mumbai/Chennai/Hyderabad', '2+ years', 'Hybrid', 'Full-Time, Permanent', 'HTML, CSS, JS, Bootstrap/React', 'Develop UI components, ensure responsiveness', './assets/images/frontend2.jpg', '2025-07-25 13:21:13'),
(10, '.NET Developer', 'Mumbai', '2+ years', 'Hybrid', 'Full-Time, Permanent', 'C#, ASP.NET, SQL Server', 'Develop and maintain .NET apps', './assets/images/.NET Developer.jpg', '2025-07-25 13:21:13'),
(11, 'Business Analyst', 'Mumbai/Chennai/Hyderabad', '2+ years', 'Hybrid', 'Full-Time, Permanent', 'Analytical thinking, stakeholder communication', 'Gather requirements, document workflows', './assets/images/Business Analyst.jpg', '2025-07-25 13:21:13');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image_url` varchar(500) NOT NULL,
  `read_more` varchar(500) DEFAULT NULL,
  `read_more_1` varchar(500) DEFAULT NULL,
  `read_more_2` varchar(500) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `description`, `image_url`, `read_more`, `read_more_1`, `read_more_2`, `created_at`) VALUES
(1, 'Tenkasi Man Felicitated At Washington In The Presence Of US Congressmen', 'Ananthan Ayyasamy, State Vice President of Tamil Nadu BJP Other States & Overseas Tamil Development Cell (OOSTD Cell), was awarded the honour “PRIDE OF INDIA” by US Congressman Raja Krishnamoorthi at the historic GSA INDIA@75 EXPO in Washington DC.', 'https://voiceoftenkasi.org/wp-content/uploads/2023/11/Slide1-1.jpg', 'https://thecommunemag.com/tenkasi-man-felicitated-at-washington-in-the-presence-of-us-congressmen/', NULL, NULL, '2025-07-14 10:26:45'),
(2, 'Free Employment Training Program for Graduate Housewives', 'The Voice of Tamil Nadu Foundation inaugurated a free job placement training program for graduate housewives in Sankarankovil. The event was graced by Dr. Tamilisai Soundararajan, Sridhar Vembu, Madhumati Narayanan, and Anathan Ayyasamy. The program aims to empower educated housewives.', 'https://voiceoftenkasi.org/wp-content/uploads/2024/11/Slide1-4.png', NULL, 'https://tamiljanam.com/91340220/#google_vignette', 'https://www.tamil365.com/2024/11/Free-Employment-Training-Program-for-Graduate-Housewives.html', '2025-07-14 10:26:45'),
(3, 'Environmental Initiative: 1,000 Palm Seeds Planted Near Puliangudi', 'The Voice of Tenkasi Foundation has planted 1,000 palm seeds along the bank of Suryanarayanapperi pond near Puliangudi. The initiative enhances the local ecosystem, promotes greenery, and supports soil conservation.', 'https://voiceoftenkasi.org/wp-content/uploads/2024/11/Slide1-3.png', NULL, NULL, NULL, '2025-07-14 10:26:45'),
(4, 'Voice of Tenkasi Hosts Online Photography Contest on World Photography Day', 'In celebration of World Photography Day, Voice of Tenkasi organized an online photography contest with the theme “Tamil Culture.” The contest showcased stunning images that highlighted the essence of Tamil heritage. Prizes were awarded to the top three winners.', 'https://voiceoftenkasi.org/wp-content/uploads/2024/08/photography-contest.jpg', NULL, NULL, NULL, '2025-07-14 10:26:45'),
(5, 'Voice of Tenkasi Foundation Launches Summer Relief Initiative', 'On behalf of the Voice of Tenkasi Foundation, Ananthan Ayyasamy, the founder, announced the opening of free water and buttermilk pandals to quench the thirst of the people during the scorching summer. In its initial phase, arrangements were made to provide daily drinking water and buttermilk in various municipalities including Vasudevanallur, Puliangudi, Sendhamaram, Surandai, and Mattalambarai Gunaramanallur. Foundation volunteers coordinated and executed this noble initiative.', 'https://voiceoftenkasi.org/wp-content/uploads/2024/07/water-supply-2.png', NULL, NULL, NULL, '2025-07-14 10:26:45'),
(6, 'Empowering Women Entrepreneurs', 'An appreciation function was organized for women entrepreneurs at Balaarunachalapuram Sadhana Vidyalaya School in Kadayanallur, on behalf of Ananthan Ayyasamy, the founder of Voice of Tenkasi. The event aimed to recognize and celebrate the achievements of women entrepreneurs in the community. Various dignitaries and guests attended to acknowledge their contributions to the local economy and society. It served as a source of inspiration for aspiring entrepreneurs and highlighted the importance of entrepreneurship in driving socio-economic growth and empowerment.', 'https://voiceoftenkasi.org/wp-content/uploads/2024/07/vot-14.png', NULL, NULL, NULL, '2025-07-14 10:26:45');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
