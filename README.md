# GamePearl
- **메인 페이지**
    - 멋진 동영상 배너
    - 인기 차트
        - 평점 Top 10
        - 장르별 Top 10
        - 최신게임 Top 10
        - 똥겜 Top 10
    - 새로운 소식
        - 게임 뉴스 사이트 “게임 메카”의 새로운 뉴스를 카테고리별로 가져와서 보여줌
    - 인기 동영상
        - 유튜브에서 “게임 리뷰”으로 검색한 결과를 동영상 플레이어로 보여줌
- **게임**
    
    ⁕ 모든 게임 목록은 클릭하면 게임 상세 페이지로 이동
    
    ⁕ 게임 상세 페이지에서 리뷰를 남기거나 북마크 설정이 가능함
    
    - 게임 추천
        - 13가지 다양한 질문에 대한 대답을 분석해 추천 게임을 보여주는 기능
        - 5가지 추천 게임과 함께 추천 받은 게임의 카테고리 분포도를 그래프로 보여줌
        - 각각의 추천 게임을 클릭하면 게임 상세 페이지로 넘어감
    - 게임 검색
        - 전체 목록 / 장르 / 플랫폼 / 이용등급 별로 나뉜 게임 목록을 확인 가능
        - 게임 타이틀로 검색 가능
        - 리스트에서 각각의 게임을 클릭하면 게임 상세 페이지로 넘어감
    - TOP 차트
        - 평점 / 장르별 / 이용등급별 / 똥겜 TOP 10의 목록을 슬라이더로 보여줌
        - 슬라이더에서 각각의 게임을 클릭하면 게임 상세 페이지로 넘어감
- **커뮤니티**
    - 등급 제도
        - 등급이 올라가면 높은 권한의 게시판들의 게시글들을 열람할 수 있음
            - guest : 로그인하지 않은 상태
            - 0 : 돌멩이 - 회원가입
            - 1 : 탱탱볼 - 300pt
            - 2 : 타피오카펄 - 600pt
            - 3 : 진주 - 1000pt
            - 4 : 무지개진주 - 1500pt
            - 5 : admin - 개발자, 코치님, 모든 게시판 사용 가능
        - 회원 가입을 하면 0(돌멩이) 등급부터 시작
        - 등급을 올리기 위해서는 포인트를 모아야 함, 포인트는 다음과 같은 방법으로 얻을 수 있음
            - 출석 체크 : 100pt
            - 게임 리뷰 작성 : 250pt
            - 룰렛 돌리기 : 랜덤(100pt ~ 1000pt)
            - 게임 플레이 시 clear / 몇 점 이상 달성 : 100pt
    - 게시판
        - 게시판은 크게 말머리, 게시글, 좋아요, 댓글 기능으로 나뉨
        - 말머리를 클릭하면 말머리별로 게시글 확인이 가능함
        - 일부 기능은 등급에 따라 권한이 달라짐
            - 돌멩이(0)는 룰렛이랑 게임 불가
        - 모든 게시판은 등급에 따라 열람 권한이 주어짐
            - 공지사항 : everyone (guest 포함)
            - 선택 안 함(말머리 표시 안됨) : everyone (guest 포함)
            - 유머 : 돌멩이(0) 등급 이상
            - 파티 모집 : 탱탱볼(1) 등급 이상
            - 후기 : 타피오카펄(2) 등급 이상
            - 건의사항 : 진주(3) 등급 이상
            - 꿀팁 : 무지개진주(4) 등급 이상
        - 각 게시글을 클릭하면 게시글 상세 페이지로 이동하고 게시글마다 좋아요, 댓글을 남길 수 있음
            - 본인이 쓴 댓글은 수정, 삭제가 가능함
            - 삭제는 soft delete 기법을 사용하여 “삭제된 댓글입니다.”라는 문구로 남음
- **미니 게임**
    - 룰렛
        - 룰렛은 포인트를 쌓아 등급을 올리기 위한 방법 중 하나
        - 룰렛 돌리기는 하루에 한 번만 가능함
        - 룰렛의 항목과 확률은 다음과 같음
            - 1000p => 4.55%
            - 500p => 13.64%
            - 300p => 13.64%
            - 200p => 27.27%
            - 100p => 40.91%
    - 미니 게임
        - 미니 게임은 포인트를 쌓아 등급을 올리기 위한 방법 중 하나
        - 게임은 종류당 하루에 한 번씩 조건을 충족하면 100포인트를 얻을 수 있음
        - 한 번 포인트를 얻은 이후 게임을 즐기는 건 무한으로 가능
        - 미니 게임의 종류와 포인트 충족 조건은 다음과 같음
            - 스네이크 게임 : 150점 이상 달성
            - 카드 짝 맞추기 게임 : 주어진 턴 안에 짝 모두 맞추기
            - 2048 : 1000점 이상 달성
- **마이페이지**
    - 좋아하는 게임 성향 분석 차트
        - 북마크 한 게임들이 추가될 때마다 해당 게임들을 동적으로 분석해 사용자의 **관심 장르 분포**와 **게임별 긍정/부정 리뷰 비율** 차트를 시각화해서 보여줌
    - 나의 정보
        - 나의 등급 확인
        - 회원 탈퇴
        - 닉네임 수정
    - 내가 찜한 게임
        - 북마크 한 게임들의 목록을 ALL / 인기순 / 플레이타임순으로 정렬해서 보여줌
    - 내 주변 PC방 찾기
        - 카카오맵을 사용하여 내 주변 피씨방 목록을 보여줌
        - 로컬에서는 잘 작동하나 배포 서버에서 작동하지 않아 원인을 찾아보니
          1. navigator.geolocation 기능이 HTTPS 환경에서만 동작  
                <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a2d7cbfe-03b9-4057-abfd-16a85e8eaaba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220510T092303Z&X-Amz-Expires=86400&X-Amz-Signature=bcfdcb294b9e7d31db69b38ab68962005960d8d44929283f76cb5575391cc313&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject" width="500" height="150"/>  

          2. letsencrypt로 도메인의 인증서를 발급받고 nginx 설정 파일로 SSL을 적용하려 노력
          3. 적용되지 않아 nmap으로 포트 스캔을 해보니 엘리스가 VM 설정 시 443 포트를 닫아놓은 것으로 확인되어 해결하지 못함
                <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b5917b6f-e144-4fbe-9f54-2f69cfe7012c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220510T092358Z&X-Amz-Expires=86400&X-Amz-Signature=2772b35762b2a09b0a4170c19481990e65ce154bbbfb59207f3b1f35bfe08d89&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject" width="600" height="300"/>  
            
        - 아래는 로컬 서버에서 작동하는 모습
            ![img](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8f5a595f-01b7-407f-b236-c689d2050e29/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220510T092428Z&X-Amz-Expires=86400&X-Amz-Signature=e0a4702c6fd2d884c857c8af9b4d0248249641d9208d6f33f138e3bb314ed1cd&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
            
    - 내가 쓴 리뷰
        - 내가 작성한 게임 리뷰들을 한 데 모아 볼 수 있음
        - 리뷰를 클릭하면 해당 게임 상세 페이지로 이동
        - 본인이 쓴 리뷰는 수정, 삭제가 가능함


## 프로젝트 구성 안내

프로젝트 배포 주소: http://elice-kdt-ai-4th-team06.elicecoding.com/

## 1. 프로젝트 소개

**어떠한 데이터셋와 도구 및 기술을 사용했는지에 대한 설명과 엔드유저에게 보이는 웹서비스에 대한 소개**

  - 사용 데이터(캐글 스팀 데이터 셋)
  - 기술 스택
  - 프론트엔드 (animate.css, framer-motion, styled-component, youtube, slick, bootstrap, axios, rechart, react-spinners, sweetalert2))
  - 백엔드 (require, moment, express-validator, googleapis, nodemailer, redis) 
  - 사용된 라이브러리 (numpy, matplotlib, pandas)
 

## 2. 프로젝트 구성도
  - 와이어프레임: https://www.figma.com/file/Xwd52SgVtdSorkP1VCjY2o/?node-id=37%3A2570
  - 시나리오: https://www.figma.com/file/0MLFFDtVScdXxarxHuwLOL/%EC%8B%9C%EB%82%98%EB%A6%AC%EC%98%A4?node-id=0%3A1
  - API 문서: https://documenter.getpostman.com/view/19585422/Uyr8mdHJ

## 3. 프로젝트 팀원 역할 분담
| 이름 | 담당 업무 |
| ------ | ------ |
| 이영민 | 팀장/프론트엔드 개발 |
| 강주희 | 프론트엔드 개발 |
| 이은여울 | 프론트엔드 개발 |
| 신도희 | 백엔드 개발/발표 |
| 노송희 | 백엔드 개발/배포 |
| 김신웅 | 백엔드 개발/데이터 분석 |



