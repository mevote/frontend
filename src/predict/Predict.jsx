import React from 'react';
import styled from '@emotion/styled';
import Header from '../Header';
import predicttitle from '../asset/image/predicttitle.jpg'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 1020px;
  width: 100%;
`;

const TitleImage = styled.div`
    margin-top: 10px;
    display: flex;
`;
const ElectionTitle = styled.div`
    
    font-size: 25px;
    font-weight: bold;
`;

const Election = styled.div`
    background-color: lightgrey;
    height: 10vh;
    width: 96%;
    padding-top:0;
    text-align: center;
    font-size: 30px;
    margin-top: 0px;
    margin-bottom: 20px;
`;

const StyledButton = styled.button`
    margin: 0;
    text-align: center;
    width: 47.5%;
    font-size: 30px;
    height: 100%;
    background-color: lightgrey;
    &:hover {background-color: grey;}
    
`;

const StyledButton2 = styled.button`
    margin: 0;
    text-align: center;
    width: 96%;
    font-size: 18px;
    height: 100%;
    background-color: #595758;
    color: white;
    font-weight: bold;
    
`;


var Check1 = false;
var Check2 = false;
var Check3 = false;
var Check4 = false;
var Check5 = false;
var Vote1 = false;
var Vote2 = false;
var Vote3 = false;
var Vote4 = false;
var Vote5 = false;
var Votetot = 0;
var result = 0;

const funResult = () => {
  if(Vote1)
  {
    Votetot++;
  }
  if(Vote2)
  {
    Votetot++;
  }
  if(Vote3)
  {
    Votetot++;
  }
  if(Vote4)
  {
    Votetot++;
  }
  if(Vote5)
  {
    Votetot++;
  }

  if(!Check1)
  {
    result++;
  }
  if(!Check2)
  {
    result++;
  }
  if(Check3)
  {
    result++;
  }
  if(Check4)
  {
    result++;
  }
  if(!Check5)
  {
    result++;
  }
  const perResult = result/5*100;
  const str="홍길동님의 적중률은 "+perResult+"% 입니다."
  if(Votetot==5)
  {
    Vote1=false;
    Vote2=false;
    Vote3=false;
    Vote4=false;
    Vote5=false;
    document.getElementById("11").style.backgroundColor="lightgrey";
    document.getElementById("12").style.backgroundColor="lightgrey";
    document.getElementById("21").style.backgroundColor="lightgrey";
    document.getElementById("22").style.backgroundColor="lightgrey";
    document.getElementById("31").style.backgroundColor="lightgrey";
    document.getElementById("32").style.backgroundColor="lightgrey";
    document.getElementById("41").style.backgroundColor="lightgrey";
    document.getElementById("42").style.backgroundColor="lightgrey";
    document.getElementById("51").style.backgroundColor="lightgrey";
    document.getElementById("52").style.backgroundColor="lightgrey";
    window.alert(str);
    return str;
}
  else{window.alert("투표하지 않은 항목이 있습니다. 다시 투표해주세요.")}
  result = 0;
  Votetot = 0;
  
}

const funCheck1 = () => {
  Check1 = true;
  Vote1 = true;
  const container = document.getElementById("11")
  const container2 = document.getElementById("12");
  if(Check1)
  {
   container2.style.backgroundColor="lightgrey";
    container.style.backgroundColor="grey";
  }
  
}

const funCheck12 = () => {
  Check1 = false;
  Vote1 = true;
  const container = document.getElementById("11")
  const container2 = document.getElementById("12");
 if(!Check1)
  {
   container.style.backgroundColor="lightgrey";
    container2.style.backgroundColor="grey";
  }
}

const funCheck2 = () => {
  Check2 = true;
  Vote2 = true;
  const container = document.getElementById("21")
  const container2 = document.getElementById("22");
  if(Check2)
  {
   container2.style.backgroundColor="lightgrey";
    container.style.backgroundColor="grey";
  }
}

const funCheck22 = () => {
  Check2 = false;
  Vote2 = true;
  const container = document.getElementById("21")
  const container2 = document.getElementById("22");
 if(!Check2)
  {
   container.style.backgroundColor="lightgrey";
    container2.style.backgroundColor="grey";
  }
}


const funCheck3 = () => {
  Check3 = true;
  Vote3 = true;
  const container = document.getElementById("31")
  const container2 = document.getElementById("32");
  if(Check3)
  {
   container2.style.backgroundColor="lightgrey";
    container.style.backgroundColor="grey";
  }
}

const funCheck32 = () => {
  Check3 = false;
  Vote3 = true;
  const container = document.getElementById("31")
  const container2 = document.getElementById("32");
 if(!Check3)
  {
   container.style.backgroundColor="lightgrey";
    container2.style.backgroundColor="grey";
  }

}

const funCheck4 = () => {
  Check4 = true;
  Vote4 = true;
  const container = document.getElementById("41")
  const container2 = document.getElementById("42");
  if(Check4)
  {
   container2.style.backgroundColor="lightgrey";
    container.style.backgroundColor="grey";
  }
}

const funCheck42 = () => {
  Check4 = false;
  Vote4 = true;
  const container = document.getElementById("41")
  const container2 = document.getElementById("42");
 if(!Check4)
  {
   container.style.backgroundColor="lightgrey";
    container2.style.backgroundColor="grey";
  }
}

const funCheck5 = () => {
  Check5 = true;
  Vote5 = true;
  const container = document.getElementById("51")
  const container2 = document.getElementById("52");
  if(Check5)
  {
   container2.style.backgroundColor="lightgrey";
    container.style.backgroundColor="grey";
  }
}

const funCheck52 = () => {
  Check5 = false;
  Vote5 = true;
  const container = document.getElementById("51")
  const container2 = document.getElementById("52");
 if(!Check5)
  {
   container.style.backgroundColor="lightgrey";
    container2.style.backgroundColor="grey";
  }
}




/*function Button(children) {
    return <StyledButton>{children}</StyledButton>;
}*/

function Predict() {
  
    return (
        <Container>
          <Header />          
          <TitleImage><img src={predicttitle}/></TitleImage>
          <ElectionTitle>서울 시·도지사 선거</ElectionTitle>
          <Election>
            <StyledButton id="11" onClick={funCheck1}>기호 1번 송영길</StyledButton> vs <StyledButton id="12" onClick={funCheck12}>기호 2번 오세훈</StyledButton> 
            </Election>            
            <ElectionTitle>부산 시·도지사 선거</ElectionTitle>
          <Election>
              <StyledButton id="21" onClick={funCheck2}>기호 1번 변성완</StyledButton> vs <StyledButton id="22" onClick={funCheck22}>기호 2번 박형준</StyledButton>
          </Election>
          <ElectionTitle>경기 시·도지사 선거</ElectionTitle>
          <Election>
            <StyledButton id = "31" onClick={funCheck3}>기호 1번 김동연</StyledButton> vs <StyledButton id="32" onClick={funCheck32}>기호 2번 김은혜</StyledButton>
          </Election>
          <ElectionTitle>서울시 교육감 선거</ElectionTitle>
          <Election>
            <StyledButton  id = "41" onClick={funCheck4}>조희연</StyledButton> vs <StyledButton  id = "42" onClick={funCheck42}>조전혁</StyledButton>
          </Election>
          <ElectionTitle>경기 교육감 선거</ElectionTitle>
          <Election>
            <StyledButton id="51" onClick={funCheck5}>성기선</StyledButton> vs <StyledButton id="52" onClick={funCheck52}>임태희</StyledButton>
          </Election>
            <StyledButton2 onClick={funResult}>결과 보기</StyledButton2>
        </Container>  

        
      );
}
export default Predict;
