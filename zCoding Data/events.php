<?php
include("common.php");
top();
$city = $_GET["loc"];
$cat = $_GET["cat"];
?>
			<div id="content">
				<div id="choose-city">
					<!--<h2> Choose your category </h2>-->
					<br />
					<br />
					<br />
					<?php
						$events = file("$city/$cat.txt", FILE_IGNORE_NEW_LINES);
						foreach ($events as $event) {
							?>
							<span><?= $event ?></span>
						<?php
						}
					?>
				</div>
			</div>
			
<?php
bottom();
?>