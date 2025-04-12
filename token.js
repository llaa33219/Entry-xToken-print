(function() {
  // __NEXT_DATA__ 스크립트 태그를 찾습니다.
  const nextDataEl = document.getElementById('__NEXT_DATA__');
  if (!nextDataEl) {
    console.error('토큰 데이터를 포함한 __NEXT_DATA__ 태그를 찾을 수 없습니다.');
    return;
  }

  try {
    // 태그의 텍스트 내용을 JSON으로 파싱합니다.
    const nextData = JSON.parse(nextDataEl.textContent);
    // xToken의 경로는 props → initialState → common → user → xToken 입니다.
    const xToken = nextData?.props?.initialState?.common?.user?.xToken;
    if (xToken) {
      console.log('xToken:', xToken);
    } else {
      console.error('xToken 값을 찾을 수 없습니다.');
    }
  } catch (error) {
    console.error('JSON 파싱 중 오류가 발생했습니다:', error);
  }
})();
