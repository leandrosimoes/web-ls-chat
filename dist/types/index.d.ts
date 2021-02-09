import { ILsChatMessage, IHeaderProps, ILsChatUser } from '../interfaces';
export declare type TLsChatMessageDesign = ILsChatMessage & {
    showDateOnTop: boolean;
    showArrow: boolean;
};
export declare type IHeaderWithUserProps = IHeaderProps & {
    user: ILsChatUser;
};
