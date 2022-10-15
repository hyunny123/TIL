import { useState } from "react";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const ImageSlider = ({ slides }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const goToPrev = () => {
    //첫번쨰 슬라이드 = 현재인덱스 = 0
    const isFirstSlide = currentIdx === 0;
    // 새로운 인덱스 생성 = 첫번째 슬라이드라면 슬라이드 길이에서 1을 뺀 값 아니면 현재인덱스에서 1을 뺀값
    const newIndex = isFirstSlide ? slides.length - 1 : currentIdx - 1;
    setCurrentIdx(newIndex); // 현재 인덱스 설정 호출
  };
  const goToNext = () => {
    //마지막 슬라이드  = 현재인덱스는 슬라이드 길이에서 1을 뺀값
    const isLastSlide = currentIdx === slides.length - 1;
    //새로운 인덱스 생성 = 마지막 슬라이드라면 0 아니면 현재인덱스에서 1을 더한값
    const newIndex = isLastSlide ? 0 : currentIdx + 1;
    setCurrentIdx(newIndex); //인덱스를 사용하여 현재 인덱스 설정 호출
  };
  //슬라이드 이동함수
  //슬라이드로 이동하고 인수로 슬라이드인덱스를 가져오고 여기서 현재인덱스를 설정하고 내부슬라이드인덱스
  const goToSlide = (slideIndex) => {
    setCurrentIdx(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIdx].url})`,
  };

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrev} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
