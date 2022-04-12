<main>
  <div class="container">
    <?php
    foreach ($dischi as $disk){?>
      <div class="card">
        <img src="<?= $disk['poster']?>" alt="">
        <h2><?= $disk['title']?></h2>
        <p><?= $disk['author']?></p>
        <p><?= $disk['year']?></p>
      </div>
    <?php } ?>
  </div>
</main>