<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Music Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Navigation Bar -->
    <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#music">Music</a></li>
                <li><a href="#artists">Artists</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <!-- Homepage Section -->
    <section id="home" class="section">
        <h1>Welcome to My Music Website!</h1>
        <p>Enjoy the latest tunes and discover new artists!</p>
    </section>

    <!-- Music Section -->
    <section id="music" class="section">
        <h2>Listen to Our Featured Tracks</h2>
        <audio controls>
            <source src="sample-music.mp3" type="audio/mp3">
            Your browser does not support the audio element.
        </audio>
    </section>

    <!-- Featured Artists Section -->
    <section id="artists" class="section">
        <h2>Featured Artists</h2>
        <div class="artist-card">
            <img src="artist1.jpg" alt="Artist 1">
            <h3>The Weeknd</h3>
            <p>Genre: Pop alternative R&B R&B synth-pop new wave dance</p>
        </div>
        <div class="artist-card">
            <img src="artist2.jpg" alt="Artist 2">
            <h3>Billie Eilish</h3>
            <p>Genre: Pop alt-pop electropop pop rock</p>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section">
        <h2>Contact Us</h2>
        <p>Email us at <a href="mailto:contact@musicwebsite.com">contact@musicwebsite.com</a></p>
    </section>

    <footer>
        <p>&copy; 2025 My Music Website. All Rights Reserved.</p>
    </footer>

    <script src="scripts.js"></script>
</body>
</html>
