<?php include 'header.php'; ?>

<!-- YouTube Section -->
<section class="py-2 bg-white">
  <div class="container" style=" padding-top: 80px;">
    <div class="row justify-content-center">
      <div class="col-lg-7 mx-auto">
        <div class="ratio ratio-16x9 shadow rounded" data-aos="fade-up">
          <iframe
            src="https://www.youtube.com/embed/68YzVnCN2W8?autoplay=1&loop=1&playlist=68YzVnCN2W8&controls=1&rel=0&playsinline=1"
            title="What We Do | Voice of Tenkasi Foundation"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</section> 


<!-- Final Row: Education | Healthcare | Sustainability -->
<div class="container py-5">
  <div class="row">
    <?php
    $finalPrograms = [
      [
        'title' => 'Education Programs',
        'img' => './assets/images/education.png',
        'desc' => 'Enabling access to quality education through scholarships, school development projects, and skill-building.',
        'delay' => 100
      ],
      [
        'title' => 'Healthcare Initiatives',
        'img' => './assets/images/health1.jpg',
        'desc' => 'Supporting healthcare facilities, organizing medical camps, and creating awareness about preventive health.',
        'delay' => 200
      ],
      [
        'title' => 'Sustainable Development',
        'img' => './assets/images/Sustainable Development.jpg',
        'desc' => 'Implementing clean energy, waste management, and environmental conservation initiatives in Tenkasi.',
        'delay' => 300
      ]
    ];

    foreach ($finalPrograms as $program): ?>
      <div class="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="<?= $program['delay']; ?>">
        <div class="program-card h-100">
          <div class="mb-3">
            <img src="<?= $program['img']; ?>" alt="<?= $program['title']; ?>" class="img-fluid">
          </div>
          <h4 class="fw-bold"><?= $program['title']; ?></h4>
          <hr class="mx-auto my-3" style="width: 60px; height: 2px; background-color: #198754; opacity: 1;">
          <p><?= $program['desc']; ?></p>
        </div>
      </div>
    <?php endforeach; ?>
  </div>
</div>   

<!-- MAJOR ACTIVITITES -->
 <section class="py-2" style="background-color: #ffffffff; ">
  <div class="container my-5" data-aos="fade-up" >
    <div class="text-center">
      <h1 class="display-5 fw-bold">Major Activities</h1>
      <hr class="mx-auto" style="width: 100px; height: 3px; background-color: #000; opacity: 1;">
    </div>
  </div>
 
 <div class="container py-2" style="margin-top:10px;">
   <!-- Container with position-relative for button placement -->
<div class="position-relative my-4z">
  
  <section class="py-5 bg-light">
  <div class="container">
    <div class="row">
      <?php
      $allActivities = [
        [
          'title' => 'Startup Initiatives',
          'img' => './assets/images/Startup Initiatives.jpg',
          'desc' => 'Fostering a culture of innovation and entrepreneurship. Supporting startups with resources to thrive.'
        ],
        [
          'title' => 'Jobs4Life',
          'img' => './assets/images/Job4Life.jpg',
          'desc' => 'Connecting job seekers to employment opportunities and creating sustainable livelihoods locally.'
        ],
        [
          'title' => 'Tech Education',
          'img' => 'assets/images/Tech Education.png',
          'desc' => 'Empowering youth with digital skills to succeed in the modern workforce and global environment.'
        ],
        [
          'title' => 'Empowering Farmers',
          'img' => 'assets/images/Empowering Farmers.jpg',
          'desc' => 'Promoting sustainable farming methods to enhance productivity and rural prosperity.'
        ],
        [
          'title' => 'Free Education Initiatives',
          'img' => 'assets/images/Free Education.jpg',
          'desc' => 'We provide free spoken English and other educational programs to bridge communication gaps and unlock opportunities.'
        ],
        [
          'title' => 'Career Building for Graduates',
          'img' => 'assets/images/Career Building.jpg',
          'desc' => 'Empowering graduates with career guidance, skill development, and mentorship for a successful professional path.'
        ],
        [
          'title' => 'Health is Happiness',
          'img' => 'assets/images/Health is Happiness.jpg',
          'desc' => 'Creating awareness and organizing camps to promote physical and mental well-being in the community.'
        ],
        [
          'title' => 'What Next After High School',
          'img' => 'assets/images/What next.jpg',
          'desc' => 'Helping students explore post-school career and education options with the right guidance and support.'
        ]
      ];

      foreach ($allActivities as $item): ?>
        <div class="col-md-6 col-lg-3 mb-4">
          <div class="card h-100 shadow-sm">
            <div class="card-body d-flex flex-column align-items-center text-center pt-4 pb-2">
              <!-- Image -->
              <div class="d-flex justify-content-center mb-3">
                <div class="rounded-circle"
                  style="width: 110px; height: 110px; background: linear-gradient(135deg, #e6f3ff 60%, #b0d4f1 100%); border: 3px solid #fff; display: flex; align-items: center; justify-content: center;">
                  <img src="<?= $item['img']; ?>" alt="<?= $item['title']; ?>"
                    style="width: 75px; height: 75px; object-fit: contain;" class="rounded-circle bg-white">
                </div>
              </div>
              <!-- Text -->
              <h5 class="fw-bold text-primary"><?= $item['title']; ?></h5>
              <p class="text-muted small px-2"><?= $item['desc']; ?></p>
            </div>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>
</section>
<?php include 'footer.php'; ?>
