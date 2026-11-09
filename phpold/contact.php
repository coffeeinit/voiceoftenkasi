<?php include 'header.php'; ?>
<section class="connect-section py-5 bg-light" style="color: #FFFFFF;">
  <div class="container">
    <div class="row align-items-center">
      
      <!-- Left Column -->
      <div class="col-md-6 mb-4 mb-md-0 d-flex flex-column align-items-center text-center" data-aos="fade-right" data-aos-duration="1000">
        <div class="connect-heading mb-3">
          <h2 data-aos="fade-up" data-aos-delay="100">Connect with</h2>
          <h1 data-aos="fade-up" data-aos-delay="200">Voice of Tenkasi</h1>
          <p class="mb-4 px-3" style="color: #000000ff; font-size: 1.2rem;" data-aos="fade-up" data-aos-delay="300">
            Be a part of the movement. Join us online, follow our mission, and share the voice that matters.
          </p>
        </div>
       
        <!-- Social Icons -->
        <div class="d-flex icon-row" data-aos="zoom-in" data-aos-delay="400">
          <?php
          $social_links = [
            ['url' => 'https://www.facebook.com/voiceoftenkasi/', 'icon' => 'fa-brands fa-facebook-f', 'label' => 'Facebook'],
            ['url' => 'https://x.com/voiceofTenkasi', 'icon' => 'fa-brands fa-x-twitter', 'label' => 'Twitter (X)'],
            ['url' => 'https://www.youtube.com/@VoiceofTenkasi', 'icon' => 'fa-brands fa-youtube', 'label' => 'YouTube'],
            ['url' => 'https://wa.me/message/TCNBJTUSNA2YN1', 'icon' => 'fa-brands fa-whatsapp', 'label' => 'WhatsApp'],
            ['url' => 'https://www.instagram.com/voice_of_tamilnadu/', 'icon' => 'fa-brands fa-instagram', 'label' => 'Instagram'],
          ];

          foreach ($social_links as $index => $social): ?>
            <a href="<?= $social['url'] ?>" target="_blank" class="icon-circle" title="<?= $social['label'] ?>"
               data-aos="fade-up" data-aos-delay="<?= 500 + $index * 100 ?>">
              <i class="<?= $social['icon'] ?>"></i>
            </a>
          <?php endforeach; ?>
        </div>
      </div>

      <!-- Right Column -->
      <div class="col-md-6 text-center" data-aos="fade-left" data-aos-duration="1000">
        <img src="./assets/images/contact-removebg-preview.png" alt="Connect Illustration" style="max-height: 450px;">
      </div>
    </div>
  </div>
</section>



<?php include 'footer.php'; ?>
