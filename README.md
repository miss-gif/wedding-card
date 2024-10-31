# 웹 청첩장

- 작업기간 :
- 배포 :

## 프로젝트 설정

- `yarn`과 `vite`를 사용한 `Zero-Install` 세팅

## 사용기술

- 스타일 : `scss`와 `module`를 사용한 스타일링 적용
- 데이터 : `json-server`를 사용해 서버 환경을 구축
- 아이콘 : 무료 `svg` 사용
- 캐러셀 : `swiper`을 사용한 이미지 슬라이드 구현
- 캘린더 : `react-day-picker`를 사용해 캘린더 구현
- 지도 : Kakao 지도 API 사용한 지도 구현

## 최적화 적용

FCP (First Contentful Paint) 3.7초 → 1.6초
LCP (Largest Contentful Paint) 8.3초 → 5.6초
Speed Index 3.7초 → 1.9초

- 폰트 : 프로젝트 내 폰트를 탑재, `woff2`>`woff`>`truetype` 적용으로 최적화 적용
- 비디오 : `webm`과 `mp4`를 사용한 video 최적화 적용
- 이미지 : `picture`를 사용한 `webp`와 `jpg`확장자 호환성 확보 및 최적화 적용, cdn서비스를 이용해 성능 개선
