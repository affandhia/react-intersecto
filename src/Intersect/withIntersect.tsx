import React from "react";
import { useIntersect, UseIntersectConfig } from "./useIntersect";

export const withIntersect = (config: UseIntersectConfig) => (
  Component: any
) => {
  return (props: any) => {
    const [ref, entry] = useIntersect(config);

    return <Component ref={ref} entry={entry} {...props} />;
  };
};

/*
import React from "react";
import { useIntersect, UseIntersectConfig } from "./useIntersect";

export const withIntersect = (config: UseIntersectConfig) => (
  Component: any
) => {
  return (props: any) => {
    const NewComponent = ({ forwardedRef, ...rest }) => {
      const [theref, entry] = useIntersect(config);d
      return <Component ref={forwardedRef} {...rest} />;
    };

    

    // Note the second param "ref" provided by React.forwardRef.
    // We can pass it along to LogProps as a regular prop, e.g. "forwardedRef"
    // And it can then be attached to the Component.
    function forwardRef(props, ref) {
      return <NewComponent {...props} forwardedRef={ref} />;
    }

    // These next lines are not necessary,
    // But they do give the component a better display name in DevTools,
    // e.g. "ForwardRef(logProps(MyComponent))"
    const name = Component.displayName || Component.name;
    forwardRef.displayName = `withIntersect(${name})`;

    return React.forwardRef(forwardRef);
  };
};


function logProps(Component) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log("old props:", prevProps);
      console.log("new props:", this.props);
    }

    render() {
      const { forwardedRef, ...rest } = this.props;

      // Assign the custom prop "forwardedRef" as a ref
      return <Component ref={forwardedRef} {...rest} />;
    }
  }

  // Note the second param "ref" provided by React.forwardRef.
  // We can pass it along to LogProps as a regular prop, e.g. "forwardedRef"
  // And it can then be attached to the Component.
  function forwardRef(props, ref) {
    return <LogProps {...props} forwardedRef={ref} />;
  }

  // These next lines are not necessary,
  // But they do give the component a better display name in DevTools,
  // e.g. "ForwardRef(logProps(MyComponent))"
  const name = Component.displayName || Component.name;
  forwardRef.displayName = `logProps(${name})`;

  return React.forwardRef(forwardRef);
}
*/
