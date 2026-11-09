<?php include 'header.php'; ?>
<?php
$donate_heading = "You can make a difference...!!";
$donate_subtext = "Every contribution, big or small, brings us one step closer to our goal. Together, we can build a brighter and healthier future.";
$donate_button_text = "💖 Donate / Support Us";
$donate_link = "https://razorpay.com/payment-button/pl_OgOcZstdd6PrOj/view/?utm_source=payment_button&utm_medium=button&utm_campaign=payment_button";
?>

<section style="position: relative; padding: 80px 0; overflow: hidden; height: 500px; color: white; padding-top: 150px;">
  
  <!-- Background Image Layer -->
  <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;
              background: url('https://i.pinimg.com/736x/96/c8/a9/96c8a937bbd5b6faf44598a0ae79e8e5.jpg') center center / cover no-repeat;
              z-index: 0; opacity: 1; ">
  </div>

  <!-- Blue Transparent Overlay Layer -->
  <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;
              background-color: rgba(0, 47, 61, 0.7); z-index: 1;">
  </div>

  <!-- Content Layer -->
  <div class="container" style="position: relative; z-index: 2;">
    <div class="row justify-content-center">
      <div class="col-lg-10 text-center">
        <h1 class="animate__animated animate__fadeInUp" style="font-size: 3rem; font-weight: 700; margin-bottom: 20px; color:white;"><?= $donate_heading ?></h1>

        <p style="font-size: 1.25rem; margin-bottom: 30px;">
          <?= $donate_subtext ?>
        </p>

        <a href="<?= $donate_link ?>"
           target="_blank"
           style="display: inline-block; background: linear-gradient(135deg, #0d6efd, #6610f2); color: white;
                  padding: 14px 30px; font-size: 16px; font-weight: bold; border-radius: 30px;
                  text-decoration: none; transition: background 0.3s ease, transform 0.2s ease;
                  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);">
          <?= $donate_button_text ?>
        </a>
      </div>
    </div>
  </div>
</section>

<?php include 'footer.php'; ?>
