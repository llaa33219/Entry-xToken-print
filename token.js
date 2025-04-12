(function() {
  // __NEXT_DATA__ 스크립트 태그를 가져옵니다.
  const nextDataEl = document.getElementById('__NEXT_DATA__');
  if (!nextDataEl) {
    console.error('토큰 데이터를 포함한 __NEXT_DATA__ 태그를 찾을 수 없습니다.');
    return;
  }

  let data;
  try {
    // 태그의 텍스트를 JSON으로 파싱합니다.
    data = JSON.parse(nextDataEl.textContent);
  } catch (error) {
    console.error('JSON 파싱 중 오류가 발생했습니다:', error);
    return;
  }

  // 재귀함수를 사용하여 객체 내 "xToken" 값을 찾습니다.
  function findXToken(obj) {
    if (obj && typeof obj === 'object') {
      if ('xToken' in obj) {
        return obj.xToken;
      }
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          const result = findXToken(obj[key]);
          if (result) return result;
        }
      }
    }
    return null;
  }

  const xToken = findXToken(data);
  if (xToken) {
    console.log('찾은 xToken:', xToken);
  } else {
    console.error('JSON 데이터 내에서 xToken 값을 찾을 수 없습니다.');
  }
})();
