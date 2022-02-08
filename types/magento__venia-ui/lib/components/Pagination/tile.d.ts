export default Tile;
declare function Tile(props: any): JSX.Element;
declare namespace Tile {
    namespace propTypes {
        export const classes: import("prop-types").Requireable<import("prop-types").InferProps<{
            root: import("prop-types").Requireable<string>;
            root_active: import("prop-types").Requireable<string>;
        }>>;
        export { bool as isActive };
        export { number };
        export { func as onClick };
    }
}
import { bool, number, func } from "prop-types";

