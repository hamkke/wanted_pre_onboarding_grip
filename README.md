# 영화 검색 React app 만들어 보기 

- react
- redux-toolkit
- axios
- react-query 
- react-router
- store.js(기본구현5번)

- 영화 목록 API : https://www.omdbapi.com

- 무한 스크롤 가능(react-query useInfiniteQuery로 만들어 보기)
- 좋아요 목록 드로그앤드롭 가능

# 디자인(초기)
<img width="1920" alt="movie_app_design_main" src="https://user-images.githubusercontent.com/46497281/179384086-35a38bd4-4eb0-4daf-bfd2-57751873a72a.png">

## 개발 요건
1. 디자인은 과제의 평가와 무관하며 자유롭게 작업해주시면 됩니다.
2. 개발환경
 - React 17 이상
3. 오픈소스는 자유롭게 사용할 수 있습니다. 오픈소스 사용시 동작 방식에 대하여 설명이 가능해야 합니다.
4. Recoil 사용 우대 (redux-toolkit 사용할 것)
5. 앱의 아키텍쳐(MVC, MVVM 등) 자유
6. 기타 명시되지 않은 부분은 자유롭게 개발 가능합니다.

## 기본 구현
1. 앱은 하단 탭바를 가지며 총 두개의 하단 탭으로 구성됩니다.
2. 첫번째 탭은 검색, 두번째 탭은 즐겨찾기 입니다.
3. 앱 첫 진입 시 화면
 - 검색 탭에서 시작합니다.
 - 검색 탭은 상단에 검색 입력/검색 버튼 그리고 아래 부분은 검색 결과 화면이 노출됩니다.
 - 처음 검색 결과 영역은 "검색 결과가 없습니다."로 노출됩니다.
4. 검색어 입력 후 검색 버튼 클릭
 - 검색어 입력박스 아래로 검색 결과가 노출됩니다.
 - 한 줄에 하나의 영화를 노출하는 리스트 형 목록입니다. 스크롤 중이더라도 검색어 입력 박스는 함께 스크롤되지
   않고 고정되어있습니다.
 - 각 영화 아이템은 왼쪽에 영화 포스터 이미지, 오른쪽에 영화 제목, 연도, 타입이 표시됩니다.
 - 검색결과 목록을 최하단으로 내렸을 때 API를 이용하여 다음페이지를 불러와 노출해야 합니다.(하단 API 명세
   참조)
 - 검색결과가 없는 경우 "검색 결과가 없습니다."로 노출됩니다.
5. 검색 결과 중 영화 클릭
 - 선택 창이 뜨며 "즐겨찾기" or "취소" 를 선택 가능합니다.
 - "즐겨찾기"를 선택 시 해당 영화정보를 즐겨찾기 탭에서 조회할 수 있습니다.
 - "즐겨찾기"된 데이터는 로컬에 저장하여, 다음에 접속 했을 때, 즐겨찾기 조회가 되어야 합니다.
 - 이미 즐겨찾기 한 영화를 선택한 경우 "즐겨찾기" 대신 "즐겨찾기 제거"를 노출합니다.
 - 즐겨찾기 된 영화는 검색 목록에서 알아볼 수 있도록 아이콘 혹은 텍스트등을 노출해줍니다.(디자인 자유)
6. 하단 즐겨찾기 탭 선택
 - "내 즐겨찾기"라는 Title이 노출됩니다.
 - 현재까지 즐겨찾기한 영화들의 목록이 노출됩니다. 디자인은 검색결과 탭과 동일합니다.
 - 영화를 클릭 시 선택 창이 뜨며 "즐겨찾기 제거" or "취소"를 선택 가능합니다.
 - "즐겨찾기 해제"를 누르는 순간 해당 영화는 목록에서 즉시 제거됩니다.
 - 즐겨찾기 탭은 별도의 페이징 없이 한 번에 모든 데이터를 로딩합니다.


 ## 선택 구현
1. 기본 구현을 모두 완료 했다면 아래의 내용을 선택적으로 구현 가능합니다. 선택사항이므로 아래 내용이 구현되지 않
아도 과제 제출이 가능합니다.
2. 즐겨찾기 목록 순서 조정
 - 즐겨찾기한 영화들의 순서를 드래그&드롭으로 조절 가능합니다.