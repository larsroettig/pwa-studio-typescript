export default Shimmer;
export type props = {
    /**
     * is an object containing the class names for the
     * Shimmer component.
     */
    classes: {
        root: string;
        root_rectangle: string;
        root_button: string;
        root_checkbox: string;
        root_radio: string;
        root_textArea: string;
        root_textInput: string;
    };
    /**
     * is the border radius of the Shimmer
     */
    borderRadius: number | string;
    /**
     * is the height of the Shimmer
     */
    height: number | string;
    /**
     * is the width of the Shimmer
     */
    width: number | string;
    /**
     * is an object of inline styles
     */
    style: any;
    /**
     * is the type of the Shimmer
     */
    type: string;
    /**
     * are the children of the Shimmer
     */
    children: import("prop-types").Requireable<
        import("prop-types").ReactNodeLike
    >;
};

declare function Shimmer(props: any): JSX.Element;
declare namespace Shimmer {
    namespace propTypes {
        export const classes: import("prop-types").Requireable<
            import("prop-types").InferProps<{
                root: import("prop-types").Requireable<string>;
                root_rectangle: import("prop-types").Requireable<string>;
                root_button: import("prop-types").Requireable<string>;
                root_checkbox: import("prop-types").Requireable<string>;
                root_radio: import("prop-types").Requireable<string>;
                root_textArea: import("prop-types").Requireable<string>;
                root_textInput: import("prop-types").Requireable<string>;
            }>
        >;
        export const borderRadius: import("prop-types").Requireable<
            string | number
        >;
        export const height: import("prop-types").Requireable<string | number>;
        export const width: import("prop-types").Requireable<string | number>;
        export const style: import("prop-types").Requireable<
            import("prop-types").InferProps<{}>
        >;
        export const type: import("prop-types").Requireable<
            'rectangle'|
            'button'|
            'checkbox'|
            'radio'|
            'textArea'|
            'textInput'
        >;
        export { node as children };
    }
    namespace defaultProps {
        const style_1: {};
        export { style_1 as style };
        const type_1: string;
        export { type_1 as type };
    }
}
import { node } from "prop-types";
