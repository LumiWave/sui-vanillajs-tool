
# SUI SDK 사용 안내

## 소개
이 프로젝트는 **SUI SDK**를 사용하여 Vanilla JavaScript 환경에서 활용할 수 있도록 제공합니다. 이 저장소에서는 SUI SDK를 **빌드(build)**하고, **실행(run)**하는 방법과 함께 샘플 코드를 제공합니다.

## 설치 및 실행 방법

### 1. **의존성 설치**
먼저, 프로젝트에 필요한 의존성을 설치해야 합니다. 다음 명령어를 실행하세요.

```bash
npm install
```

### 2. **빌드 (Build)**
SUI SDK를 빌드하려면 다음 명령어를 사용합니다. 이 명령은 SDK를 컴파일하여 사용 가능한 JavaScript 코드로 번들링합니다.

```bash
npm run build
```

### 3. **서버 실행**
SDK를 빌드한 후, 아래 명령어를 통해 서버를 실행할 수 있습니다.

```bash
npm start
```

### 4. **실행 결과 확인**
브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하여 서버가 정상적으로 실행되고 있는지 확인하세요.

## 디렉터리 구조

```
/project-root
│
├── /src              # 소스 코드 폴더
├── /dist             # 빌드된 결과물 저장
├── /node_modules     # npm 패키지들
├── /public           # html 파일ㅇ
├── package.json      # 프로젝트 메타데이터와 스크립트
└── README.md         # 프로젝트 사용 안내 파일
```

## 의존성 관리
이 프로젝트는 Node.js와 npm을 필요로 합니다. 의존성 설치 전, Node.js가 설치되어 있는지 확인하세요.  
[Node.js 다운로드](https://nodejs.org/)

## 스크립트 설명
- **`npm run build`**: 소스 코드를 빌드합니다.
- **`npm start`**: 서버를 시작하고, 빌드된 SDK를 실행합니다.

## 문의 및 지원
문제가 발생하거나 개선이 필요한 경우 [Issue 탭](https://github.com/LumiWave/sui-vanillajs-tool/issues)에 등록해 주세요.
