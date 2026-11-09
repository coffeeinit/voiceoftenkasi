<!-- HEADER -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Voice of Tenkasi</title>

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />

  <!-- Icons & Fonts -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />

  <!-- Custom CSS -->
  <link rel="stylesheet" href="assets/css/style.css?v=<?= time(); ?>" />
  <link rel="stylesheet" href="contact.css" />

  <!-- Swiper CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />

  <!-- Animations -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
  <link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css" />

  <style>
    body {
      font-family: 'Poppins', sans-serif;
    }

    .navbar-brand img {
      max-height: 80px;
      width: auto;
      transition: transform 0.3s ease;
    }

    .navbar-brand img:hover {
      transform: scale(1.05);
    }

    @media (max-width: 767.98px) {
      .navbar-brand img {
        max-height: 800px;
      }

      .navbar-nav .nav-item {
        padding: 0.3rem 0;
      }

      .navbar-nav .btn {
        width: 100%;
        margin-top: 0.5rem;
      }
    }

    .nav-link.active {
      font-weight: 600;
      color: #0d6efd !important;
    }

    .navbar-nav .dropdown-menu {
      text-align: left;
    }

    .btn-primary {
      background-color: #007bff;
      border-color: #007bff;
    }
  </style>
</head>

<body>
  <?php $currentPage = basename($_SERVER['PHP_SELF']); ?>

  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
    <div class="container">
      <!-- Logo -->
      <a class="navbar-brand" href="./">
        <img src="./assets/images/logo.webp" alt="Voice of Tenkasi Logo">
      </a>

      <!-- Toggler -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#votNavbar" aria-controls="votNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menu -->
      <div class="collapse navbar-collapse" id="votNavbar">
        <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-3 text-center text-lg-start">

          <li class="nav-item">
            <a class="nav-link <?= ($currentPage == 'index.php') ? 'active' : '' ?>" href="./">Home</a>
          </li>

          <!-- Explore Dropdown -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle <?= in_array($currentPage, ['about.php','whatwedo.php','join.php']) ? 'active' : '' ?>" href="#" id="exploreDropdown" role="button" data-bs-toggle="dropdown">
              Explore
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="about.php">About Us</a></li>
              <li><a class="dropdown-item" href="whatwedo.php">What We Do</a></li>
              <li><a class="dropdown-item" href="join.php">Join Us</a></li>
            </ul>
          </li>

          <!-- Programs Dropdown -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle <?= in_array($currentPage, ['events.php','opportunities.php','knowledge.php']) ? 'active' : '' ?>" href="#" id="programsDropdown" role="button" data-bs-toggle="dropdown">
              Programs
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="events.php">Events</a></li>
              <li><a class="dropdown-item" href="opportunities.php">Opportunities</a></li>
              <li><a class="dropdown-item" href="knowledge.php">Courses</a></li>
            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link <?= ($currentPage == 'news.php') ? 'active' : '' ?>" href="news.php">News</a>
          </li>

          <li class="nav-item">
            <a class="nav-link <?= ($currentPage == 'contact.php') ? 'active' : '' ?>" href="contact.php">Contact</a>
          </li>

          <li class="nav-item">
            <a class="btn btn-primary px-3 ms-lg-2" href="donate.php">Donate</a>
          </li>

        </ul>
      </div>
    </div>
  </nav>

  <!-- Scripts -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
  <script src="https://unpkg.com/scrollreveal"></script>
  <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
  <script>
    AOS.init();
  </script>
</body>
</html>
