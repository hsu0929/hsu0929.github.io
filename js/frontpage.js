// STEP1 選擇所有圖片
const sliderImages = document.querySelectorAll('.pink');

// STEP2 監聽 window 捲軸滾動事件
window.addEventListener('scroll', debounce(scrollHandler));

// STEP3 處理捲軸滾動
function scrollHandler() {
  sliderImages.forEach((sliderImage, index) => {
    const imageMiddleOffset = sliderImage.offsetTop + sliderImage.height / 2; // 取得每一張圖片中間的 offsetY 位置
    const scrollAt = window.scrollY + window.innerHeight;
    if (scrollAt > imageMiddleOffset) {
      sliderImage.classList.add('active');
    }
  });
}