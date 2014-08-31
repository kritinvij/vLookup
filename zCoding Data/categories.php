<?php
include("common.php");
top();
$city = $_GET["loc"];
?>
			<div id="content">
				<div id="choose-city">
					<!--<h2> Choose your category </h2>-->
					<br />
					<br />
					<br />
					<?php
						$categ = file("categories.txt", FILE_IGNORE_NEW_LINES);
						foreach ($categ as $cat) {
							?>
							<a href="events.php?loc=<?= $city?>&cat=<?=$cat?>"><span class="buttons"><?= $cat ?></span></a>
						<?php
						}
					?>
				</div>
			</div>
			
<?php
bottom();
?>