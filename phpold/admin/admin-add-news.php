<?php include 'db.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Add News | Voice of Tenkasi</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
  <div class="container py-5">
    <h2 class="mb-4">Add News Item</h2>

    <?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $title = $_POST['title'];
        $description = $_POST['description'];
        $img = $_POST['img'];
        $read_more = $_POST['read_more'] ?? null;
        $read_more_1 = $_POST['read_more_1'] ?? null;
        $read_more_2 = $_POST['read_more_2'] ?? null;

        $sql = "INSERT INTO news (title, description, image_url, read_more, read_more_1, read_more_2)
                VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->execute([$title, $description, $img, $read_more, $read_more_1, $read_more_2]);

        echo '<div class="alert alert-success">News added successfully!</div>';
    }
    ?>

    <form method="POST" class="row g-3">
      <div class="col-md-12">
        <label class="form-label">Title (can be in Tamil or English)</label>
        <input type="text" name="title" class="form-control" required>
      </div>
      
      <div class="col-md-12">
        <label class="form-label">News Description</label>
        <textarea name="description" class="form-control" rows="5" required></textarea>
      </div>

      <div class="col-md-12">
        <label class="form-label">Image URL</label>
        <input type="text" name="img" class="form-control" required>
      </div>

      <div class="col-md-12">
        <label class="form-label">Primary Read More Link</label>
        <input type="text" name="read_more" class="form-control">
      </div>

      <div class="col-md-6">
        <label class="form-label">Read More Link 1 (Optional)</label>
        <input type="text" name="read_more_1" class="form-control">
      </div>

      <div class="col-md-6">
        <label class="form-label">Read More Link 2 (Optional)</label>
        <input type="text" name="read_more_2" class="form-control">
      </div>

      <div class="col-12">
        <button type="submit" class="btn btn-primary">Submit News</button>
      </div>
    </form>
  </div>
</body>
</html>
