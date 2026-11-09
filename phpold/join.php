<?php include 'header.php'; ?>

<?php
$volunteer_heading = "Our Passionate Volunteers";
$volunteer_subheading = "Be a part of the change you wish to see.";
$volunteer_paragraphs = [
  "At Voice of Tenkasi Foundation, we are a team of passionate individuals dedicated to making a difference. Our members come from diverse backgrounds, united by a shared commitment to uplift the communities of Tenkasi.",
  "Join our team of dedicated volunteers and make a direct impact on the lives of Tenkasi’s residents. Your skills and passion can contribute to our various projects and programs.",
  
];
$volunteer_text = "Hands that Help, Hearts that Care!!";
$volunteer_button_text = "Join as a Volunteer";
$volunteer_button_link = "https://volunteer.voiceoftenkasi.org/";
$volunteer_image = "./assets/images/volunteer1.jpg"; // Top image
?>

<!-- Fullscreen Image Section with Dark Overlay -->
<section class="vh-100 d-flex align-items-center justify-content-center position-relative" style="
  background: url('<?= $volunteer_image ?>') center center / cover no-repeat;
">
  <!-- Overlay -->
  <div style="
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Adjust opacity here */
    z-index: 1;
  "></div>

  <!-- Content -->
  <div class="text-center text-white position-relative" style="z-index: 2;">
    <h1 class="display-4 fw-bold"><?= $volunteer_heading ?></h1>
    <p class="lead"><?= $volunteer_subheading ?></p>
  </div>
</section>


<!-- Overlapping Content Box Section -->
<section class="position-relative" style="background-color: #f9f9f9; padding-top: 150px;  ">
  <div class="container mb-3">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="bg-white  shadow-lg p-5" style="
          position: relative;
          margin-top: -300px; /* overlap effect */
          z-index: 10;
        ">
          <h3 class="fw-bold mb-3"><?= $volunteer_text?></h3>
          <p class="lead mb-4"><?= $volunteer_subheading ?></p>

          <?php foreach ($volunteer_paragraphs as $para): ?>
            <p class="mb-3"><?= $para ?></p>
          <?php endforeach; ?>

          <a href="<?= $volunteer_button_link ?>" class="btn btn-primary btn-lg mt-3" target="_blank">
            <?= $volunteer_button_text ?> <i class="bi bi-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<?php include 'footer.php'; ?>
