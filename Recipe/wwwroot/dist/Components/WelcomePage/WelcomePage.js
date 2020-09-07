import * as React from "react";
import { Banner } from "./Banner";
import { StandardSelectionImage, StandardSelectionImageWrapper, SelectionImageSubtextWrapper, SelectionImageSubtext } from '../../StyledComponents/SelectionImage';
import { PageContentContainerDiv } from "../../StyledComponents/PageContentContainerDiv";
import { RecipeTypeHeaderWrapper, RecipeTypeHeaderTitle, RecipeTypeHeaderSubtitle } from '../../StyledComponents/RecipeTypeHeader';
import { RecipeTypePreviewContainer } from "../../StyledComponents/RecipeTypeSection";
//TODO: consider constants file for css key words
export const WelcomePage = () => {
    return (React.createElement("div", { className: "test-page" },
        React.createElement(Banner, null),
        React.createElement(PageContentContainerDiv, { alignItems: "flex-start" },
            React.createElement(RecipeTypeHeaderWrapper, null,
                React.createElement(RecipeTypeHeaderTitle, null, "Meal Prep Classics"),
                React.createElement(RecipeTypeHeaderSubtitle, null, "Explore Power Bowls, soups, and other large dishes")),
            React.createElement(RecipeTypePreviewContainer, null,
                React.createElement(StandardSelectionImageWrapper, null,
                    React.createElement(StandardSelectionImage, { src: `https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500` }),
                    React.createElement(SelectionImageSubtextWrapper, null,
                        React.createElement(SelectionImageSubtext, null, "Southwest Salad"))),
                React.createElement(StandardSelectionImageWrapper, null,
                    React.createElement(StandardSelectionImage, { src: `https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500` }),
                    React.createElement(SelectionImageSubtextWrapper, null,
                        React.createElement(SelectionImageSubtext, null, "Southwest Salad"))),
                React.createElement(StandardSelectionImageWrapper, null,
                    React.createElement(StandardSelectionImage, { src: `https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500` }),
                    React.createElement(SelectionImageSubtextWrapper, null,
                        React.createElement(SelectionImageSubtext, null, "Southwest Salad"))),
                React.createElement(StandardSelectionImageWrapper, null,
                    React.createElement(StandardSelectionImage, { src: `https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500` }),
                    React.createElement(SelectionImageSubtextWrapper, null,
                        React.createElement(SelectionImageSubtext, null, "Southwest Salad"))),
                React.createElement(StandardSelectionImageWrapper, null,
                    React.createElement(StandardSelectionImage, { src: `https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500` }),
                    React.createElement(SelectionImageSubtextWrapper, null,
                        React.createElement(SelectionImageSubtext, null, "Southwest Salad")))))));
};
//# sourceMappingURL=WelcomePage.js.map