import { FunctionComponent } from "react";
import {
  useIntersect,
  UseIntersectConfig,
  UseIntersectReturnValue
} from "./useIntersect";

interface IntersectProps {
  children(...args: UseIntersectReturnValue): any;
  config: UseIntersectConfig;
}

export const Intersect: FunctionComponent<IntersectProps> = ({
  config,
  children
}) => {
  const [ref, entry] = useIntersect(config);

  return children(ref, entry);
};
