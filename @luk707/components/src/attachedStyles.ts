export default function(
  borderRadius: string,
  attached?: boolean | "top" | "bottom" | "left" | "right"
) {
  if (!attached) {
    return {
      borderRadius
    };
  }
  switch (attached) {
    case "top":
      return {
        borderBottomLeftRadius: borderRadius,
        borderBottomRightRadius: borderRadius
      };
    case "bottom":
      return {
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius
      };
    case "left":
      return {
        borderTopRightRadius: borderRadius,
        borderBottomRightRadius: borderRadius
      };
    case "right":
      return {
        borderTopRightRadius: borderRadius,
        borderBottomRightRadius: borderRadius
      };
    default:
      return {};
  }
}
