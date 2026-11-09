<?php include 'header.php'; ?>
<?php include 'db.php'; // Your PDO connection ?>

<div class="container my-5" style="padding-top: 50px;">
  <div class="row align-items-center">
    <!-- Left Column: Image -->
    <div class="col-lg-6 mb-4 mb-lg-0 text-center animate__animated animate__fadeIn">
      <img 
        src="https://i.pinimg.com/736x/58/d3/db/58d3db724187b26fdcb63ccb9f2f8b2b.jpg" 
        alt="Business teamwork" 
        title="Business teamwork"
        class="img-fluid rounded shadow"
        style="max-height: 450px; object-fit: cover;"
        loading="lazy">
    </div>

    <!-- Right Column: Text -->
    <div class="col-lg-6" style="padding-left: 20px;">
      <h5 class="mb-2 animate__animated animate__fadeIn text-center" style="font-size: 2rem; font-family: 'Montserrat', sans-serif; color: #068faf;">
        Empowering Tenkasi
      </h5>
      <h2 class="display-5 fw-bold mb-3 animate__animated animate__fadeIn" style="padding-left: 20px;">
        Shaping a Tech Hub
      </h2>
      <p class="text-start text-center animate__animated animate__fadeIn">
        Join us on our journey to establish Tenkasi as a global technological powerhouse. 
        Together, let’s create a positive change that resonates far beyond the borders of Tenkasi.
      </p>
      <p class="text-start text-center animate__animated animate__fadeIn">
        Embark on a transformative voyage with us as we endeavor to position Tenkasi as a prominent 
        technological hub. Join hands in crafting a meaningful impact that transcends geographical boundaries. 
        Together, let’s usher in a wave of positive change that reverberates globally.
      </p>
    </div>
  </div>
</div>

<?php
try {
  $stmt = $conn->prepare("SELECT * FROM jobs ORDER BY created_at DESC");
  $stmt->execute();
  $jobs = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
  echo "<div class='container'><p class='text-danger'>Error loading jobs: " . $e->getMessage() . "</p></div>";
}
?>

<div class="container py-5">
  <h2 class="text-center fw-bold mb-4">Job Openings</h2>
  <div class="row">
    <?php foreach ($jobs as $job): ?>
      <div class="col-md-4 p-3">
        <div class="card text-center shadow-sm p-4 h-100">
          <?php if (!empty($job['logo'])): ?>
            <div class="mb-3">
              <img src="<?= htmlspecialchars($job['logo']); ?>" alt="<?= htmlspecialchars($job['title']); ?> logo"
                   class="img-fluid rounded-circle" style="width: 100px; height: 100px; object-fit: cover;">
            </div>
          <?php endif; ?>

          <h5 class="card-title"><?= htmlspecialchars($job['title']); ?></h5>

          <!-- Modal Trigger -->
          <button type="button" class="btn btn-outline-primary btn-sm mt-3" data-bs-toggle="modal" data-bs-target="#jobModal<?= $job['id']; ?>">
            View Details
          </button>
        </div>
      </div>

      <!-- Modal for Job -->
      <div class="modal fade" id="jobModal<?= $job['id']; ?>" tabindex="-1" aria-labelledby="modalLabel<?= $job['id']; ?>" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalLabel<?= $job['id']; ?>"><?= htmlspecialchars($job['title']); ?></h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-start small">
              <ul class="list-unstyled">
                <li><strong>📍 Location:</strong> <?= htmlspecialchars($job['location']); ?></li>
                <li><strong>💼 Experience:</strong> <?= htmlspecialchars($job['experience']); ?></li>
                <li><strong>🕹️ Mode:</strong> <?= htmlspecialchars($job['mode']); ?></li>
                <li><strong>📃 Type:</strong> <?= htmlspecialchars($job['employment_type']); ?></li>
              </ul>
              <p><strong>✅ Must Have:</strong> <?= htmlspecialchars($job['must_have']); ?></p>
              <p><strong>🛠️ Duties:</strong> <?= htmlspecialchars($job['duties']); ?></p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    <?php endforeach; ?>
  </div>
</div>



<?php include 'footer.php'; ?>
