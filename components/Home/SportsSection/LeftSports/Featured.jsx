import Image from "next/image";
import React from "react";
import { A, ATag, ImageThumb, NewsTitle } from "../../../Styled/Home.Styled";
import FeaturdThumbnail from "./Image/img.jpg";

function Featured() {
  return (
    <>
      <div>
        <ImageThumb>
          <A href="/single" passHref>
              <ATag>
                <Image src={FeaturdThumbnail} alt="Featured Thumb" />
              </ATag>
          </A>
        </ImageThumb>
        <NewsTitle>
          <A href="/single" passHref>
            <ATag>এমবাপ্পের ‘ইগো’ সামলানোর সামর্থ্য ফ্রান্স কোচের নেই</ATag>
          </A>
        </NewsTitle>
      </div>
    </>
  );
}

export default Featured;
