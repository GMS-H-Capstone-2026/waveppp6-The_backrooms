/* ==========================================================================
   Backrooms Theme Logic - Lost in the Liminal
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 0. Intro Boot Sequence ---
    const introScreen = document.getElementById('intro-screen');
    const introContainer = document.querySelector('.intro-content');

    if (introScreen && introContainer) {
        document.body.style.overflow = 'hidden';
        
        // Mock system logs
        const logs = [
            "Initializing A.S.I.P. Subsystem Kernel v4.0.2-stable x86_64",
            "Allocating memory pages: 0x0000000000000000 - 0x00000000FFFFFFFF [SUCCESS]",
            "Mounting virtual file systems: /dev/root, /sys, /proc [OK]",
            "Loading cryptographic modules: SHA-512, RSA-4096, AES-256-GCM...",
            "[  0.034512] A.S.I.P. daemon started with PID 1. Waiting for runlevel 3...",
            "Checking temporal sync integrity... [WARNING: Temporal drift detected > 3.14s]",
            "Establishing connection to backend mainframe: tcp://192.168.0.254:8443",
            "[  0.110294] WARNING: Non-standard dimensional frequency detected in sector 4",
            "Attempting automated quarantine and recalibration protocol...",
            "[FAILED] Quarantine bypassed. Buffer overflow in module 'reality_anchor.sys'",
            "CRITICAL ERROR: Segmentation fault (core dumped). Initiating fallback..."
        ];

        let logCount = 0;
        let speed = 250;

        // 기기 확인 프롬프트 출력
        introContainer.innerHTML = `
            <p class="done">Detecting terminal parameters...</p>
            <p class="done">Your device model is (PC / Mobile):</p>
            <div style="display: flex; align-items: center;" class="done">
                <span>>&nbsp;</span>
                <input type="text" id="device-input" autocomplete="off" spellcheck="false" autofocus style="background:transparent; border:none; color:var(--color-terminal); font-family:var(--font-retro); font-size:inherit; outline:none; width: 100px; caret-color: var(--color-terminal);">
            </div>
        `;

        const deviceInput = document.getElementById('device-input');
        
        // 화면 클릭 시 입력창으로 포커스 유지
        document.addEventListener('click', () => {
            if (deviceInput && !deviceInput.disabled) deviceInput.focus();
        });

        const startBootSequence = () => {
            // 안내 문구 삭제
            introContainer.innerHTML = '';

                // 사람처럼 타이핑하는 효과 함수
                const typeText = (element, text, minSpeed, maxSpeed, callback) => {
                    let i = 0;
                    element.textContent = '';
                    const typeChar = () => {
                        if (i < text.length) {
                            element.textContent += text.charAt(i);
                            i++;
                            introScreen.scrollTop = introScreen.scrollHeight;
                            const currentSpeed = Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed;
                            setTimeout(typeChar, currentSpeed);
                        } else {
                            if (callback) callback();
                        }
                    };
                    typeChar();
                };

                const addLog = () => {
                    if (logCount < logs.length) {
                        const p = document.createElement('p');
                        const prev = introContainer.lastElementChild;
                        if(prev) prev.classList.add('done'); // 이전 줄 깜빡임 제거
                        
                        introContainer.appendChild(p);
                        
                        // 10~50ms 랜덤 속도로 한 글자씩 타이핑
                        typeText(p, logs[logCount], 10, 50, () => {
                            logCount++;
                            setTimeout(addLog, 150); // 한 줄 완성 후 잠시 대기
                        });
                    } else {
                        // 스팸 에러 로그 쏟아지기 시작
                        let spamCount = 0;
                        const spamInterval = setInterval(() => {
                            const p = document.createElement('p');
                            const spamTypes = [
                                () => `[${Math.random().toFixed(6)}] CPU${Math.floor(Math.random()*8)}: Panic - not syncing: Fatal exception in interrupt. EIP: [<${Math.random().toString(16).substring(2,10)}>] 0x${Math.random().toString(16).substring(2,10)} SS:ESP 0068:00000000${Math.random().toString(16).substring(2,8)} CR2: 00000000${Math.random().toString(16).substring(2,8)}`,
                                () => `    at Object.Module._extensions..js (internal/modules/cjs/loader.js:${Math.floor(Math.random()*2000)}:${Math.floor(Math.random()*50)}) at Module.load (internal/modules/cjs/loader.js:${Math.floor(Math.random()*1000)}:32) at Function.Module._load (internal/modules/cjs/loader.js:${Math.floor(Math.random()*1000)}:14) at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)`,
                                () => `0x${Math.random().toString(16).substring(2, 10).toUpperCase()} <+${Math.floor(Math.random()*500)}>: mov %r${['ax','cx','dx','bx','sp','bp','si','di'][Math.floor(Math.random()*8)]},%r${['8','9','10','11','12','13','14','15'][Math.floor(Math.random()*8)]}; cmp $0x${Math.floor(Math.random()*100)},%eax; jne 0x${Math.random().toString(16).substring(2, 10).toUpperCase()}; callq 0x${Math.random().toString(16).substring(2, 10).toUpperCase()} <__stack_chk_fail@plt>`,
                                () => `java.lang.NullPointerException: Cannot invoke "java.util.List.iterator()" because "this.entities" is null at com.asip.kernel.TemporalEntity.update(TemporalEntity.java:${Math.floor(Math.random()*500)}) at com.asip.engine.MainLoop.tick(MainLoop.java:128) at com.asip.engine.Thread.run(Thread.java:834)`,
                                () => `void std::vector<Entity*, std::allocator<Entity*>>::_M_realloc_insert<Entity* const&>(__gnu_cxx::__normal_iterator<Entity**, std::vector<Entity*, std::allocator<Entity*>>>, Entity* const&): Assertion '__builtin_expect(!this->empty(), true)' failed. Aborted (core dumped).`
                            ];
                            const fullText = spamTypes[Math.floor(Math.random() * spamTypes.length)]();
                            p.style.color = "var(--color-terminal)"; 
                            
                            introContainer.appendChild(p);
                            
                            // 스팸 코드도 매우 빠르게 타이핑되는 효과 (매트릭스 느낌)
                            let charIndex = 0;
                            const fastType = setInterval(() => {
                                if (charIndex < fullText.length) {
                                    p.textContent += fullText.charAt(charIndex);
                                    charIndex++;
                                    introScreen.scrollTop = introScreen.scrollHeight;
                                } else {
                                    clearInterval(fastType);
                                    p.classList.add('done');
                                }
                            }, 5);
                            
                            spamCount++;
                            if (spamCount > 80) { // 동시 타이핑되므로 80줄만 되어도 화면이 꽉 참
                                clearInterval(spamInterval);
                                
                                // 타이핑 완료 대기
                                setTimeout(() => {
                                    const allLines = introContainer.querySelectorAll('p');
                                    allLines.forEach((line, index) => {
                                        setTimeout(() => {
                                            line.classList.add('error-blink');
                                        }, index * 6); // 빨간색 웨이브를 천천히 진행 (6ms)
                                    });

                                    const waveDuration = allLines.length * 6;

                                    // 화면 곳곳에 SYSTEM ERROR 뿌리기
                                    const errorOverlay = document.createElement('div');
                                    errorOverlay.style.position = 'absolute';
                                    errorOverlay.style.top = '0';
                                    errorOverlay.style.left = '0';
                                    errorOverlay.style.width = '100%';
                                    errorOverlay.style.height = '100%';
                                    errorOverlay.style.pointerEvents = 'none';
                                    errorOverlay.style.overflow = 'hidden';
                                    introScreen.appendChild(errorOverlay);
                                    
                                    for(let i=0; i<15; i++) { // 렉을 줄이기 위해 생성 개수를 15개로 축소
                                        setTimeout(() => {
                                            const err = document.createElement('h1');
                                            err.textContent = '⚠️ SYSTEM ERROR';
                                            err.style.position = 'absolute';
                                            err.style.color = '#ff0000';
                                            err.style.textShadow = '0 0 10px #ff0000'; // 렌더링 부하 최소화
                                            err.style.willChange = 'transform, opacity'; // 하드웨어 가속 적용
                                            err.style.top = Math.random() * 95 + '%';
                                            err.style.left = Math.random() * 80 + '%';
                                            err.style.fontSize = (Math.random() * 30 + 20) + 'px';
                                            err.style.margin = '0';
                                            err.style.whiteSpace = 'nowrap';
                                            err.className = 'error-glow';
                                            err.style.zIndex = '999999';
                                            errorOverlay.appendChild(err);
                                        }, Math.random() * waveDuration * 1.2);
                                    }

                                    setTimeout(() => {
                                        let countdown = 10;
                                        const promptDiv = document.createElement('div');
                                        promptDiv.className = 'intro-prompt-overlay';
                                        promptDiv.innerHTML = `
                                            <h2 id="intro-countdown" style="margin-bottom:0;">SYSTEM DOWN (${countdown})</h2>
                                        `;
                                        introScreen.appendChild(promptDiv);
                                        
                                        setTimeout(() => promptDiv.classList.add('visible'), 50);

                                        let intervalId;
                                        
                                        const proceedToMain = () => {
                                            clearInterval(intervalId);
                                            promptDiv.style.opacity = '0';
                                            setTimeout(() => {
                                                promptDiv.remove();
                                                introScreen.classList.add('crt-turn-off');
                                                setTimeout(() => {
                                                    introScreen.classList.add('hidden');
                                                    introScreen.style.display = 'none';
                                                    setTimeout(() => {
                                                        const loginScreen = document.getElementById('login-screen');
                                                        if(loginScreen) {
                                                            loginScreen.classList.remove('hidden');
                                                            setTimeout(() => {
                                                                loginScreen.style.opacity = '1';
                                                            }, 50);
                                                        }
                                                    }, 500);
                                                }, 1600);
                                            }, 400);
                                        };

                                        const enterToOk = (e) => {
                                            if(e.key === 'Enter') {
                                                document.removeEventListener('keydown', enterToOk);
                                                proceedToMain();
                                            }
                                        };
                                        document.addEventListener('keydown', enterToOk);

                                        intervalId = setInterval(() => {
                                            countdown--;
                                            const h2 = document.getElementById('intro-countdown');
                                            if (h2) h2.textContent = `SYSTEM DOWN (${countdown})`;
                                            if (countdown <= 0) {
                                                proceedToMain(); 
                                            }
                                        }, 1000);

                                    }, waveDuration + 500);
                                }, 1000); // Wait for fastType to finish
                            }
                        }, 50); // 새로운 줄 타이핑 시작 간격 (50ms)
                    }
                };

                setTimeout(addLog, 300);
        };

        // 엔터 키 이벤트 등록 (기기 입력 후 부팅 시작)
        if (deviceInput) {
            deviceInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    const val = deviceInput.value.trim().toLowerCase();
                    if (val === 'mobile') {
                        document.body.classList.add('mobile-mode');
                    } else {
                        document.body.classList.add('pc-mode');
                    }
                    
                    deviceInput.disabled = true;

                    // 전체화면 모드 전환
                    if (document.documentElement.requestFullscreen) {
                        document.documentElement.requestFullscreen().catch(err => {
                            console.log(`Error attempting to enable fullscreen: ${err.message}`);
                        });
                    }
                    
                    setTimeout(() => {
                        startBootSequence();
                    }, 300);
                }
            });
        }

        // 로그인 창 로직
        const loginScreen = document.getElementById('login-screen');
        const loginBtn = document.getElementById('login-submit-btn');
        const loginErrorMsg = document.getElementById('login-error-msg');
        const blackScreen = document.getElementById('black-screen');
        const loginUser = document.getElementById('login-username');
        const loginPass = document.getElementById('login-password');

        if(loginUser && loginPass) {
            loginUser.addEventListener('keydown', (e) => {
                if(e.key === 'Enter') loginPass.focus();
            });
            loginPass.addEventListener('keydown', (e) => {
                if(e.key === 'Enter') loginBtn.click();
            });
        }

        if (loginBtn && loginScreen) {
            loginBtn.addEventListener('click', () => {
                loginBtn.textContent = "[ VERIFYING... ]";
                loginBtn.style.color = "#aaaaaa";
                loginBtn.style.borderColor = "#aaaaaa";
                
                setTimeout(() => {
                    loginErrorMsg.style.opacity = '1'; // "ACCESS GRANTED" 표시
                    
                    setTimeout(() => {
                        loginScreen.style.opacity = '0';
                        setTimeout(() => {
                            loginScreen.style.display = 'none';
                            
                            // 로그인 성공 후 검은 화면이 서서히 걷히며 메인 사이트 등장
                            if(blackScreen) blackScreen.style.opacity = '0';
                            setTimeout(() => {
                                document.body.style.overflow = '';
                                if(blackScreen) blackScreen.style.display = 'none';
                            }, 2500); // fade transition time
                        }, 1000);
                    }, 1500);
                }, 1500); // verifying time
            });
        }    }

    // --- Video/Trailer Modal Logic ---
    const playTrailerBtn = document.getElementById('play-trailer-btn');
    const playVideoBtn = document.getElementById('play-video-btn');
    const videoModal = document.getElementById('video-modal');
    const videoClose = document.getElementById('video-modal-close');
    const videoBackdrop = document.getElementById('video-modal-backdrop');
    const iframe = document.getElementById('trailer-iframe');
    const defaultVideoSrc = iframe ? iframe.src : '';

    function handleOpenVideo() {
        if(iframe && iframe.src) {
             iframe.src = defaultVideoSrc.replace("autoplay=0", "autoplay=1");
        }
        if(videoModal) {
            videoModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function handleCloseVideo() {
        if(iframe) {
            iframe.src = '';
            setTimeout(() => {
                iframe.src = defaultVideoSrc;
            }, 100);
        }
        if(videoModal) {
            videoModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    if(playTrailerBtn) playTrailerBtn.addEventListener('click', handleOpenVideo);
    if(playVideoBtn) playVideoBtn.addEventListener('click', handleOpenVideo);
    if(videoClose) videoClose.addEventListener('click', handleCloseVideo);
    if(videoBackdrop) videoBackdrop.addEventListener('click', handleCloseVideo);


    // --- Random VHS Glitch Effect Logic ---
    const glitchOverlay = document.getElementById('screen-glitch-overlay');
    
    function triggerRandomGlitch() {
        if(!glitchOverlay) return;
        
        // 무작위로 화면 전체에 노이즈/글리치 오버레이 활성화
        glitchOverlay.classList.add('active');
        
        // 특정 요소(텍스트, 이미지)들을 무작위로 찌그러뜨림
        const glitchableElements = document.querySelectorAll('.hero-title, .about-card-img, .feature-icon, .purchase-card');
        const randomTarget = glitchableElements[Math.floor(Math.random() * glitchableElements.length)];
        
        if (randomTarget) {
            randomTarget.classList.add('extreme-glitch');
        }

        setTimeout(() => {
            glitchOverlay.classList.remove('active');
            if (randomTarget) {
                randomTarget.classList.remove('extreme-glitch');
            }
            
            // 다음 글리치 예약 (3초 ~ 15초 사이)
            const nextGlitchTime = Math.random() * 12000 + 3000;
            setTimeout(triggerRandomGlitch, nextGlitchTime);
        }, Math.random() * 500 + 100); // 글리치 지속 시간 (100ms ~ 600ms)
    }

    // 메인 화면 로드가 끝나면(로그인 완료 후) 글리치 효과 시작
    // 여기서는 일단 백그라운드에서 바로 타이머 시작 (어차피 오버레이에만 적용됨)
    setTimeout(triggerRandomGlitch, 5000);


    // --- Lightbox Gallery Modal Logic ---
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxBackdrop = document.getElementById('lightbox-backdrop');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');

    const screenshots = [
        { src: './assets/screenshot_1.jpg', caption: 'Level 0: 노란 벽지와 젖은 카펫 구조' },
        { src: './assets/screenshot_2.jpg', caption: 'Level 1: 기괴한 파이프 지하 통로' },
        { src: './assets/screenshot_3.jpg', caption: 'Level 37: 몽환적이지만 기괴한 풀룸(Poolrooms)' }
    ];
    let currentImgIndex = 0;

    function showLightboxImage(index) {
        currentImgIndex = index;
        if(lightboxImg) lightboxImg.src = screenshots[index].src;
        if(lightboxCaption) lightboxCaption.textContent = screenshots[index].caption;
    }

    if(galleryItems) {
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const index = parseInt(item.getAttribute('data-index'), 10);
                showLightboxImage(index);
                if(lightboxModal) {
                    lightboxModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });
    }

    if(prevBtn) prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        let index = currentImgIndex - 1;
        if (index < 0) index = screenshots.length - 1;
        showLightboxImage(index);
    });

    if(nextBtn) nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        let index = (currentImgIndex + 1) % screenshots.length;
        showLightboxImage(index);
    });

    function closeLightbox() {
        if(lightboxModal) {
            lightboxModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    if(lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if(lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);


    // --- Checkout Modal Logic ---
    const directBuyBtn = document.getElementById('direct-buy-btn');
    const checkoutModal = document.getElementById('checkout-modal');
    const checkoutClose = document.getElementById('checkout-close');
    const checkoutBackdrop = document.getElementById('checkout-backdrop');
    const checkoutForm = document.getElementById('checkout-form');
    const checkoutFormContainer = document.getElementById('checkout-form-container');
    const checkoutSuccessContainer = document.getElementById('checkout-success-container');
    
    if(directBuyBtn) directBuyBtn.addEventListener('click', () => {
        if(checkoutForm) checkoutForm.reset();
        if(checkoutFormContainer) checkoutFormContainer.style.display = 'block';
        if(checkoutSuccessContainer) checkoutSuccessContainer.style.display = 'none';
        if(checkoutModal) {
            checkoutModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });

    function closeCheckout() {
        if(checkoutModal) {
            checkoutModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    if(checkoutClose) checkoutClose.addEventListener('click', closeCheckout);
    if(checkoutBackdrop) checkoutBackdrop.addEventListener('click', closeCheckout);

    if(checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if(checkoutFormContainer) checkoutFormContainer.style.display = 'none';
            if(checkoutSuccessContainer) checkoutSuccessContainer.style.display = 'block';
        });
    }

});

