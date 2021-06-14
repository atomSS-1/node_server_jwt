# knance 과제 documentation
 설치(필요) 프로그램:
 * node js
 * mysql
 * npm
 
 개발 환경:
 * windows10
 
 사용 언어:
 * node js
 
 ## 소감 내지 어려워던 부분
 
 
|과제 상세 내용| 해결 여부 |부연 설명| 사용 이유|
|------|------|----|----|
|ORM sequlize 사용 |해결|기존에 쓰던 sequlize보다 버전업된 상태를 사용하여 진입장벽을 조금 느꼈습니다.  | 테이블을 바로 데이터베이스에 동기화하는데 목적을 뒀습니다.|
|windows가 아닌 다른 플랫폼에서 작동할걸 대비하여 cross-env 모듈|미해결|스크립트를 짰으나 환경변수가 로딩 되지 않는 현상이 생겨 다른 방법을 채택 하였습니다.|모든 플랫폼에서 동일하게 작동하도록 목표설정|
|비밀번호는 해싱하여 db에 저장하였습니다.|해결||db가 탈취되는 것을 대비하여 비밀번호를 hashing 하였습니다.|
 |.env 파일을 개발 모드, 테스트 모드, 실행 모드로 구분하여 환경변수를 설정하였습니다. |해결|dotenv 모듈이 어느 파일에서 작동하지 않아 시간 소모를 하였습니다.|db를 나누는데 중점을 뒀습니다.|
 |Jwt login의 이해와 구현|해결||모든 정보가 토튼에 포함 되기 때문에 별도의 인증 저장소가 필요치 않다|
 |dotenv.config()로 환경변수 로딩하기|미해결|중복 코드가 있어 리펙토링이 필요하다||
 ## 실행 방법
 1. node js 와 mysql 설치
 1. 개발 모드일 경우 mysql db 는 `devDb`, 테스트 모드 일 경우 `testDb`, 실행 모드 일 경우 `knance` 이다.
 1. 위 db를 mysql에서 `CREATE DATABASE IF NOT EXISTS "데이터 베이스 이름"` 명령어를 실행하여 3개의 데이터베이스를 생성해준다
 1. `git clone https://github.com/k89jy/Knace_test.git` 을 콘솔에서 실행한다.
 3. 콘솔에서 `npm install`로 모듈을 설치해준다
 4. 실행 모드 `npm run start`으로 서버를 시작한다
 5. 테스트 모드 `npm run start:test`으로 서버를 시작한다.
 6. 개발 모드 `npm run start:dev`로 서버를 시작한다.
 7. `127.0.0.1:3000/login` post method로 로그인은 시도한다
 8. `127.0.0.1:3000/insert` post method로 회원 정보를 만든다
 
 ex))
 request
 {
    "email":"q",
    "password":"123"
}  
response
{
    "사용자 정보": {
        "email": "q"
    },
    "token": "jwt 토큰"
}
