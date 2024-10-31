# 웹 청첩장

- 작업기간 : 2024.10.27 - 2024.11.01

## 목차

- [프로젝트 설명](#프로젝트-설명)
- [프로젝트 설정](#프로젝트-설정)
- [사용기술](#사용기술)
- [최적화 적용](#최적화-적용)
- [설치 및 실행](#설치-및-실행)
- [주요 기능](#주요-기능)
- [화면 스크린샷](#화면-스크린샷)

## 프로젝트 설명

이 프로젝트는 결혼식을 준비하는 신랑 신부를 위해 간편한 웹 청첩장 서비스를 제공합니다.
청첩장 링크를 통해 지인들이 일정을 확인하고 장소를 쉽게 확인할 수 있습니다.

## 프로젝트 설정

- `yarn berry`와 `vite`를 사용한 `Zero-Install` 세팅

## 사용기술

- **스타일**: `scss`와 `module`를 사용한 스타일링 적용
- **데이터**: `json-server`를 사용해 서버 환경을 구축
- **아이콘**: 무료 `svg` 아이콘 사용
- **캐러셀**: `swiper`을 사용한 이미지 슬라이드 구현
- **캘린더**: `react-day-picker`를 사용해 캘린더 구현
- **지도**: Kakao 지도 API 사용한 지도 구현
- **데이터 페칭**: @tanstack/react-query
- **에러처리**: ErrorBoundary 클래스를 사용한 에러 처리

## 최적화 적용

**Lighthouse 측정 결과 개선**

- FCP (First Contentful Paint) 3.7초 → `1.7초`
- LCP (Largest Contentful Paint) 8.3초 → `3.7초`
- Speed Index 3.7초 → `1.9초`

- **폰트**: 프로젝트 내 폰트를 탑재, `woff2`>`woff`>`truetype` 적용으로 최적화
  - `Subset`을 사용하여 불필요한 폰트 제거로 용량 최적화
  - `font-display: fallback;` 속성을 사용하여 로딩 시 사용자 경험을 개선
- **비디오**: `webm`과 `mp4` 비디오 포맷 최적화
- **이미지**: `picture` 태그를 사용해 `webp`와 `jpg` 호환성 확보 및 최적화 적용, CDN 사용
- **컴포넌트 최적화**: Props 값이 변경되지 않는 `Calender` 등 필요한 컴포넌트만 렌더링

## 설치 및 실행

1. 레포지토리를 클론합니다.
2. 로컬 서버를 실행합니다.

- `yarn run dev`
- `yarn run dev:db`

## 주요 기능

- 인트로 동영상
- 이미지 갤러리: swiper로 구성한 사진 슬라이드 기능
- 청첩장 정보 제공: 결혼식 일시 및 장소 정보 제공
- 지도 및 캘린더 기능: Kakao 지도 API와 캘린더를 사용해 위치와 일정을 확인 가능
- 연락처 및 계좌 클립보드 기능
- 카카오 링크 공유

## 화면 스크린샷

![main](https://github.com/user-attachments/assets/dddf3bc8-e8ab-4bc2-b2f6-d47235ac29ba)

###### 최적화 Before

![스크린샷 2024-10-31 234812](https://github.com/user-attachments/assets/5153f245-1a2d-400e-af9a-8992dd3f6ca8)

###### 최적화 After

![스크린샷 2024-11-01 082604](https://github.com/user-attachments/assets/54e779f0-2582-4240-82a6-d44df52ce438)
