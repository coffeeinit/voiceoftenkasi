<?php include 'header.php'; ?>
<?php include 'db.php'; // your PDO connection ?>

<div class="container py-5 text-center" data-aos="fade-down" >
  <div class="row justify-content-center" style=" padding-top: 50px;">
    <div class="col-lg-10">
      <h1 class="display-5 fw-bold text-primary mb-4">
        "Empowering Change, Inspiring Hope: Uniting Hearts for a Better Tomorrow"
      </h1>
      <p class="lead text-muted">
        Stay tuned for the groundbreaking developments in Tenkasi – where every initiative is a step towards a brighter future.
      </p>
    </div>
  </div>
</div>

<?php
$stmt = $conn->prepare("SELECT * FROM news ORDER BY created_at DESC");
$stmt->execute();
$newsItems = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<div class="container mb-5">
  <div class="row g-4">
    <?php foreach ($newsItems as $i => $event): ?>
      <div class="col-md-6 col-lg-4 d-flex">
        <div class="news-card shadow rounded p-4 bg-white w-100" data-aos="<?php echo $i % 2 === 0 ? 'fade-right' : 'fade-left'; ?>">
          <a href="<?php echo $event['image_url']; ?>" target="_blank">
<?php
  $image = !empty($event['image_url']) && @getimagesize($event['image_url']) 
    ? $event['image_url'] 
    : 'https://placehold.co/600x400';
?>
<img src="<?php echo $image; ?>" class="img-fluid news-image rounded mb-3" style="height: 250px; object-fit: cover; width: 100%;" alt="<?php echo htmlspecialchars($event['title']); ?>">
          </a>
          <h4 class="fw-bold"><?php echo htmlspecialchars($event['title']); ?></h4>
          <p class="text-muted mt-2"><?php echo htmlspecialchars($event['description']); ?></p>

          <?php if (!empty($event['read_more'])): ?>
            <a href="<?php echo $event['read_more']; ?>" class="btn btn-primary btn-sm me-2 mt-2" target="_blank">Read More</a>
          <?php endif; ?>
          <?php if (!empty($event['read_more_1'])): ?>
            <a href="<?php echo $event['read_more_1']; ?>" class="btn btn-outline-primary btn-sm me-2 mt-2" target="_blank">Tamiljanam</a>
          <?php endif; ?>
          <?php if (!empty($event['read_more_2'])): ?>
            <a href="<?php echo $event['read_more_2']; ?>" class="btn btn-outline-secondary btn-sm mt-2" target="_blank">Tamil365</a>
          <?php endif; ?>
        </div>
      </div>
    <?php endforeach; ?>
  </div>
</div>

<!-- AOS CSS -->
<link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">
<!-- AOS JS -->
<script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
<script>AOS.init();</script>

<?php include 'footer.php'; ?>
