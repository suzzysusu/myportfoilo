document.addEventListener("DOMContentLoaded", () => {
  
  // ==========================================
  // 1. マウスに追従するパララックスアニメーション
  // ==========================================
  document.addEventListener("mousemove", function(e) {
    const characters = document.querySelectorAll('.js-parallax');
    if (characters.length > 0) {
      const x = (window.innerWidth - e.pageX) / 100;
      const y = (window.innerHeight - e.pageY) / 100;

      characters.forEach(function(char) {
        const speed = char.getAttribute('data-speed');
        char.style.left = (x * speed) + "px";
        char.style.top = (y * speed) + "px";
      });
    }
  });

  // ==========================================
  // 2. Workページのカテゴリ絞り込み
  // ==========================================
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat'); 

  if (cat) {
    const display = document.getElementById('filter-display');
    const workCards = document.querySelectorAll('.work-card');
    
    if (display && workCards.length > 0) {
      const catName = cat.charAt(0).toUpperCase() + cat.slice(1);
      display.innerText = `Category: ${catName}`;

      workCards.forEach(card => {
        if (card.classList.contains(`item-${cat}`)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }
  }

  // ==========================================
  // 3. 行き過ぎて戻る＆驚くアニメーション（トップのキャラクター用）
  // ==========================================
  const animatedCharacters = document.querySelectorAll(".character");

  if (animatedCharacters.length > 0) {
    animatedCharacters.forEach((char, index) => {
      char.style.transformOrigin = "bottom center";

      const keyframes = [
        { transform: "translateX(-100vw) scale(1)", offset: 0 },
        { transform: "translateX(80px) scale(1)", offset: 0.6 },
        { transform: "translateX(80px) scale(0.85, 1.2)", offset: 0.65 },
        { transform: "translateX(80px) scale(1.15, 0.9)", offset: 0.7 },
        { transform: "translateX(80px) scale(1)", offset: 0.75 },
        { transform: "translateX(0) scale(1)", offset: 1 }
      ];

      const options = {
        duration: 2500,
        easing: "cubic-bezier(0.25, 1, 0.5, 1)",
        delay: index * 150,
        fill: "both"
      };

      char.animate(keyframes, options);
    });
  }

  // ==========================================
  // 4. 詳細ページ：スライドショー機能（安全強化版）
  // ==========================================
  const track = document.querySelector('.slideshow-track');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.slide-btn.prev');
  const nextBtn = document.querySelector('.slide-btn.next');
  const dotsContainer = document.querySelector('.slide-dots');

  if (track && slides.length > 0) {
    let currentIndex = 0;
    const totalSlides = slides.length;

    // ▼ ドットナビゲーションの作成（dotsContainer が存在する場合のみ実行）
    if (dotsContainer) {
      dotsContainer.innerHTML = ''; // 重複防止用に中身をリセット
      slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
          goToSlide(index);
          resetAutoSlide(); // 手動操作時にタイマーリセット
        });
        dotsContainer.appendChild(dot);
      });
    }

    const dots = dotsContainer ? dotsContainer.querySelectorAll('.dot') : [];

    // 表示更新関数
    function updateSlides() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      if (dots.length > 0) {
        dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === currentIndex);
        });
      }
    }

    function goToSlide(index) {
      currentIndex = index;
      updateSlides();
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlides();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlides();
    }

    // ▼ 矢印ボタンの設定
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
      });
    }
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
      });
    }

    // ▼ 自動再生タイマー（手動操作があったら4秒カウントを仕切り直す）
    let autoSlideTimer = setInterval(nextSlide, 4000);

    function resetAutoSlide() {
      clearInterval(autoSlideTimer);
      autoSlideTimer = setInterval(nextSlide, 4000);
    }
  }
   // ==========================================
// 6. ワーク詳細ポップアップ（モーダル機能）
// ==========================================
    
const modal = document.getElementById('detail-modal');
const modalCloseBtn = document.getElementById('modal-close');
const workCards = document.querySelectorAll('.work-card, .buddy-card');

let modalAutoSlideTimer = null;

if (modal && workCards.length > 0) {

  // 各ワークカードをクリックした時の処理
  workCards.forEach(card => {
    card.addEventListener('click', () => {
        
        // モーダルを開いた時にスクロール位置を必ず最上部にリセット
        modal.scrollTop = 0;
        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) modalContent.scrollTop = 0;
      // データ属性から情報を取得
      const title = card.getAttribute('data-title');
      const category = card.getAttribute('data-category');
      const catType = card.getAttribute('data-cat-type'); // assignment / personal / activity
      const siteUrl = card.getAttribute('data-site-url');
      const images = card.getAttribute('data-images') ? card.getAttribute('data-images').split(',') : [];
      const desc = card.getAttribute('data-desc');

      // 1. タイトルと詳細本文のセット
      document.getElementById('modal-title').innerText = title || '';
      document.getElementById('modal-desc').innerHTML = desc || '';

      // 2. カテゴリバッジのセット
      const badge = document.getElementById('modal-cat-badge');
      badge.innerText = category || '';
      badge.className = `category-badge cat-${catType}`;

      // 3. Webサイトボタンの制御（URLがある場合のみ表示）
      const siteWrapper = document.getElementById('modal-site-wrapper');
      const siteBtn = document.getElementById('modal-site-btn');
      if (siteUrl && siteUrl.trim() !== '') {
        siteBtn.href = siteUrl;
        siteWrapper.style.display = 'block';
      } else {
        siteWrapper.style.display = 'none';
      }

      // 4. モーダル内スライドショーの構築
      setupModalSlideshow(images);

      // 5. モーダルを表示
      modal.classList.add('active');
      document.body.classList.add('modal-open');
    });
  });

  // モーダルを閉じる関数
  function closeModal() {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
    if (modalAutoSlideTimer) clearInterval(modalAutoSlideTimer);
  }

  // ×ボタンまたは背景クリックで閉じる
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // モーダル内スライドショー制御関数
  function setupModalSlideshow(images) {
    const track = document.getElementById('modal-slideshow-track');
    const dotsContainer = document.getElementById('modal-slide-dots');
    const prevBtn = document.getElementById('modal-prev');
    const nextBtn = document.getElementById('modal-next');

    track.innerHTML = '';
    dotsContainer.innerHTML = '';
    if (modalAutoSlideTimer) clearInterval(modalAutoSlideTimer);

    if (images.length === 0) return;

    let currentIndex = 0;

    // 画像とドットを生成
    images.forEach((imgSrc, idx) => {
      const slide = document.createElement('div');
      slide.classList.add('slide');
      slide.innerHTML = `<img src="${imgSrc.trim()}" alt="slide-${idx}">`;
      track.appendChild(slide);

      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (idx === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        currentIndex = idx;
        updateModalSlides();
      });
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.dot');

    function updateModalSlides() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentIndex);
      });
    }

    if (nextBtn) {
      nextBtn.onclick = () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateModalSlides();
      };
    }

    if (prevBtn) {
      prevBtn.onclick = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateModalSlides();
      };
    }

    // 自動再生
    if (images.length > 1) {
      modalAutoSlideTimer = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateModalSlides();
      }, 4000);
    }
  }
} 
    
    document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('detail-modal');
  const modalClose = document.getElementById('modal-close');
  const modalTitle = document.getElementById('modal-title');
  const modalCatBadge = document.getElementById('modal-cat-badge');
  const modalDesc = document.getElementById('modal-desc');
  const modalSiteBtn = document.getElementById('modal-site-btn');
  const modalSiteWrapper = document.getElementById('modal-site-wrapper');
  const slideshowTrack = document.getElementById('modal-slideshow-track');

  // 各カードをクリックした時の処理
  document.querySelectorAll('.work-card, .buddy-card').forEach(card => {
    card.addEventListener('click', () => {
        // ★ ここから追加・確認：モーダルと中身のスクロール位置を最上部(0)にリセット
      const modal = document.getElementById('detail-modal');
      if (modal) {
        modal.scrollTop = 0;
        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) modalContent.scrollTop = 0;
      }
      // ★ ここまで
      const title = card.getAttribute('data-title');
      const category = card.getAttribute('data-category');
      const desc = card.getAttribute('data-desc');
      const siteUrl = card.getAttribute('data-site-url');
      const images = card.getAttribute('data-images') ? card.getAttribute('data-images').split(',') : [];
        
        
      // タイトル・カテゴリ・本文を設定
      if (modalTitle) modalTitle.textContent = title || '';
      if (modalCatBadge) modalCatBadge.textContent = category || '';
      if (modalDesc) modalDesc.innerHTML = desc || '';

      // サイトリンクボタンの制御
      if (siteUrl && siteUrl.trim() !== '') {
        modalSiteBtn.href = siteUrl;
        modalSiteWrapper.style.display = 'block';
      } else {
        modalSiteWrapper.style.display = 'none';
      }
        

      // 画像スライドショーの生成
      if (slideshowTrack) {
        slideshowTrack.innerHTML = '';
        images.forEach(src => {
          const slide = document.createElement('div');
          slide.classList.add('slide');
          const img = document.createElement('img');
          img.src = src.trim();
          slide.appendChild(img);
          slideshowTrack.appendChild(slide);
        });
      }

      // モーダルを表示
      modal.classList.add('active');
    });
  });

  // ×ボタンまたは背景クリックで閉じる
  if (modalClose) {
    modalClose.addEventListener('click', () => modal.classList.remove('active'));
  }
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }
});
    
  $(function() {
  // PC（マウス操作環境）の場合のみ処理を実行
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    
    // HTML内にカーソル用の要素を自動生成して追加
    const cursor = $('<div class="custom-cursor"></div>').appendTo('body');
    const follower = $('<div class="custom-cursor-follower"></div>').appendTo('body');

    // マウスが動いた時にカーソル位置を更新
    $(window).on('mousemove', function(e) {
      const x = e.clientX;
      const y = e.clientY;

      cursor.css({ left: x + 'px', top: y + 'px' });
      follower.css({ left: x + 'px', top: y + 'px' });
    });

    // リンク・ボタン・作品カードなどにホバーした時の拡大エフェクト
    $(document).on('mouseenter', 'a, button, .work-card, .buddy-card', function() {
      follower.addClass('is-hover');
    }).on('mouseleave', 'a, button, .work-card, .buddy-card', function() {
      follower.removeClass('is-hover');
    });

    // 画面外にマウスが出た時に隠す処理
    $(document).on('mouseleave', function() {
      cursor.hide();
      follower.hide();
    }).on('mouseenter', function() {
      cursor.show();
      follower.show();
    });
  }
});  
    

});
