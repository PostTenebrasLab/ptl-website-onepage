<!doctype html>

<html lang="fr">
<head>
	<title>PTL - Post Tenebras Lab - Geneva Hackerspace</title>  
	
	<link rel="shortcut icon" type="image/ico" href="favicon.ico"/>

	<meta charset="UTF-8">
	<meta name="description" content="PTL - Post Tenebras Lab est un endroit où amateurs et professionnels peuvent se rencontrer, échanger et collaborer.">
	<meta name="keywords" content="Hackerspace, Genève, Geneva, informatique, électronique, mécanique">
	<meta name="author" content="G3Dev Sàrl">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="stylesheet" href="css/bootstrap.css" type="text/css" media="screen" />
	<link rel="stylesheet" href="css/font-awesome.css" type="text/css" media="screen" />
	<link rel="stylesheet" href="css/blueimp-gallery.min.css" type="text/css" media="screen" />
	<link rel="stylesheet" href="scss/style.css" type="text/css" media="screen" />
	<script src="js/jquery-1.11.3.min.js"></script>
	<script src="js/masonry-eq.js"></script>
	<script src="js/jquery.blueimp-gallery.min.js"></script>
	<script src="js/main.js"></script>
</head> 

<body>
	
	<nav id='fixed-desktop-navigation'>
		<?php include 'nav.php' ?>
	</nav>

	<div id="global-container">
		
		<header>
			<nav id='desktop-navigation'>
				<div id="logo">
				 	<img src="http://www.posttenebraslab.ch/status/img/logo.png">
				</div>	
				<?php include 'nav.php' ?>
			</nav>
		</header>

			<div id='content-container'>
				<?php include 'content.php' ?>				
			</div>

		<?php include 'footer.php' ?>

	</div>
</body>	