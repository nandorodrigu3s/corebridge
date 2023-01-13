import styled from 'styled-components/native';

export interface ProfileContainerProps {
  hasPadding?: boolean;
  hasBorder?: boolean;
  addFlex?: boolean;
  flexible?: boolean;
  radiusValue?: number;
  containerWidth?: number;
  containerHeight?: number;
  marginUp?: number;
  marginDown?: number;
  justifyCon?: string;
  alignCon?: string;
  alignItem?: string;

}

export const ProfileContainer = styled.View<ProfileContainerProps>`
  ${(props: ProfileContainerProps) => props.containerWidth && `width: ${props.containerWidth}%;`};
  ${(props: ProfileContainerProps) => props.containerHeight
    ? `height: ${props.containerHeight}%;`
    : 'auto'
  };
  ${(props: ProfileContainerProps) => props.hasBorder && 'border: 5px solid black;'};
  ${(props: ProfileContainerProps) => props.hasPadding && 'padding: 8px'};
  ${(props: ProfileContainerProps) => props.hasPadding && 'padding: 8px'};
  ${(props: ProfileContainerProps) => props.hasPadding && 'padding: 8px'};
  ${(props: ProfileContainerProps) => props.marginUp && `margin-top: ${props.marginUp}px`};
  ${(props: ProfileContainerProps) => props.marginDown &&`margin-bottom: ${props.marginDown}px`};
  ${(props: ProfileContainerProps) => props.flexible
    ? `flex: 1`
    : null
  };
  ${(props: ProfileContainerProps) => props.justifyCon
    ? `justify-content: ${props.justifyCon};`
    : null
  };
  ${(props: ProfileContainerProps) => props.alignItem
    ? `align-items: ${props.alignItem};`
    : null
  };
  ${(props: ProfileContainerProps) => props.alignCon
    ? `align-content: ${props.alignCon};`
    : null
  };
`;