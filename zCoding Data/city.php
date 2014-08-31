<?php
include("common.php");
top();
?>
			<div id="content">
				<div id="share">
					<script>
						function fbs_click() {
							u=location.href;t=document.title;
							window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'&t='+encodeURIComponent(t),'sharer','toolbar=0,status=0,width=626,height=436');
							return false;
						}
					</script>
					<a rel="nofollow" href="http://www.facebook.com/share.php?u=<;url>" onclick="return fbs_click()" target="_blank" class="fb_share_link"><img class="fbtw-share" src="fb.png" /></a> <br />
					
					<a href="https://twitter.com/share?url=https://webster.cs.washington.edu/kritinv/labs/lab9/yoyo/city.php" target="_blank"><img class="fbtw-share" src="twitter.jpg" /></a>
				</div>
				<div id="choose-city">
					<!--<h2> Choose your city </h2>-->
					<br />
					<br />
					<br />
					<?php
						$cities = file("cities.txt", FILE_IGNORE_NEW_LINES);
						foreach ($cities as $city) {
							?>
							<a href="categories.php?loc=<?= $city?>"><span class="buttons"><?= $city ?></span></a>
						<?php
						}
					?>
				</div>
			</div>
			
<?php
bottom();
?>