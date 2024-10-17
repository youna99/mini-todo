# 👩🏻‍💻 project - mini-todo

## 👋🏻 소개
React와 Node의 **CORS 연결** 학습을 위한 미니 투두 리스트 애플리케이션입니다.

## 🖥️ 기술 스택
**Languages**: JavaScript / Node.js  <br>
**Frameworks/Libraries**: React.js, Express.js <br>
**Tools**: Visual Studio <br>


## 🗂️ 폴더 개요 및 학습 내용
### client: React를 활용한 프론트엔드 코드
- **주요 내용**: useState와 **useCallback** hook을 사용하여 상태를 관리하고 성능 최적화를 구현했습니다. <br> **.env와 app-config.js** 파일을 모두 사용해보면서 환경 설정 관리를 하였습니다.
- **배운점 및 느낀점**: useCallback hook를 사용하는 법을 알게 되어 **성능 최적화**할 수 있는 기회를 가졌고 앞으로 프로젝트에 적용할 계획입니다.

### server: Express를 활용한 백엔트 코드
- **주요 내용**: app.js 파일에서 **CORS 미들웨어**를 사용하여 클라이언트와 서버 간의 연결을 구현했습니다.
- **배운점 및 느낀점**: Node.js에서 미들웨어 등록 순서가 중요하다는 것을 알게 되었고 **도메인이 다른 서버**끼리 리소스를 주고 받을 때 **보안**을 위해 설정된 정책이다라는 개념을 이해하게 되었습니다.
