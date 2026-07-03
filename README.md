# 게임 소개 페이지 배포 품질 개선 미션

## 과제 목표

이미 만들어진 게임 소개 페이지를 실제 웹사이트처럼 점검하고 개선한 뒤, 조직 GitHub 레포지토리에서 GitHub Pages로 배포한다.

이번 과제에서 할 일은 3가지다.

1. Lighthouse 점수 개선하기
2. 나만의 `404.html` 페이지 만들기
3. GitHub Pages 배포 확인하기

---

## 프로젝트 정보

- 프로젝트 이름: THE BACKROOMS 게임 소개 페이지
- GitHub 저장소: https://github.com/GMS-H-Capstone-2026/waveppp6-The_backrooms
- 기본 브랜치: `main`
- 주요 파일:
  - `index.html`
  - `style.css`
  - `app.js`
  - `assets/`

---

## 1. Lighthouse 점수 개선하기

### 목표

Chrome Lighthouse 검사를 사용해서 현재 웹페이지의 문제점을 찾고, 최소 2개 이상 수정한다.

### 진행 순서

1. 프로젝트를 VS Code로 열기
2. `live-server`로 `index.html` 실행하기
3. Chrome에서 실행된 페이지 열기
4. 개발자 도구 열기
5. Lighthouse 탭 선택하기
6. 검사 실행하기
7. 처음 점수 기록하기
8. 문제 항목을 보고 수정하기
9. 다시 Lighthouse 검사하기
10. 개선 전/후 점수 비교하기

### 기록할 점수

| 항목 | 개선 전 | 개선 후 |
|---|---:|---:|
| Performance |  |  |
| Accessibility |  |  |
| Best Practices |  |  |
| SEO |  |  |

### 개선 예시

아래 항목 중 가능한 것을 골라 수정한다.

- 이미지 용량 줄이기
- 이미지에 `alt` 속성 추가하기
- 이미지에 `width`, `height` 속성 추가하기
- 필요한 이미지에 `loading="lazy"` 추가하기
- `title` 태그 확인하기
- `meta description` 확인하기
- 버튼이나 링크 이름 명확하게 만들기
- 글자와 배경의 색 대비 개선하기
- 사용하지 않는 코드 정리하기
- Chrome DevTools Console 에러 없애기

### 완료 조건

- Lighthouse 개선 전 점수를 기록했다.
- Lighthouse 문제를 보고 2개 이상 수정했다.
- Lighthouse 개선 후 점수를 기록했다.
- 개선 전보다 최소 1개 항목 이상 점수가 올랐다.

---

## 2. 404 페이지 만들기

### 목표

잘못된 주소로 접속했을 때 기본 오류 화면이 아니라, 게임 분위기에 맞는 직접 만든 오류 페이지가 보이게 만든다.

### 진행 순서

1. 프로젝트 폴더에 `404.html` 파일 만들기
2. 404 페이지에 오류 메시지 작성하기
3. 메인 페이지로 돌아가는 버튼 만들기
4. 기존 게임 소개 페이지와 비슷한 디자인 적용하기
5. `live-server`로 화면 확인하기
6. GitHub Pages 배포 후 잘못된 주소로 접속해서 확인하기

### 404 페이지에 들어가야 할 내용

- `404` 또는 `Page Not Found` 문구
- 게임 분위기에 맞는 짧은 안내 문구
- 메인 페이지로 돌아가는 버튼
- 기존 페이지와 어울리는 색상과 디자인

### 완료 조건

- `404.html` 파일이 있다.
- 404 페이지에 오류 안내 문구가 있다.
- 메인 페이지로 돌아가는 버튼이 있다.
- 기존 게임 소개 페이지와 디자인이 어울린다.
- 배포 후 잘못된 주소로 접속했을 때 404 페이지가 보인다.

### 404 페이지 확인 주소 예시

GitHub Pages 배포가 끝난 뒤, 배포 주소 뒤에 없는 경로를 붙여서 확인한다.

```text
https://GMS-H-Capstone-2026.github.io/waveppp6-The_backrooms/test
```

직접 만든 404 페이지가 보이면 성공이다.

---

## 3. GitHub Pages 배포 확인하기

### 목표

조직 GitHub 레포지토리에 있는 게임 소개 페이지를 인터넷 주소로 접속할 수 있게 만든다.

### 진행 전 확인할 것

선생님과 함께 아래 내용을 먼저 확인한다.

- 조직 GitHub 레포지토리에 접근할 수 있는가?
- 수정한 파일을 커밋할 수 있는가?
- GitHub Pages 설정을 변경할 수 있는가?
- 기본 브랜치가 `main`인가?
- `index.html` 파일이 저장소의 가장 바깥 위치에 있는가?

### 진행 순서

1. 수정한 파일 저장하기
2. GitHub 저장소에 변경 사항 반영하기
3. GitHub 저장소 페이지로 이동하기
4. `Settings` 메뉴로 이동하기
5. 왼쪽 메뉴에서 `Pages` 선택하기
6. Source를 `Deploy from a branch`로 설정하기
7. Branch를 `main`으로 설정하기
8. 폴더를 `/root`로 설정하기
9. Save 클릭하기
10. GitHub Pages 주소가 생성될 때까지 기다리기
11. 생성된 주소로 접속해서 페이지 확인하기

### 배포 주소

GitHub Pages 주소는 보통 아래 형태로 만들어진다.

```text
https://GMS-H-Capstone-2026.github.io/waveppp6-The_backrooms/
```

### 배포 후 확인할 것

- 메인 페이지가 정상적으로 보이는가?
- CSS가 정상적으로 적용되는가?
- 이미지가 깨지지 않는가?
- JavaScript 기능이 작동하는가?
- 잘못된 주소로 접속했을 때 `404.html` 페이지가 보이는가?
- 휴대폰에서도 접속되는가?

### 완료 조건

- 조직 GitHub 레포지토리에 수정한 파일이 반영되어 있다.
- GitHub Pages 배포 주소가 생성되었다.
- 배포 주소로 접속했을 때 메인 페이지가 정상적으로 보인다.
- 잘못된 주소로 접속했을 때 직접 만든 404 페이지가 보인다.

---

## 제출할 것

아래 내용을 정리해서 제출한다.

### 1. GitHub 저장소 링크

```text
https://github.com/GMS-H-Capstone-2026/waveppp6-The_backrooms
```

### 2. GitHub Pages 배포 링크

```text
https://GMS-H-Capstone-2026.github.io/waveppp6-The_backrooms/
```

### 3. Lighthouse 개선 전/후 점수

| 항목 | 개선 전 | 개선 후 |
|---|---:|---:|
| Performance |  |  |
| Accessibility |  |  |
| Best Practices |  |  |
| SEO |  |  |

### 4. 내가 수정한 내용

아래 예시처럼 3개 이상 작성한다.

```text
1. Lighthouse 문제를 확인하고 수정했다.
2. 이미지 alt 속성을 보완했다.
3. 404.html 페이지를 만들었다.
4. GitHub Pages 배포를 확인했다.
```

---

## AI에게 질문할 때 예시

### Lighthouse 문제를 고칠 때

```text
Lighthouse에서 다음 문제가 나왔어.

[문제 내용 붙여넣기]

내 프로젝트는 HTML, CSS, JavaScript로 만든 게임 소개 페이지야.
초보자도 이해할 수 있게 이 문제가 무슨 뜻인지 설명하고,
어느 파일의 어떤 부분을 수정하면 되는지 알려줘.
전체 코드를 다시 만들지 말고 수정할 부분만 알려줘.
```

### 404 페이지를 만들 때

```text
내 게임 소개 페이지에 어울리는 404.html을 만들고 싶어.
잘못된 주소로 들어왔을 때 보이는 페이지이고,
메인 페이지로 돌아가는 버튼이 있어야 해.
기존 index.html과 style.css 분위기를 유지하면서
HTML과 CSS를 초보자도 이해할 수 있게 나눠서 작성해줘.
```

### GitHub Pages 배포가 안 될 때

```text
GitHub Pages로 HTML/CSS/JS 사이트를 배포했는데 페이지가 제대로 보이지 않아.
이미지가 깨지거나 CSS가 적용되지 않을 때 확인해야 할 것을 순서대로 알려줘.
내 저장소는 조직 레포지토리이고 기본 브랜치는 main이야.
```

---

## 최종 체크리스트

- [ ] `live-server`로 페이지를 실행했다.
- [ ] Lighthouse 첫 검사를 했다.
- [ ] Lighthouse 개선 전 점수를 기록했다.
- [ ] Lighthouse 문제를 2개 이상 수정했다.
- [ ] Lighthouse 재검사를 했다.
- [ ] Lighthouse 개선 후 점수를 기록했다.
- [ ] `404.html`을 만들었다.
- [ ] 404 페이지에 메인으로 돌아가는 버튼을 만들었다.
- [ ] 수정한 파일을 GitHub 저장소에 반영했다.
- [ ] GitHub Pages 배포를 완료했다.
- [ ] 배포 링크로 메인 페이지 접속을 확인했다.
- [ ] 잘못된 주소로 404 페이지 작동을 확인했다.
- [ ] 제출할 링크와 점수를 정리했다.
