
<!-- Footer -->
<footer class="pt-5 text-dark" style="background-color: #d7edf7; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
    <div class="container">
        <div class="row">
            <!-- Logo & Social -->
            <div class="col-md-4 mb-4 text-center text-md-start">
                <img src="./assets/images/logo.webp" alt="Voice of Tenkasi Logo" width="160" class="img-fluid mb-3">
                
                <!-- Social Icons -->
                <div class="d-flex justify-content-center justify-content-md-start gap-3 social-icons mt-3">
                    <a href="#" class="text-dark fs-5"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="text-dark fs-5"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="text-dark fs-5"><i class="fab fa-x-twitter"></i></a>
                    <a href="#" class="text-dark fs-5"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#" class="text-dark fs-5"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
            
            <!-- Quick Links -->
            <div class="col-md-4 mb-4">
                <h5 class="fw-bold mb-3 text-dark">Quick Links</h5>
                <ul class="list-unstyled">
                    <li class="mb-2"><i class="fas fa-angle-right me-2 text-dark"></i><a href="join.php" class="text-dark text-decoration-none">Get Involved</a></li>
                    <li class="mb-2"><i class="fas fa-angle-right me-2 text-primary"></i><a href="news.php" class="text-dark text-decoration-none">News and Press</a></li>
                    <li class="mb-2"><i class="fas fa-angle-right me-2 text-primary"></i><a href="contact.php" class="text-dark text-decoration-none">Contact</a></li>
                    <li class="mb-2"><i class="fas fa-angle-right me-2 text-primary"></i><a href="privacy-policy.php" class="text-dark text-decoration-none">Privacy Policy</a></li>
                </ul>
            </div>
            
            <!-- Contact Info -->
            <div class="col-md-4 mb-4">
                <h5 class="fw-bold mb-3 text-dark">Contact</h5>
                <p class="mb-2 text-dark">
                    <i class="fas fa-map-marker-alt me-2 text-primary"></i>
                    6/281A, Bharathi Thenvadal St, Viswanathaperi, Sivagiri Tk, Tenkasi Dt, 627757
                </p>
                <p class="mb-2 text-dark">
                    <i class="fas fa-phone me-2 text-primary"></i>
                    87782 00402
                </p>
                <p class="mb-0 text-dark">
                    <i class="fas fa-envelope me-2 text-primary"></i>
                    info@voiceoftenkasi.org
                </p>
            </div>
        </div>
    </div>
    
    <!-- Footer Bottom -->
    <div class="text-center bg-dark text-light py-2 mt-3">
        <small>&copy; 2025 Voice of Tenkasi Foundation. All rights reserved.</small>
    </div>
</footer>

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<!-- AOS JS -->
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

<script>
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('bg-dark');
            navbar.classList.remove('bg-primary');
        } else {
            navbar.classList.add('bg-primary');
            navbar.classList.remove('bg-dark');
        }
    });
</script>

</body>
</html>