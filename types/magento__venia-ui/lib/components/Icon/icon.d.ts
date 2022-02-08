export default Icon;
declare function Icon(props: any): JSX.Element;
declare namespace Icon {
    namespace propTypes {
        export const attrs: import("prop-types").Requireable<import("prop-types").InferProps<{}>>;
        export const classes: import("prop-types").Requireable<import("prop-types").InferProps<{
            icon: import("prop-types").Requireable<string>;
            root: import("prop-types").Requireable<string>;
        }>>;
        export { number as size };
        export const src: import("prop-types").Validator<object>;
    }
}
import { number } from "prop-types";
