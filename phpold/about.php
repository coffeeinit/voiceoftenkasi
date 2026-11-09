<?php 
// Page configuration
$page_title = "Team - Voice of Tenkasi Foundation";
$page_description = "Meet our dedicated team working towards rural development and technology innovation in Tenkasi.";

// Patron information
$patron = [
    'name' => 'Sridhar Vembu',
    'title' => 'CEO, @Zoho',
    'description' => 'Sridhar Vembu, the visionary founder and CEO of Zoho Corporation, has transformed rural India into tech hubs, emphasizing the future of offices in villages. From a middle-class background, he earned a Ph.D. from Princeton before founding Zoho, a highly successful bootstrapped company, with a reported revenue of over $1 billion. Vembu\'s commitment extends beyond business, with initiatives like Zoho Schools and Zoho University, aiming to train youth in underprivileged areas and addressing India\'s unemployment crisis. Awarded the Padma Shri, he exemplifies a grounded, nationalist leader, urging entrepreneurs to build products for the world and to practice simple living.',
    'quote' => 'India needs a corporate mandate on R&D',
    'image' =>'./assets/images/Sridhar Vembu.jpg'
  ];

// Founder information
$founder = [
    'name' => 'Ananthan Ayyasamy',
    'title' => 'Founder @ Voice of Tenkasi Foundation',
    'description' => 'Ananthan Ayyasamy, a semiconductor expert turned rural advocate, left a successful career at Intel in the US to revitalize Tenkasi. His dedication stems from personal struggles, inspiring his focus on education, tech, and entrepreneurship. Through \'Startup Tenkasi\' and infrastructural dreams, he aims for economic growth and tech innovation. Holding degrees from NIT Trichy and ASU, with patents in semiconductor design, he\'s now a BJP leader and a catalyst for rural education and community development. Ananthan\'s journey, from farm laborer to changemaker, fuels hope and progress in Tenkasi, driving Voice of Tenkasi Foundation\'s impactful initiatives for community welfare and growth.',
    'image'=> './assets/images/Ananthan Ayyasamy.jpg',
    'social_links' => [
        'twitter' => 'https://twitter.com/TenkasiAnanthan',
        'linkedin' => 'https://www.linkedin.com/in/ananthan/',
        'facebook' => 'https://www.facebook.com/ananthan.ayyasamy'
    ]
];

// Team members data
$team_members = [
    [
        'name' => 'Karunya Gunavathy',
        'role' => 'Chief of Staff',
        'image' => './assets/images/Karunya Gunavathy.jpg',
        'description' => 'Karunya Gunavathy serves as the Chief of Staff at the Voice of Tenkasi Foundation (VOTF) and is also the Founder of Raphael Creatives (RC), a presentation design venture. With an MBA from the University of Madras and a background in graphic design, she combines aesthetics and functionality to create visually stunning presentations. Karunya is passionate about transforming complex ideas into impactful narratives. She values collaboration, understanding clients\' needs, and aims to inspire and persuade through her work.',
        'featured' => true
    ],
    [
        'name' => 'Muthu Selvam',
        'role' => 'Digital Project Manager',
        'image' => 'https://voiceoftenkasi.org/wp-content/uploads/elementor/thumbs/muthuselvam-e1706264477686-qnkjqugx1m77krczxfb1eofjye0jne4dh5ol9cn69c.jpg',
        'description' => 'Experienced digital project manager overseeing our technology initiatives.',
        'featured' => false
    ],
    [
        'name' => 'Suraj',
        'role' => 'Web Developer',
        'image' => 'https://voiceoftenkasi.org/wp-content/uploads/elementor/thumbs/suraj__2_-removebg-preview-1-qpu4sm1md1r6bh5zzxdp5mpxi3qoaaucupkcx64uwg.png',
        'description' => 'Skilled web developer creating digital solutions for our community.',
        'featured' => false
    ],
    [
        'name' => 'Ram Vel',
        'role' => 'People Outreach',
        'image' => 'https://voiceoftenkasi.org/wp-content/uploads/elementor/thumbs/WhatsApp_Image_2024-06-12_at_15.46.24_bb9f39ad-removebg-preview-qpjp4eahp44g5xudx0dwtf40eyvkrin8s24grmmgkw.png',
        'description' => 'Community outreach specialist connecting with local communities.',
        'featured' => false
    ]
];

// Include header with page variables
include 'header.php'; 
?>
<!-- Main Content -->
<div class="container mt-5 pt-5" >

  <!-- Patron -->
  <section class="patron-section" data-aos="fade-up"style=" padding-top: 50px; ">
    <div class="row align-items-center">
      <div class="col-md-6 mb-4">
        <h4 class="text-uppercase text-primary">-Patron-</h4>
        <h2 class="fw-bold"><?php echo $patron['name']; ?></h2>
        <hr class="border-primary w-25">
        <h5 class="text-muted mb-3"><?php echo $patron['title']; ?></h5>
        <p><?php echo $patron['description']; ?></p>
        <div class="inspiration-quote mt-4">
          <p class="fs-5 fst-italic text-muted">"<?php echo $patron['quote']; ?>"</p>
          <p class="small text-muted">His commitment to rural innovation is one of our guiding inspirations.</p>
        </div>
      </div>
      <div class="col-md-6 mb-4 text-center">
        <div class="rounded d-flex align-items-center justify-content-center " style="background-color:#E6F3FF; height: 450px; width: 100%; min-width: 400px;">
          <img src="<?php echo $patron['image']; ?>" alt="<?php echo $patron['quote']; ?>" class="img-fluid rounded shadow-sm mb-3 position-relative z-2" style="max-width: 400px;">
        </div>
      </div>
    </div>
  </section>

  <!-- Founder -->
  <section class="founder-section py-5" data-aos="fade-up" data-aos-delay="100">
    <div class="row align-items-center">
      <div class="col-md-6 mb-4 text-center">
        <div class="rounded d-flex align-items-center justify-content-center border" style="background-color: #E6F3FF; height: 450px; width: 100%; min-width: 400px;">
          <img src="<?php echo $founder['image']; ?>" alt="Founder" class="img-fluid rounded shadow-sm mb-3" style="max-width: 400px;">
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <h4 class="text-uppercase text-primary">-Founder-</h4>
        <h2 class="fw-bold"><?php echo $founder['name']; ?></h2>
        <hr class="border-primary w-25">
        <h5 class="text-muted mb-3"><?php echo $founder['title']; ?></h5>
        <p><?php echo $founder['description']; ?></p>
        <div class="social-links d-flex gap-3 mt-3">
          <?php foreach ($founder['social_links'] as $platform => $url): 
            switch ($platform) {
                case 'twitter':
                    $icon_class = 'fab fa-x-twitter';
                    break;
                case 'linkedin':
                    $icon_class = 'fab fa-linkedin-in';
                    break;
                case 'facebook':
                    $icon_class = 'fab fa-facebook-f';
                    break;
                default:
                    $icon_class = '';
                }

          ?>
            <a href="<?php echo $url; ?>" target="_blank" class="text-dark fs-4" title="<?php echo ucfirst($platform); ?>">
              <i class="<?php echo $icon_class; ?>"></i>
            </a>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
  </section>

  <!-- Team -->
  <section class="team-section py-5">
    <div class="text-center mb-5" data-aos="fade-up" data-aos-delay="150">
      <h2 class="fw-bold">Our Team</h2>
      <hr class="w-25 mx-auto border-primary">
      <p class="text-muted">Meet the dedicated professionals working towards our mission</p>
    </div>

    <!-- Featured -->
<?php foreach ($team_members as $member): ?>
  <?php if ($member['featured']): ?>
  <div class="row justify-content-center mb-5"
     data-aos="fade-up"
     data-aos-duration="1000"
     data-aos-easing="ease-out-cubic">

  <div class="col-lg-12">
    <div class="featured-member-card p-4 rounded-4 shadow-lg text-center d-flex flex-column align-items-center justify-content-center" style="background-color:#fff; border: 2px solid rgba(0, 0, 0, 0.1);">
      
      <div class="d-flex justify-content-center align-items-center mb-4">
        <div class="">
          <div class=""></div>
          <img src="<?php echo $member['image']; ?>" alt="<?php echo $member['name']; ?>" class="img-fluid shadow"
               style="width: 300px; height: 300px; object-fit: cover; border-radius: 16px; position: relative; z-index: 2; border: 1px solid #666c7270;">
        </div>
      </div>

      <div class="text-center">
        <h3 class="fw-semibold text-primary mt-3"><?php echo $member['name']; ?></h3>
        <span class="px-3 py-2 rounded d-inline-block fw-semibold bg-white text-primary shadow-sm">Chief of Staff</span>
        
        <p class="text-muted fst-italic mb-3">“Transforming ideas into impactful visual narratives.”</p>
        <p class="text-dark lh-base"><?php echo $member['description']; ?></p>
      </div>
      
    </div>
  </div>
</div>

  <?php endif; ?>
<?php endforeach; ?>


    <!-- Regular Members -->
    <div class="row text-center">
      <?php foreach ($team_members as $member): ?>
        <?php if (!$member['featured']): ?>
        <div class="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="150">
          <div class="card h-100 border-0 team-member-card shadow-sm">
            <div class="card-body text-center p-4">
              <img src="<?php echo $member['image']; ?>" class="img-fluid rounded-circle mb-3 shadow" alt="<?php echo $member['name']; ?>" style="width: 120px; height: 120px; object-fit: cover;">
              <p class="card-title mb-1"><?php echo $member['name']; ?></p>
              <p class="text-muted mb-2"><?php echo $member['role']; ?></p>
              <p class="small text-secondary"><?php echo $member['description']; ?></p>
            </div>
          </div>
        </div>
        <?php endif; ?>
      <?php endforeach; ?>
    </div>
  </section>
</div>

<?php include 'footer.php'; ?>