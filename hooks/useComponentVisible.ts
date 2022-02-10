import { useState, useEffect, useRef } from "react";

/**
 * Custom hook to return if the component should be visible.
 *
 * Checks if the user presses escape or clicks outside of the element.
 */
export default function useComponentVisible(initialIsVisible: boolean) {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);
  const ref = useRef<HTMLDivElement>(null);

  // Hide dropdown on escape
  const handleHideDropdown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsComponentVisible(false);
    }
  };

  // Hide component when clicked outside of the ref
  const handleClickOutside = (event: Event) => {
    if (!ref.current?.contains(event.target as Node)) {
      console.log("out");
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    // Bind event listeners on component creation
    document.addEventListener("keydown", handleHideDropdown, true);
    document.addEventListener("click", handleClickOutside, true);

    // Unbind event listeners when component is removed
    return () => {
      document.removeEventListener("keydown", handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}
