<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Profile | My Portfolio</title>
<link href="css/style.css" rel="stylesheet" type="text/css">
<link href="css/bootstrap-3.4.1.css" rel="stylesheet" type="text/css">
    <link rel="icon" type="image/png" href="./img/kao.png">
</head>
<body>

<!-- 共通ヘッダー -->
<header>
    <a href="suzzy.html" class="logo">PORTFOLIO</a>
  <nav>
    <ul>
      <li class="dropdown"> <a href="work.html" class="nav-main">Work</a>
        <ul class="dropdown-menu">
          <li><a href="work.html?cat=school">School</a></li>
          <li><a href="work.html?cat=home">Home</a></li>
          <li><a href="work.html?cat=activity">Activity</a></li>
        </ul>
      </li>
      <li><a href="profile.html" class="nav-main active">Profile</a></li>
      <li><a href="buddy.html" class="nav-main">Buddy</a></li>
    </ul>
  </nav>
</header>
    
<main style="padding-top: 80px;">
  <h1 class="section-title">Profile</h1>
  
  <div class="profile-container">
  <!-- 1. 写真（上が写真） -->
   <img src="./img/muroisuzu.jpg" alt="プロフィール写真" class="profile-img">
  <!-- 2. 文章（下が文章） -->
  <div class="profile-text">
    <h2>Muroi Suzu</h2>
     <p>長崎県立大学　情報システム学部　情報システム学科</p>
      <p>顧客の潜在的なニーズに寄り添い、期待を超える提案を形にしていきます</p>
  </div>
</div>
   <!--- <div class="profile-container">
      <img src="./img/muroisuzu.jpg" alt="プロフィール写真" class="profile-img">
      
      <div class="profile-text">
          <h2>Muroi Suzu</h2>
      <p>長崎県立大学　情報システム学部　情報システム学科</p>
      <p>顧客の潜在的なニーズに寄り添い、期待を超える提案を形にしていきます</p>
    </div>
  </div>-->
  <!-- ★重要: ここで profile-container をしっかり閉じます --> 
    
  <!-- ② 自己紹介エリア（Skill・資格と同じカード形式へ変更） -->
  <section class="skill" id="skill">
    <div class="inner">
      <h2 class="title">About me</h2>
      <div class="skill-list"> 

        <!-- 1. 強み・ポリシー -->
        <div class="skill-item">
          <div class="skill-body">
            <h3 class="skill-name1">経験したサークル・課外活動</h3>
　　　　　　　　<ul>
              <li class="skill-text">学園祭実行委員会</li>
              <li class="skill-text">学生広報スタッフ</li>
            <li class="skill-text">バドミントンサークル(1年)</li>
              <li class="skill-text">映画研究サークルSeaCaT(2年)</li>
            
            </ul>    
          </div>
        </div>

        <!-- 2. 趣味・関心（箇条書き形式） -->
        <div class="skill-item">
          <div class="skill-body">
            <h3 class="skill-name1">趣味・好きなこと</h3>
              <p class="skill-text">
              旅行・お出かけ<br>
            （新しい場所やデザインに触れること)
            </p>
          </div>
        </div>

        <!-- 3. 現在の取り組み -->
        <div class="skill-item">
          <div class="skill-body">
            <h3 class="skill-name1">友人からの私</h3>
            <p class="skill-text">
             責任感が強く、最後まで粘り強く行動する
            </p>
          </div>
        </div>
          
                  <!-- 2. 趣味・関心（箇条書き形式） -->
        <div class="skill-item">
          <div class="skill-body">
            <h3 class="skill-name1">最近感動した場所</h3>
              <p class="skill-text">
              長野県・渋温泉
            </p>
          </div>
        </div>
          
                  <!-- 2. 趣味・関心（箇条書き形式） -->
        <div class="skill-item">
          <div class="skill-body">
            <h3 class="skill-name1">最近見た映画</h3>
              <p class="skill-text">
              トイストーリー5
            </p>
          </div>
        </div>
          
                  <!-- 2. 趣味・関心（箇条書き形式） -->
        <div class="skill-item">
          <div class="skill-body">
            <h3 class="skill-name1">趣味</h3>
              <p class="skill-text">
              ランニング・ウォーキング
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
  
  <!-- ▼▼▼ ここからSkillコードを追加 ▼▼▼ --> 
  <!-- ★重要: class="section" を消して、class="skill" だけにしました -->
  <section class="skill" id="skill">
    <div class="inner">
      <h2 class="title">Skill</h2>
      <div class="skill-list"> 
        
        <!-- 1 -->
        <div class="skill-item">
          <div class="skill-body">
            <h3 class="skill-name">HTML Living Standard</h3>
            <p class="skill-text">すべてのタグの意味を理解できます。</p>
          </div>
        </div>
        
        <!-- 2 -->
        <div class="skill-item">
          <div class="skill-body">
            <h3 class="skill-name">CSS3</h3>
            <p class="skill-text">一般的なホームページのデザインの実装ができます。</p>
          </div>
        </div>
        
        <!-- 3 -->
        <div class="skill-item">
          <div class="skill-body">
            <h3 class="skill-name">Illustrator</h3>
            <p class="skill-text">一般的な操作が出来ます。</p>
          </div>
        </div>
        <div class="skill-item">
          <div class="skill-body">
            <h3 class="skill-name">その他</h3>
            <ul>
              <li class="skill-text">C++</li>
              <li class="skill-text">Photoshop</li>
              <li class="skill-text">Premiere Pro</li>
              <li class="skill-text">After Effects</li>
              <li class="skill-text">Canva</li>
                <li class="skill-text">Unity</li>
            </ul>
          </div>
        </div>
        
        <!-- OS -->
        <div class="skill-item">
          <div class="skill-body">
            <h3 class="skill-name">使用OS</h3>
            <p class="skill-text">MacOS、Windowsどちらも使用可能です。</p>
          </div>
        </div>
        
        <!-- 資格 -->
        <div class="skill-item">
          <div class="skill-body">
            <h3 class="skill-name">資格</h3>
            <ul>
              <li class="skill-text">ITパスポート試験 合格</li>
              <li class="skill-text">情報セキュリティマネジメント 合格</li>
              <li class="skill-text">色彩検定2級 合格</li>
              <li class="skill-text">CGSRTS WEBデザイナーエキスパート 勉強中</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ▲▲▲ ここまで ▲▲▲ --> 
</main>
    
    <footer class="custom-footer">
  <div class="footer-container">
    <h2 class="contact-title">CONTACT</h2>
    
    <!-- メールアドレス部分 -->
    <div class="email-box">
      <a href="mailto:BS124032@sun.ac.jp">BS124032@sun.ac.jp</a>
    </div>
    
    <!-- リンクボタン部分 -->
    <div class="footer-buttons">
      <a href="work.html" class="f-btn">Work</a>
      <a href="profile.html" class="f-btn">Profile</a>
      <a href="buddy.html" class="f-btn">Buddy</a>
    </div>
    
    <!-- コピーライトと装飾の丸 -->
    <p class="copyright">&copy; 2026 Muroi Suzu. All Rights Reserved.</p>
  </div>
</footer>
<!-- ▲ ここまで ▲ -->
    
<script src="js/jquery-3.7.1.min.js"></script>
<script src="js/bootstrap-3.4.1.js"></script>
<script src="js/script.js"></script>
</body>
</body>
</html>
