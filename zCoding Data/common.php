<?php
	function top() {
	?>
	
	<!DOCTYPE html>
		<html>
			<head>
				<title> vLookup </title>
				<link href="home.css" type="text/css" rel="stylesheet" />
			</head>
			<body>		
				<div id="main-page">
					<div id="banner-top">
						<img id="vlu" src="vlookup.jpg" alt="VLOOKUP.COM" />
						<!--
							<ul>
								<li><a href="mywebsite.html" >About Us</a></li>
								<li><a href="cities.php" >Cities</a></li>
								<li><a href="contactus.html" >Contact Us</a></li>
								<li id="lastli"><a href="team.html" >Who We Are</a></li>
							</ul>
						-->
					</div>
	<?php
	}
	
	function bottom() {
	?>
					<div id="banner-bot">
						<div>
							<a href=""><span class="barheads">About Us</span></a> <br />
							<a href=""><span class="barheads">Contact Us</span></a> <br />
							<a href=""><span class="barheads">Mobile Apps</span></a>
						</div>
						<div> 
							<span class="barheads">Email us at:</span> <br />
							<a href=""><img id="mailus" src="mail.png" /> &lt;   &gt; </a>
						</div>
						<div>
							<span class="barheads">Developers:</span> <br />
							<a href="http://in.linkedin.com/pub/kritin-vij/2b/176/ab0/">Kritin Vij</a> <br /> 
							<a href="http://in.linkedin.com/pub/rohit-kumar/16/189/b92">Rohit Kumar</a> <br />
						</div>
						<span id="copyright">
								&copy; All Rights Reserved. 
								<!--fb image taken from iconfinder.com.
								mail image taken from wikimedia.com-->

						</span>
					</div>
				</div>
			</body>
		</html>
	<?php
}
?>