import * as React from "react";
import { Banner } from "./Banner";
import { StandardSelectionImage, StandardSelectionImageWrapper, SelectionImageSubtextWrapper, SelectionImageSubtext } from '../../StyledComponents/SelectionImage';
import { PageContentContainerDiv } from "../../StyledComponents/PageContentContainerDiv";
import { RecipeTypeHeaderWrapper, RecipeTypeHeaderTitle, RecipeTypeHeaderSubtitle } from '../../StyledComponents/RecipeTypeHeader';
import { RecipeTypePreviewContainer } from "../../StyledComponents/RecipeTypeSection";

//TODO: consider constants file for css key words

export const WelcomePage: React.FunctionComponent = (): React.ReactElement => {
    return (
        <div className="test-page">
            <Banner />
            <PageContentContainerDiv alignItems={"flex-start"}>
                <RecipeTypeHeaderWrapper>
                    <RecipeTypeHeaderTitle>Meal Prep Classics</RecipeTypeHeaderTitle>
                    <RecipeTypeHeaderSubtitle>Explore Power Bowls, soups, and other large dishes</RecipeTypeHeaderSubtitle>
                </RecipeTypeHeaderWrapper>
                <RecipeTypePreviewContainer>
                    <StandardSelectionImageWrapper>
                        <StandardSelectionImage src={`https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`} />
                        <SelectionImageSubtextWrapper>
                            <SelectionImageSubtext>
                                Southwest Salad
                            </SelectionImageSubtext>
                        </SelectionImageSubtextWrapper>
                    </StandardSelectionImageWrapper>
                    <StandardSelectionImageWrapper>
                        <StandardSelectionImage src={`https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`} />
                        <SelectionImageSubtextWrapper>
                            <SelectionImageSubtext>
                                Southwest Salad
                            </SelectionImageSubtext>
                        </SelectionImageSubtextWrapper>
                    </StandardSelectionImageWrapper>
                    <StandardSelectionImageWrapper>
                        <StandardSelectionImage src={`https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`} />
                        <SelectionImageSubtextWrapper>
                            <SelectionImageSubtext>
                                Southwest Salad
                            </SelectionImageSubtext>
                        </SelectionImageSubtextWrapper>
                    </StandardSelectionImageWrapper>
                    <StandardSelectionImageWrapper>
                        <StandardSelectionImage src={`https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`} />
                        <SelectionImageSubtextWrapper>
                            <SelectionImageSubtext>
                                Southwest Salad
                            </SelectionImageSubtext>
                        </SelectionImageSubtextWrapper>
                    </StandardSelectionImageWrapper>
                    <StandardSelectionImageWrapper>
                        <StandardSelectionImage src={`https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`} />
                        <SelectionImageSubtextWrapper>
                            <SelectionImageSubtext>
                                Southwest Salad
                            </SelectionImageSubtext>
                        </SelectionImageSubtextWrapper>
                    </StandardSelectionImageWrapper>
                </RecipeTypePreviewContainer>
            </PageContentContainerDiv>
        </div>
    );
}