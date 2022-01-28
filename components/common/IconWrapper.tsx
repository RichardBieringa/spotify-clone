import React, { ReactElement, ReactNode } from "react";

interface Props {
  size?: number;
  children: React.ReactNode;
}

/**
 * Wrapper Component that takes in any icon and styles it.
 *
 * Used to get consistent styling accross multiple components.
 */
const IconWrapper = ({ children, size = 20 }: Props) => {
  const classNames = `m-1 cursor-pointer text-gray-400 transition duration-75 hover:scale-110 hover:text-gray-300`;

  const styledChildren = React.Children.map<ReactNode, ReactNode>(
    children,
    (child) => {
      // Creates new properties to be assigned to the cloned element
      const props = {
        className: classNames,
        size: size,
      };

      // Creates a new element based on the passed element and modifies its properties
      return React.cloneElement(child as ReactElement, props);
    }
  );

  return <>{styledChildren}</>;
};

export default IconWrapper;
