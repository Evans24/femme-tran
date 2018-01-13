// 문장을 받으면 규칙대로 변환해서 리텅하는 함수
function translator(str){
  // split 하면 array 가 나오고
  // 요소요소 순회는 map 으로 진행
  return str.split('').map(function(char){
    console.log(char);
    var d = Hangul.disassemble(char);
    // 팜므어 로직 : 이중모음이 오면 두번째 모음과 뒤에오는 자음의 위치를 바꾼다
    // ex) 관종 -> 고나종
    if(d[3] && Hangul.isVowel(d[1]) && Hangul.isVowel(d[2])){
      var tmp = d[3];
      d[3] = d[2];
      d[2] = tmp;
    }
    // 다시 합친다
    return Hangul.assemble(d);
  }).join('');
}

window.addEventListener('DOMContentLoaded', function(){
  console.log('init');
  document.getElementById("changeBtn").addEventListener('click', function(){
     var changedText = translator(document.querySelector('.original-text').value);
     document.querySelector('.result-text').innerText = changedText;
  });
});
