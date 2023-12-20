## 1. Introduction

![livetvcommerce](https://github.com/MarsMan13/LGEE/assets/26590990/ff7f3d2d-d772-41a9-9d80-5e1388eea57d)

LiveTVCommerce: 대화면을 이용한 몰입도 있는 온라인 쇼핑 SW 구현

스트리밍 기반으로 시의성 있는 영상 노출과 댓글 및 좋아요 실시간 노출

## 2. Architectural Drivers

### - Functional Requirements

끊김 없는 라이브 스트리밍

사용자 로그인 및 개별 컨텐츠 표출

### - Non-Functional Requirements (Optional)

사용감을 극대화 시키는 UI/UX

## 3. Architecture Overview

### - Frontend architecture

<img width="980" alt="Screenshot 2023-12-20 at 4 37 33 PM" src="https://github.com/MarsMan13/LGEE/assets/26590990/b6e8e91b-ca1f-4147-b66b-8aa41be36f07">

State기반의 Router구현

useMemo Hook을 사용하여, 성능 최적화

useCallback Hook을 적절히 사용하여 메모이제이션

다양한 영상 Play 화면에 대한 최적화 적용

### - Backend architecture

<img width="880" alt="Screenshot 2023-12-20 at 4 36 56 PM" src="https://github.com/MarsMan13/LGEE/assets/26590990/665d2c5d-117b-4483-9c42-333f54f5f285">

AWS 기반 adaptive streaming 서비스 구현

DDoS 공격 방지를 위한 Cloudflare 방화벽 적용

Storage tiering으로 핵심 컨텐츠 저지연 노출

<img width="413" alt="image" src="https://github.com/MarsMan13/LGEE/assets/26590990/a2a4a2f5-725f-439c-a72e-b43d2c3cfdd5">

WebRTC SFU 기반 저부하 컨텐츠 제공자 스트리밍 전달

## 4. 기타

### - TDD 방법론 적용

<img width="443" alt="image" src="https://github.com/MarsMan13/LGEE/assets/26590990/f2e8ae99-cf18-429a-9ed8-4c3105313609">

### - 영상 downscaling 과정에서 발생할 수 있는 unsommthness 문제 해결

<img width="484" alt="image" src="https://github.com/MarsMan13/LGEE/assets/26590990/e51f73df-d662-40a3-a081-55c91782adfb">
