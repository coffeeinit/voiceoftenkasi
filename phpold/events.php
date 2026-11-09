<?php include 'header.php'; ?>
<?php include 'db.php'; ?>

<?php
$today = date('Y-m-d');

// Fetch Live Events (today or future)
$live_stmt = $conn->prepare("SELECT * FROM events WHERE event_date >= ? ORDER BY event_date ASC");
$live_stmt->execute([$today]);
$live_events = $live_stmt->fetchAll(PDO::FETCH_ASSOC);

// Fetch Past Events (before today)
$past_stmt = $conn->prepare("SELECT * FROM events WHERE event_date < ? ORDER BY event_date DESC");
$past_stmt->execute([$today]);
$past_events = $past_stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<div class="container">
  <div class="row">
    <div class="col-12 text-center">
      <h1 class="text-center my-4">Event Gallery</h1>

      <!-- Nav Tabs -->
      <div class="d-flex justify-content-center">
        <ul class="nav nav-tabs" id="eventTabs" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="live-events-tab" data-bs-toggle="tab" href="#live-events" role="tab" aria-controls="live-events" aria-selected="true">Live Events</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="past-events-tab" data-bs-toggle="tab" href="#past-events" role="tab" aria-controls="past-events" aria-selected="false">Past Events</a>
          </li>
        </ul>
      </div>

      <!-- Tab Content -->
      <div class="tab-content" id="eventTabsContent">

        <!-- LIVE EVENTS -->
        <div class="tab-pane fade show active" id="live-events" role="tabpanel" aria-labelledby="live-events-tab">
          <div class="row py-4">
            <?php if (count($live_events) > 0): ?>
              <?php foreach ($live_events as $event): ?>
                <?php
                  $imagePath = !empty($event['image']) 
                    ? "./assets/images/events/" . $event['image'] 
                    : "https://placehold.co/600x400";
                ?>
                <div class="col-md-4 mb-4">
                  <div class="card">
                    <a href="<?= htmlspecialchars($event['link']) ?>" target="_blank">
                      <img src="<?= $imagePath ?>" class="card-img-top" alt="<?= htmlspecialchars($event['title']) ?>">
                    </a>
                    <div class="card-body">
                      <h5 class="card-title text-primary"><?= htmlspecialchars($event['title']) ?></h5>
                      <p class="card-text"><?= htmlspecialchars($event['details']) ?></p>
                      <?php if (!empty($event['button'])): ?>
                        <a href="<?= htmlspecialchars($event['link']) ?>" class="btn btn-danger"><?= htmlspecialchars($event['button']) ?></a>
                      <?php endif; ?>
                    </div>
                  </div>
                </div>
              <?php endforeach; ?>
            <?php else: ?>
              <p class="text-muted">No upcoming events.</p>
            <?php endif; ?>
          </div>
        </div>

        <!-- PAST EVENTS -->
        <div class="tab-pane fade" id="past-events" role="tabpanel" aria-labelledby="past-events-tab">
          <div class="row py-4">
            <?php if (count($past_events) > 0): ?>
              <?php foreach ($past_events as $event): ?>
                <?php
                  $imagePath = !empty($event['image']) 
                    ? "./assets/images/events/" . $event['image'] 
                    : "https://placehold.co/600x400";
                ?>
                <div class="col-md-4 mb-4">
                  <div class="card">
                    <a href="<?= htmlspecialchars($event['link']) ?>" target="_blank">
                      <img src="<?= $imagePath ?>" class="card-img-top" alt="<?= htmlspecialchars($event['title']) ?>">
                    </a>
                    <div class="card-body">
                      <h5 class="card-title text-primary"><?= htmlspecialchars($event['title']) ?></h5>
                      <p class="card-text"><?= htmlspecialchars($event['details']) ?></p>
                      <?php if (!empty($event['button'])): ?>
                        <a href="<?= htmlspecialchars($event['link']) ?>" class="btn btn-danger"><?= htmlspecialchars($event['button']) ?></a>
                      <?php endif; ?>
                    </div>
                  </div>
                </div>
              <?php endforeach; ?>
            <?php else: ?>
              <p class="text-muted">No past events found.</p>
            <?php endif; ?>
          </div>
        </div>

      </div>

      <hr class="mx-auto my-3" style="width: 0px; height: 50px; background-color:rgba(25, 135, 84, 0); opacity: 1;">
    </div>
  </div>
</div>

<?php include 'footer.php'; ?>
