import React from "react";

const ReviewCarousel = () => {
  return (
    <div>
      <Carousel
        cols={4}
        rows={1}
        gap={11}
        responsiveLayout={[
          {
            breakpoint: 1200,
            cols: 3,
          },
          {
            breakpoint: 990,
            cols: 2,
          },
        ]}
        mobileBreakpoint={670}
        arrowRight={<ArrowBtn type="right" />}
        arrowLeft={<ArrowBtn type="left" />}
      >
        {[...Array(8)].map((_, i) => (
          <Carousel.Item key={i}>
            <Card>
              <Img img={`https://picsum.photos/200/160?random=${i}`} />
              <Title>
                Day Tour From Tokyo: Tambara Ski Park &amp; Strawberry Picking
              </Title>
              <Star>★★★★★</Star>
              <Price>
                TWD <span>2,500</span>
              </Price>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ReviewCarousel;
