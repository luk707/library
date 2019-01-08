/**
 * Function to retrieve displayName for given component
 *
 * @param WrappedComponent {React.Component} The react component in which you
 * wish to retrieve the display name.
 */
export default function getDisplayName(WrappedComponent?: {
  displayName?: string;
  name?: string;
}): string {
  // Attempt to get the displayName or name of the component but fallback to
  // "Component" if none are found
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}
