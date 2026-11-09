<?php include 'header.php'; ?>

<!-- AOS CSS + JS -->
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
  AOS.init({
    duration: 1000,
    once: true
  });
</script>

<?php
$site_config = [
  'site_name' => 'Voice of Tenkasi',
  'site_description' => 'Empowering Lives, Enriching Futures of Tenkasi',
  'base_url' => 'https://voiceoftenkasi.org',
  'contact_email' => 'info@voiceoftenkasi.org'
];

$initiatives = [
  [
    'title' => 'Startup Initiatives',
    'icon' => './assets/images/Startup Initiatives.jpg',
    'description' => 'Supporting local entrepreneurs and startups',
    'link' => 'whatwedo.php'
  ],
  [
    'title' => 'Jobs4Life',
    'icon' => './assets/images/Job4Life.jpg',
    'description' => 'Creating sustainable career opportunities',
    'link' => 'whatwedo.php'
  ],
  [
    'title' => 'Tech Education',
    'icon' => 'assets/images/Tech Education.png',
    'description' => 'Providing quality technology education',
    'link' => 'whatwedo.php'
  ],
  [
    'title' => 'Empowering Farmers',
    'icon' => 'assets/images/Empowering Farmers.jpg',
    'description' => 'Supporting agricultural innovation',
    'link' => 'whatwedo.php'
  ]
];

$more_initiatives = [
  [
    'title' => 'Free Education Initiatives',
    'icon' => 'assets/images/Free Education.jpg',
    'description' => 'Making education accessible to all',
    'link' => 'whatwedo.php'
  ],
  [
    'title' => 'Career Building for Graduates',
    'icon' => 'assets/images/Career Building.jpg',
    'description' => 'Guiding graduates to successful careers',
    'link' => 'whatwedo.php'
  ],
  [
    'title' => 'Health is Happiness',
    'icon' =>'assets/images/Health is Happiness.jpg',
    'description' => 'Promoting health and wellness',
    'link' => 'whatwedo.php'
  ],
  [
    'title' => 'What Next After High School',
    'icon' => 'assets/images/What next.jpg',
    'description' => 'Guiding students for their future',
    'link' => 'whatwedo.php'
  ]
];

$gallery_images = [
  'https://voiceoftenkasi.org/wp-content/uploads/2023/12/Slide1-3.png',
  'https://voiceoftenkasi.org/wp-content/uploads/2023/12/Slide2.png',
  'https://voiceoftenkasi.org/wp-content/uploads/2023/12/Slide3.png',
  'https://voiceoftenkasi.org/wp-content/uploads/2023/12/Slide4.png',
  'https://voiceoftenkasi.org/wp-content/uploads/2023/12/Slide5.png',
  'https://voiceoftenkasi.org/wp-content/uploads/2023/12/Slide6.png',
  'https://voiceoftenkasi.org/wp-content/uploads/2023/12/Slide7.png',
  'https://voiceoftenkasi.org/wp-content/uploads/2023/12/Slide8.png',
  'https://voiceoftenkasi.org/wp-content/uploads/2024/01/Presentation2-scaled.jpg',
  'https://voiceoftenkasi.org/wp-content/uploads/2024/02/vot4-3-scaled.jpg'
];

$goals = [
  'Empower the community through accessible education.',
  'Foster innovation in key sectors like AI, semiconductors, IT, manufacturing, and agriculture.',
  'Establish Tenkasi as a global technological powerhouse.'
];

function renderInitiativeCard($initiative, $index) {
  return '
    <div class="col-md-3 mb-4" data-aos="fade-up" data-aos-delay="' . ($index * 100) . '">
      <div class="card h-100 shadow-sm initiative-card bg-white">
        <div class="card-body text-center d-flex flex-column">
          <div class="d-flex justify-content-center mb-3">
            <div class="rounded-circle bg-white p-3 shadow-sm d-flex align-items-center justify-content-center" style="width: 90px; height: 90px; overflow:hidden; ">
              <img src="' . htmlspecialchars($initiative['icon']) . '" 
                   alt="' . htmlspecialchars($initiative['title']) . '" 
                   class="img-fluid" style="max-width: 100px;" loading="lazy">
            </div>
          </div>
          <h5 class="card-title fw-semibold flex-grow-1">' . htmlspecialchars($initiative['title']) . '</h5>
          <p class="card-text text-muted small">' . htmlspecialchars($initiative['description']) . '</p>
          <a href="' . htmlspecialchars($initiative['link']) . '" class="btn btn-outline-primary btn-sm mt-auto" data-aos="fade-up">
            Read More <i class="fas fa-arrow-right ms-1"></i>
          </a>
        </div>
      </div>
    </div>';
}

?>

<!-- Hero Section -->
<section class="hero-section  position-relative shadow-lg" style="overflow: hidden; background-color: rgb(0, 132, 255); padding-top: 150px; ">
  <div class="position-absolute top-0 start-0 w-100 h-100" 
       style="background-image: url('https://images.pexels.com/photos/6775105/pexels-photo-6775105.jpeg'); 
              background-size: cover; 
              background-position: center; 
              opacity: 0.6; 
              z-index: 0;">
  </div>
  <div class="container position-relative" style="z-index: 2;">
    <div class="row align-items-center">
      <div class="col-md-6 mb-4" data-aos="fade-up">
        <img src="https://voiceoftenkasi.org/wp-content/uploads/2024/06/imgonline-com-ua-ReplaceColor-BokLmEfIqN-removebg-preview.png"
             class="position-absolute top-50 start-50 translate-middle opacity-25"
             style="z-index: 0; max-width: 100%; pointer-events: none;" alt="" loading="lazy">
        <div class="position-relative p-4">
          <h1 class="text-white" style="font-family: 'Scheherazade New', sans-serif; font-size: 4.2rem; line-height: 1.3;">
            Empowering Lives<br>Enriching Futures<br><span class="text-white">of Tenkasi</span>
          </h1>
        </div>
      </div>
      <div class="col-md-6 mb-4 text-center" data-aos="zoom-in" data-aos-delay="300">
        <a href="https://voiceoftenkasi.org/wp-content/uploads/2025/06/VOTF-Magazine-_October-2024-1_compressed-1-1.pdf" target="_blank">
          <img src="https://voiceoftenkasi.org/wp-content/uploads/2024/10/VOTF-Magazine-_October-2024_page-0001-208x300.jpg"
               class="img-fluid rounded shadow" alt="Magazine Cover" loading="lazy">
        </a>
      </div>
    </div>
  </div>
</section>

<!-- About Us -->
<section class="py-5 bg-white">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-6 mb-4" data-aos="fade-right">
        <h6 class="text-uppercase text-primary mb-3">About Us</h6>
        <p class="lead">Welcome to <strong>Voice of Tenkasi</strong> — witness the evolution of Tenkasi rural into a global tech hub of India by 2032.</p>
        <h6 class="text-uppercase text-primary mt-4 mb-3">Our Goal is to</h6>
        <ul class="list-unstyled">
          <?php foreach ($goals as $index => $goal): ?>
            <li class="mb-2" data-aos="fade-up" data-aos-delay="<?= 400 + ($index * 100) ?>">
              <i class="fas fa-check-circle text-success me-2"></i> <?= htmlspecialchars($goal) ?>
            </li>
          <?php endforeach; ?>
        </ul>
      </div>
      <div class="col-md-6 mb-4 text-center" data-aos="fade-left">
        <img src="https://voiceoftenkasi.org/wp-content/uploads/2024/06/Untitled-design-8.png" class="img-fluid rounded shadow" width="600" loading="lazy" alt="About Image">
      </div>
    </div>
  </div>
</section>
<section class="py-5 bg-light">
  <div class="container" data-aos="fade-up">

    <!-- First Row: Video + Text -->
    <div class="row align-items-center mb-5">
      <!-- Left Column: YouTube Video -->
      <div class="col-md-6">
        <div class="ratio ratio-16x9 mb-3">
          <iframe src="https://www.youtube.com/embed/HlvWVTMJqt0?rel=0&autoplay=0&loop=1&playlist=HlvWVTMJqt0"
                  title="Voice of Tenkasi Foundation"
                  allowfullscreen></iframe>
        </div>
      </div>

      <!-- Right Column: Text Content -->
      <div class="col-md-6">
        <h2 class="fw-bold">Educate, Innovate, Transform</h2>
        <p>To elevate Tenkasi rural into a developed, well-connected and self-reliant region through the use of
          technology, education and sustainable initiatives.</p>
      </div>
    </div>

    <!-- Second Row: Two Images (side-by-side) + Text -->
    <div class="row align-items-center">
      <!-- Left Column: Two Side-by-Side Images inside col-md-6 -->
      <div class="col-md-6">
        <div class="row g-3">
          <div class="col-6">
            <img src="https://voiceoftenkasi.org/wp-content/uploads/2024/06/PXL_20240601_105116509-1024x576.jpg"
                 class="img-fluid rounded shadow" alt="Event Image 1">
          </div>
          <div class="col-6">
            <img src="./assets/images/enriching future.jpg"
                 class="img-fluid rounded shadow" alt="Event Image 2">
          </div>
        </div>
      </div>

      <!-- Right Column: Additional Text -->
      <div class="col-md-6">
        <h4 class="fw-bold">Empowering Lives</h4>
        <p>Empowering communities by providing education, leadership, and resources to help them shape their own futures.</p>

        <h4 class="fw-bold mt-4">Enriching Futures</h4>
        <p>Creating long-term change through improved healthcare, education, and livelihood opportunities.</p>
      </div>
    </div>

  </div>
</section>



<!-- Gallery -->
<section class="py-5 bg-white">
  <div class="container">
    <h2 class="text-center fw-bold mb-4" data-aos="fade-up">Gallery Highlights</h2>
    <div class="d-flex overflow-auto gap-3" id="galleryScroll">
      <?php foreach ($gallery_images as $index => $image): ?>
        <div class="card flex-shrink-0 border-0 shadow-sm" style="scroll-snap-align: start;" data-aos="fade-up" data-aos-delay="<?= $index * 100 ?>">
          <img src="<?= $image ?>" class="card-img-top" style="object-fit: contain; max-height: 400px;" alt="Gallery Image <?= $index + 1 ?>" loading="lazy">
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- What We Do -->
<section class="py-5 bg-white">
  <div class="container">
    <h2 class="text-center fw-bold mb-5" data-aos="fade-up">What We Do</h2>
    <div class="row g-4">
      <?php foreach ($initiatives as $index => $initiative): ?>
        <?= renderInitiativeCard($initiative, $index); ?>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- More Initiatives -->
<section class="py-5 bg-white">
  <div class="container ">
    <h2 class="text-center fw-bold mb-5" data-aos="fade-up">More Initiatives</h2>
    <div class="row g-4">
      <?php foreach ($more_initiatives as $index => $initiative): ?>
        <?= renderInitiativeCard($initiative, $index); ?>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<?php include 'footer.php'; ?>
