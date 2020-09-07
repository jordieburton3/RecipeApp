import * as React from "react";
import { BannerImg, HeaderContainer } from "../../StyledComponents/BannerImage";
import { BannerHeaderTextContainer, BannerHeaderTitleText, BannerSubheaderText, bannerHeaderMessage, bannerSubheaderMessage } from '../../StyledComponents/BannerHeaderText';
export const Banner = () => {
    return (React.createElement(HeaderContainer, null,
        React.createElement(BannerImg, { src: `https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`, className: "banner__banner-img" }),
        React.createElement(BannerHeaderTextContainer, null,
            React.createElement(BannerHeaderTitleText, null, bannerHeaderMessage),
            React.createElement(BannerSubheaderText, null, bannerSubheaderMessage))));
};
//# sourceMappingURL=Banner.js.map