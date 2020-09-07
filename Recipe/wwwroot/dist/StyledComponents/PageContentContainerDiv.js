import styled from 'styled-components';
const pageContainerMaxWidth = "1100px";
export const PageContentContainerDiv = styled("div") `
    max-width: ${pageContainerMaxWidth};
    margin: auto;
    text-align: left;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: ${(props) => props.alignItems ? props.alignItems : "center"};
    justify-content: center;
`;
//# sourceMappingURL=PageContentContainerDiv.js.map