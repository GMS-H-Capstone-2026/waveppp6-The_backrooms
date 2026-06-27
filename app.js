/* ==========================================================================
   Backrooms Theme Logic - Lost in the Liminal
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Navbar Scroll Effect ---
    const navbar = document.getElementById('main-navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 2. Mobile Menu Toggle ---
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // --- 3. System Requirements Tab Switcher ---
    const tabButtons = document.querySelectorAll('.spec-tab-btn');
    const specContents = document.querySelectorAll('.specs-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            specContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `spec-${tabId}`) {
                    content.classList.add('active');
                }
            });
        });
    });

    // --- Helper Functions for Modals ---
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // --- 4. Video/Trailer Modal ---
    const playTrailerBtn = document.getElementById('play-trailer-btn');
    const playVideoBtn = document.getElementById('play-video-btn');
    const videoModal = document.getElementById('video-modal');
    const videoClose = document.getElementById('video-modal-close');
    const videoBackdrop = document.getElementById('video-modal-backdrop');
    const iframe = document.getElementById('trailer-iframe');
    const defaultVideoSrc = iframe.src;

    function handleOpenVideo() {
        iframe.src = defaultVideoSrc.replace("autoplay=0", "autoplay=1");
        openModal('video-modal');
    }

    function handleCloseVideo() {
        iframe.src = '';
        setTimeout(() => {
            iframe.src = defaultVideoSrc;
        }, 100);
        closeModal('video-modal');
    }

    playTrailerBtn.addEventListener('click', handleOpenVideo);
    playVideoBtn.addEventListener('click', handleOpenVideo);
    videoClose.addEventListener('click', handleCloseVideo);
    videoBackdrop.addEventListener('click', handleCloseVideo);

    // --- 5. Screenshot Gallery Lightbox ---
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxBackdrop = document.getElementById('lightbox-backdrop');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');

    // Backrooms screenshots mapping
    const screenshots = [
        { src: './assets/screenshot_1.jpg', caption: 'Level 0: 노란 벽지와 젖은 카펫 구조' },
        { src: './assets/screenshot_2.jpg', caption: 'Level 1: 기괴한 파이프 지하 통로' },
        { src: './assets/screenshot_3.jpg', caption: 'Level 37: 몽환적이지만 기괴한 풀룸(Poolrooms)' }
    ];
    let currentImgIndex = 0;

    function showLightboxImage(index) {
        currentImgIndex = index;
        lightboxImg.src = screenshots[index].src;
        lightboxCaption.textContent = screenshots[index].caption;
    }

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const index = parseInt(item.getAttribute('data-index'), 10);
            showLightboxImage(index);
            openModal('lightbox-modal');
        });
    });

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        let index = currentImgIndex - 1;
        if (index < 0) index = screenshots.length - 1;
        showLightboxImage(index);
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        let index = (currentImgIndex + 1) % screenshots.length;
        showLightboxImage(index);
    });

    lightboxClose.addEventListener('click', () => closeModal('lightbox-modal'));
    lightboxBackdrop.addEventListener('click', () => closeModal('lightbox-modal'));

    // --- 6. Direct Purchase Checkout Modal (Terminal Interface) ---
    const directBuyBtn = document.getElementById('direct-buy-btn');
    const checkoutModal = document.getElementById('checkout-modal');
    const checkoutClose = document.getElementById('checkout-close');
    const checkoutBackdrop = document.getElementById('checkout-backdrop');
    const checkoutForm = document.getElementById('checkout-form');
    const checkoutFormContainer = document.getElementById('checkout-form-container');
    const checkoutSuccessContainer = document.getElementById('checkout-success-container');
    const successCloseBtn = document.getElementById('success-close-btn');
    const successEmail = document.getElementById('success-email');
    const generatedSteamKey = document.getElementById('generated-steam-key');

    const cardNumber = document.getElementById('card-number');
    const cardExpiry = document.getElementById('card-expiry');
    const cardCvc = document.getElementById('card-cvc');
    const buyerEmail = document.getElementById('buyer-email');

    directBuyBtn.addEventListener('click', () => {
        checkoutForm.reset();
        checkoutFormContainer.style.display = 'block';
        checkoutSuccessContainer.style.display = 'none';
        openModal('checkout-modal');
    });

    // Auto format Card Number
    cardNumber.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        let formatted = '';
        for (let i = 0; i < value.length && i < 16; i++) {
            if (i > 0 && i % 4 === 0) {
                formatted += ' - ';
            }
            formatted += value[i];
        }
        e.target.value = formatted;
    });

    // Auto format Expiry Date
    cardExpiry.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        let formatted = '';
        if (value.length > 0) {
            formatted = value.substring(0, 2);
            if (value.length > 2) {
                formatted += '/' + value.substring(2, 4);
            }
        }
        e.target.value = formatted;
    });

    cardCvc.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '');
    });

    // Generate random mock Steam Key with Backrooms theme (BR-)
    function generateMockSteamKey() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const segment = () => {
            let seg = '';
            for (let i = 0; i < 4; i++) {
                seg += chars[Math.floor(Math.random() * chars.length)];
            }
            return seg;
        };
        return `BR-${segment()}-${segment()}-${segment()}-${segment()}`;
    }

    // Submit Checkout form with Terminal Simulation
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = document.getElementById('pay-submit-btn');
        submitBtn.disabled = true;
        
        // Terminal text animation steps
        submitBtn.textContent = 'CONNECTING TERMINAL...';
        
        setTimeout(() => {
            submitBtn.textContent = 'VERIFYING DATA PACKETS...';
        }, 600);

        setTimeout(() => {
            submitBtn.textContent = 'DECRYPTING SURVIVOR KEY...';
        }, 1200);
        
        setTimeout(() => {
            generatedSteamKey.textContent = generateMockSteamKey();
            successEmail.textContent = buyerEmail.value;
            
            checkoutFormContainer.style.display = 'none';
            checkoutSuccessContainer.style.display = 'flex';
            
            submitBtn.disabled = false;
            submitBtn.textContent = '[ 암호화 전송 및 결제 승인 ]';
        }, 2000);
    });

    checkoutClose.addEventListener('click', () => closeModal('checkout-modal'));
    checkoutBackdrop.addEventListener('click', () => closeModal('checkout-modal'));
    successCloseBtn.addEventListener('click', () => closeModal('checkout-modal'));

    // --- 7. Copy Steam Key to Clipboard ---
    const copyKeyBtn = document.getElementById('copy-key-btn');
    const toast = document.getElementById('toast');

    copyKeyBtn.addEventListener('click', () => {
        const keyText = generatedSteamKey.textContent;
        
        navigator.clipboard.writeText(keyText).then(() => {
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 2500);
        }).catch(err => {
            console.error('클립보드 복사 실패:', err);
        });
    });

    // --- 8. Newsletter Subscription Form ---
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterEmail = document.getElementById('newsletter-email');
    const newsletterMsg = document.getElementById('newsletter-msg');

    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = newsletterEmail.value;
        
        if (email) {
            newsletterMsg.className = 'newsletter-msg success';
            newsletterMsg.textContent = '📡 주파수 결합 성공. 기밀 데이터 수신 대기 상태입니다.';
            newsletterEmail.value = '';
            
            setTimeout(() => {
                newsletterMsg.textContent = '';
                newsletterMsg.className = 'newsletter-msg';
            }, 5000);
        } else {
            newsletterMsg.className = 'newsletter-msg error';
            newsletterMsg.textContent = '📡 주파수 동조 오류. 이메일을 다시 검증하십시오.';
        }
    });
});
