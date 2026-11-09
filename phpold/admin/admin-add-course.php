<?php include '../header.php'; ?>
<?php include '../db.php'; ?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $category = $_POST['category'];
  $title = $_POST['title'];
  $duration = $_POST['duration'];
  $students = $_POST['students'];
  $rating = $_POST['rating'];
  $description = $_POST['description'];
  $link = $_POST['link'];

  // Handle image upload
  $imageName = $_FILES['img']['name'];
  $imageTmp = $_FILES['img']['tmp_name'];
  $uploadDir = "assets/images/";
  $uploadPath = $uploadDir . basename($imageName);

  if (move_uploaded_file($imageTmp, $uploadPath)) {
    try {
      $stmt = $conn->prepare("INSERT INTO courses (category, title, img, duration, students, rating, description, link) 
                              VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
      $stmt->execute([$category, $title, $imageName, $duration, $students, $rating, $description, $link]);
      $success = "Course added successfully!";
    } catch (PDOException $e) {
      $error = "Error: " . $e->getMessage();
    }
  } else {
    $error = "Failed to upload image.";
  }
}
?>

<div class="container py-5">
  <h2 class="mb-4 text-center">Add New Free Course</h2>

  <?php if (isset($success)): ?>
    <div class="alert alert-success"><?= $success ?></div>
  <?php elseif (isset($error)): ?>
    <div class="alert alert-danger"><?= $error ?></div>
  <?php endif; ?>

  <form method="POST" enctype="multipart/form-data">
    <div class="row mb-3">
      <div class="col-md-6">
        <label class="form-label">Category</label>
        <input type="text" name="category" class="form-control" required>
      </div>
      <div class="col-md-6">
        <label class="form-label">Course Title</label>
        <input type="text" name="title" class="form-control" required>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <label class="form-label">Course Image</label>
        <input type="file" name="img" class="form-control" accept="image/*" required>
      </div>
      <div class="col-md-3">
        <label class="form-label">Duration</label>
        <input type="text" name="duration" class="form-control" required>
      </div>
      <div class="col-md-3">
        <label class="form-label">Students Enrolled</label>
        <input type="text" name="students" class="form-control" required>
      </div>
    </div>

    <div class="mb-3">
      <label class="form-label">Rating (e.g., 4.5)</label>
      <input type="number" step="0.1" name="rating" class="form-control" required min="0" max="5">
    </div>

    <div class="mb-3">
      <label class="form-label">Description</label>
      <textarea name="description" rows="4" class="form-control" required></textarea>
    </div>

    <div class="mb-3">
      <label class="form-label">Course Link</label>
      <input type="url" name="link" class="form-control" required>
    </div>

    <button type="submit" class="btn btn-success w-100">Add Course</button>
  </form>
</div>
<?php include '../footer.php'; ?>
