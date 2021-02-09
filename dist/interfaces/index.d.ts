import { ETheme } from '../enums';
export interface IChatProps {
    container: HTMLDivElement;
    user: ILsChatUser;
    theme?: ETheme;
    headerProps?: IHeaderProps;
    messages?: ILsChatMessage[];
    messageSelectionEnabled?: boolean;
    messageDateFormat?: string;
    interfaceTexts?: IInterfaceTexts;
    onReachEndOfMessagesList?: {
        (info: {
            distanceFromEnd: number;
        }): void;
    };
    onMessageTextInputChange: {
        (text: string): void;
    };
    onSendMessage: {
        (message: ILsChatMessage): Promise<ILsChatMessage>;
    };
    onSuccessSendMessage: {
        (message: ILsChatMessage): void;
    };
    onErrorSendMessage: {
        (message: ILsChatMessage, error: any): void;
    };
    onDeleteMessage: {
        (message: ILsChatMessage): Promise<ILsChatMessage>;
    };
    onSuccessDeleteMessage: {
        (message: ILsChatMessage): void;
    };
    onErrorDeleteMessage: {
        (error: any): void;
    };
}
export interface IFooterProps {
    user: ILsChatUser;
    interfaceTexts?: IInterfaceTexts;
    onMessageTextInputChange?: {
        (text: string): void;
    };
    onCancelReplyingMessage: {
        (): void;
    };
    onSendMessage: {
        (message: ILsChatMessage): Promise<ILsChatMessage>;
    };
    onSuccessSendMessage: {
        (message: ILsChatMessage): void;
    };
    onErrorSendMessage: {
        (message: ILsChatMessage, error: any): void;
    };
}
export interface IThemedComponentProps {
    theme?: ITheme;
}
export interface ITheme {
    DEFAULT_BG_COLOR: string;
    DEFAULT_COLOR: string;
    INPUT_BG_COLOR: string;
    INPUT_FG_COLOR: string;
    PRIMARY_BUTTON_BG_COLOR: string;
    PRIMARY_BUTTON_FG_COLOR: string;
    MESSAGE_BG_COLOR: string;
    USER_MESSAGE_BG_COLOR: string;
    MESSAGE_PENDING_ICON_COLOR: string;
    MESSAGE_DELIVERY_ICON_COLOR: string;
    MESSAGE_READ_ICON_COLOR: string;
    MESSAGE_SELECTED_BG_COLOR: string;
    MESSAGE_REPLY_BG_COLOR: string;
    CLOSE_ICON_FG_COLOR: string;
    CONTROLS_BG_COLOR: string;
}
export interface IIconProps {
    icon: string;
    width?: number;
    height?: number;
    style?: any;
}
export interface IReplyingMessageProps {
    user: ILsChatUser;
    message?: ILsChatMessage;
    isVisible: boolean;
    onCancelReplyingMessage: {
        (): void;
    };
}
export interface IBodyProps {
    user: ILsChatUser;
    messages: ILsChatMessage[];
    messageSelectionEnabled: boolean;
    messageDateFormat?: string;
    interfaceTexts?: IInterfaceTexts;
    onReachEndOfMessagesList?: {
        (info: {
            distanceFromEnd: number;
        }): void;
    };
    onReplyControlPress: {
        (replyingMessage: ILsChatMessage): void;
    };
    onDeleteMessage: {
        (message: ILsChatMessage): Promise<ILsChatMessage>;
    };
    onSuccessDeleteMessage: {
        (message: ILsChatMessage): void;
    };
    onErrorDeleteMessage: {
        (error: any): void;
    };
}
export interface ITypingIndicatorProps {
    isTyping: boolean;
}
export interface IScrollToBottomButtonProps {
    isVisible: boolean;
    onPress: {
        (): void;
    };
}
export interface IArrowProps {
    position: 'right' | 'left';
}
export interface IMessageProps {
    user: ILsChatUser;
    message: ILsChatMessage;
    showDateOnTop: boolean;
    showArrow: boolean;
    messageDateFormat?: string;
    onMessageItemLongPress: {
        (message: ILsChatMessage): void;
    };
}
export interface IReplyProps {
    user: ILsChatUser;
    message: ILsChatMessage | undefined;
}
export interface ILoadingIndicatorProps {
    isFeching: boolean;
}
export interface IEmptyProps {
    isLoading: boolean;
    title?: string;
    message?: string;
    loadingMessage?: string;
}
export interface IControlsProps {
    message: ILsChatMessage | undefined;
    user: ILsChatUser;
    onPressControlBody: {
        (event: any): void;
    };
    onDeleteControlButtonPress: {
        (event: any): void;
    };
    onReplyControlButtonPress: {
        (event: any): void;
    };
}
export interface ILsChatUser {
    id: string;
    name: string;
    photo?: string;
}
export interface ILsChatMessage {
    id: string;
    time: number;
    text: string;
    user: ILsChatUser;
    replyingTo?: ILsChatMessage;
    isDelivered?: boolean;
    isRead?: boolean;
}
export interface IHeaderProps {
    isVisible?: boolean;
    title?: string;
    imageSource?: string;
    onCloseButtonPress?: {
        (event: any): void;
    };
}
export interface IInterfaceTexts {
    messageInputPlaceholder?: string;
    loading?: string;
    emptyMessagesTitle?: string;
    emptyMessagesMessage?: string;
}
