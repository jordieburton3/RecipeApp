import * as React from "react";
import { BannerImg, HeaderContainer } from "../../StyledComponents/BannerImage";
import { BannerHeaderTextContainer, BannerHeaderTitleText, BannerSubheaderText, bannerHeaderMessage, bannerSubheaderMessage } from '../../StyledComponents/BannerHeaderText';

export const Banner: React.FunctionComponent = () => {
    return (
        <HeaderContainer>
            <BannerImg 
                src={`https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`} 
                className="banner__banner-img" />
            <BannerHeaderTextContainer>
                <BannerHeaderTitleText>{bannerHeaderMessage}</BannerHeaderTitleText>
                <BannerSubheaderText>{bannerSubheaderMessage}</BannerSubheaderText>
            </BannerHeaderTextContainer>
        </HeaderContainer>
    );
}