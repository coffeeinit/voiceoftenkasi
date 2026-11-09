<?php include 'header.php'; ?>
<?php include 'db.php'; ?>

<!-- Bootstrap Icons CDN (Required for star icons) -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet">

<section class="py-5 bg-white">
  <div class="container">
    <h2 class="text-center fw-bold mb-5">Free Courses</h2>
    <div class="row">
      <?php
        try {
          $stmt = $conn->query("SELECT * FROM courses ORDER BY id DESC");
          while ($course = $stmt->fetch()):
      ?>
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm border-0">
<?php
  $imgPath = !empty($course['img']) && file_exists("assets/images/" . $course['img'])
    ? "assets/images/" . $course['img']
    : "https://placehold.co/600x400";
?>
<img src="<?= $imgPath ?>" alt="<?= htmlspecialchars($course['title']) ?>" class="card-img-top" style="height: 220px; object-fit: cover;">

          <div class="card-body">
            <h5 class="card-title"><?= htmlspecialchars($course['title']) ?></h5>
            <p class="card-text"><?= nl2br(htmlspecialchars($course['description'])) ?></p>

            <!-- Students -->
            <p><strong>Students:</strong> <?= number_format((int)$course['students']) ?></p>

            <!-- Rating with star icons -->
            <p><strong>Rating:</strong>
              <?php
                $rating = floatval($course['rating']);
                $fullStars = floor($rating);
                $halfStar = ($rating - $fullStars) >= 0.5;

                for ($i = 0; $i < $fullStars; $i++) {
                  echo '<i class="bi bi-star-fill text-warning"></i>';
                }
                if ($halfStar) {
                  echo '<i class="bi bi-star-half text-warning"></i>';
                }
              ?>
              <span class="ms-2">(<?= htmlspecialchars($course['rating']) ?> / 5)</span>
            </p>

            <a href="<?= htmlspecialchars($course['link']) ?>" target="_blank" class="btn btn-primary w-100">Enroll Now</a>
          </div>
        </div>
      </div>
      <?php
          endwhile;
        } catch (PDOException $e) {
          echo "<div class='col-12'><p class='text-danger'>Error loading courses: " . $e->getMessage() . "</p></div>";
        }
      ?>
    </div>
  </div>
</section>

<?php include 'footer.php'; ?>
